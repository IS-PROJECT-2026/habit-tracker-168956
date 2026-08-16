const form = document.getElementById("habit-form");
const input = document.getElementById("habit-name");
const habitList = document.getElementById("habit-list");
const emptyState = document.getElementById("empty-state");

let habits = [];
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
  render();
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
