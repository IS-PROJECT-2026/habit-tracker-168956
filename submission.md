# Project Submission Report

## 1. Student Details
Full Name: Mutunga Eric Musyimi
GitHub Username: RicoTunga
Email: eric.musyimi@strathmore.edu

## 2. Deployed Project Link
Live GitHub Pages URL: https://is-project-2026.github.io/habit-tracker-168956/

## 3. Reflection — Grounded in Your Git History

### A. Your Best Commit
Commit URL: https://github.com/IS-PROJECT-2026/habit-tracker-168956/commit/f3bcd702967a1758290b8225c69dcee7985cb7b1

Why this one? This commit uses a precise `feat:` type, a subject line describing exactly one change, and a `Closes #4` footer linking it directly to its tracking issue — no unrelated changes bundled in.

### B. A Mistake or Struggle
Link to the evidence: https://github.com/IS-PROJECT-2026/habit-tracker-168956/commit/262d3c0ee91def9f042a138c363de2e130e3e249

What happened and how did you recover? I initially ran file-creation commands in PowerShell, which doesn't support bash heredoc (`<< 'EOF'`) syntax, so the branch was created but my files failed to write. I switched to Git Bash, verified the branch already existed with `git status`, checked out the same branch instead of creating a duplicate, and re-ran the file commands successfully.

### C. A Pull Request You're Proud Of
PR URL: https://github.com/IS-PROJECT-2026/habit-tracker-168956/commit/7b7ddd11c48e5d467570372161373f70dd575014
What did you check before merging? I reviewed the diff to confirm the conflict markers were fully removed, verified only one accent color value remained in style.css, and checked that the resolved value still matched the CSS variable used elsewhere in the stylesheet before merging.

### D. One Thing You Would Do Differently
What would you change? I would write a short body for every commit explaining the reasoning behind the change, not just the footer — my earliest commits only state what changed and which issue it closes, with no context on why that approach was chosen.

Link to the evidence of the original decision: https://github.com/IS-PROJECT-2026/habit-tracker-168956/commit/7b7ddd11c48e5d467570372161373f70dd575014

## 4. Screenshots of Key GitHub Features

CRITICAL: Do not type manual folder paths. Edit this file directly on the GitHub web interface, click the blank line below each prompt, and paste (Ctrl+V) your screenshot.

### A. Milestones and Issues
<img width="1908" height="733" alt="image" src="https://github.com/user-attachments/assets/c7c8b569-3bc8-44d0-ae8f-0bd0976949a3" />


Caption: Three milestones (M1 Core CRUD, M2 Persistence & Styling, M3 Streaks & Polish) each with granular issues linked directly to them.

### B. Project Board
<img width="1913" height="1349" alt="image" src="https://github.com/user-attachments/assets/1fecff05-b731-4e4c-bebe-66abdaabb820" />


Caption: Issues progressed through To Do, In Progress, and Done columns as each feature branch was completed and merged.

### C. Branching Architecture
<img width="1873" height="1297" alt="image" src="https://github.com/user-attachments/assets/eaee2f10-babe-4180-aa19-0325f0476a9f" />


Caption: Branch names follow conventional, issue-linked patterns such as feat/4-local-storage-persistence, style/5-styling-pass, and fix/13-streak-bug.

### D. Pull Requests & Traceability
<img width="1857" height="2004" alt="image" src="https://github.com/user-attachments/assets/76a81e1f-d6cb-458b-9c1d-6ab5d0f1b28e" />


Caption: PR for Issue #4 shows the localStorage persistence feature merged into main, with "Closes #4" linking it directly to its tracking issue.

## 5. Merge Conflict Evidence

### Conflict 1 — Full Chronology
What cause did you use? Concurrent edit to the same line — two branches both modified the same CSS variable independently.

**Step 1: Generating the Clash**
<img width="1554" height="1600" alt="image" src="https://github.com/user-attachments/assets/12317c24-242e-4c9f-8821-9391f715a4e5" />



Caption: Merging origin/main into feat/11-header-color-b triggered a conflict in style.css because both branches changed the same line.

**Step 2: Inside the Code Editor (Conflict Markers)**
<img width="1554" height="1020" alt="image" src="https://github.com/user-attachments/assets/66c896ff-6c56-460d-8353-d70040dc373c" />


Caption: Both branches set a different hex value for --accent-strong; I kept the red value from main and discarded the blue value.



### Conflict 2 — Different Cause
What cause did you use? Rename vs. edit conflict.

Why does this cause trigger a conflict? One branch renamed script.js to app.js while another branch edited content on the corresponding line of the original file. Git's rename detection couldn't reconcile the path change with the conflicting content edit, so it required a manual merge.

<img width="1600" height="861" alt="image" src="https://github.com/user-attachments/assets/7aef870e-5887-4fc8-9f77-e0952d8ad5be" />



Caption: Branches feat/12-rename-script and fix/13-streak-bug collided on the streak-seed comment line inside the renamed file.

### Conflict 3 — Different Cause
What cause did you use? Delete vs. modify conflict.

Why does this cause trigger a conflict? One branch deleted notes.txt entirely while another branch edited its content. Since one side removed the file and the other changed it, Git couldn't determine which version represented the intended final state.

<img width="1562" height="1600" alt="image" src="https://github.com/user-attachments/assets/92bb916f-5aac-4536-b6f2-e0dab13fcb0f" />


Caption: Branches chore/14-remove-placeholder and docs/15-edit-placeholder conflicted over whether notes.txt should exist.

## 6. Feedback & Evaluation
Anonymous Evaluation Form: Course & Instructor Evaluation
