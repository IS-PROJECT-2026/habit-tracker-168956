const STORAGE_KEY = "habitTracker.v1";

const form = document.getElementById("habit-form");
const input = document.getElementById("habit-name");
const habitList = document.getElementById("habit-list");
const emptyState = document.getElementById("empty-state");

let habits = loadHabits();
render();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = input.value.trim();
  if (!name) {
    return;
  }

  habits.unshift({
    id: createId(),
    name,
    completedDates: []
  });

  persistHabits();
  render();
  form.reset();
  input.focus();
});

habitList.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) {
    return;
  }

  const actionButton = target.closest("button[data-action]");
  if (!actionButton) {
    return;
  }

  const item = actionButton.closest("li[data-id]");
  if (!item) {
    return;
  }

  const id = item.dataset.id;
  if (!id) {
    return;
  }

  if (actionButton.dataset.action === "delete") {
    deleteHabit(id);
  }
});

function render() {
  habitList.innerHTML = "";

  if (habits.length === 0) {
    emptyState.hidden = false;
    return;
  }

  emptyState.hidden = true;

  for (const habit of habits) {
    const item = document.createElement("li");
    item.className = "habit-item";
    item.dataset.id = habit.id;

    item.innerHTML = `
      <div class="habit-main">
        <p class="habit-name">${escapeHtml(habit.name)}</p>
      </div>
      <div class="habit-actions">
        <button class="delete-btn" data-action="delete" type="button">Delete</button>
      </div>
    `;

    habitList.appendChild(item);
  }
}

function deleteHabit(id) {
  habits = habits.filter((habit) => habit.id !== id);
  persistHabits();
  render();
}

function loadHabits() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed
      .filter((item) => item && typeof item.id === "string" && typeof item.name === "string")
      .map((item) => ({
        id: item.id,
        name: item.name,
        completedDates: Array.isArray(item.completedDates)
          ? item.completedDates.filter((date) => typeof date === "string")
          : []
      }));
  } catch {
    return [];
  }
}

function persistHabits() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(habits));
}

function createId() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }

  return `habit-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
