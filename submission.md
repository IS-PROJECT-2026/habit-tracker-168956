# Project Submission Report

## 1. Student Details
Full Name: Mutunga Eric Musyimi
GitHub Username: RicoTunga
Email: eric.musyimi@strathmore.edu

## 2. Deployed Project Link
Live GitHub Pages URL: https://is-project-2026.github.io/habit-tracker-168956/

## 3. Reflection — Grounded in Your Git History

### A. Your Best Commit
Commit URL: [PASTE URL OF "feat: persist habits to localStorage" COMMIT HERE]

Why this one? This commit uses a precise `feat:` type, a subject line describing exactly one change, and a `Closes #4` footer linking it directly to its tracking issue — no unrelated changes bundled in.

### B. A Mistake or Struggle
Link to the evidence: [PASTE URL OF feat/1-scaffold-layout BRANCH OR ITS FIRST COMMIT HERE]

What happened and how did you recover? I initially ran file-creation commands in PowerShell, which doesn't support bash heredoc (`<< 'EOF'`) syntax, so the branch was created but my files failed to write. I switched to Git Bash, verified the branch already existed with `git status`, checked out the same branch instead of creating a duplicate, and re-ran the file commands successfully.

### C. A Pull Request You're Proud Of
PR URL: [PASTE URL OF THE PR THAT RESOLVED CONFLICT 1 (feat/11-header-color-b -> main) HERE]

What did you check before merging? I reviewed the diff to confirm the conflict markers were fully removed, verified only one accent color value remained in style.css, and checked that the resolved value still matched the CSS variable used elsewhere in the stylesheet before merging.

### D. One Thing You Would Do Differently
What would you change? I would write a short body for every commit explaining the reasoning behind the change, not just the footer — my earliest commits only state what changed and which issue it closes, with no context on why that approach was chosen.

Link to the evidence of the original decision: [PASTE URL OF "feat: scaffold base HTML and CSS layout" COMMIT HERE]

## 4. Screenshots of Key GitHub Features

CRITICAL: Do not type manual folder paths. Edit this file directly on the GitHub web interface, click the blank line below each prompt, and paste (Ctrl+V) your screenshot.

### A. Milestones and Issues
[PASTE MILESTONE SCREENSHOT HERE VIA GITHUB WEB EDITOR]

Caption: Three milestones (M1 Core CRUD, M2 Persistence & Styling, M3 Streaks & Polish) each with granular issues linked directly to them.

### B. Project Board
[PASTE PROJECT BOARD SCREENSHOT HERE VIA GITHUB WEB EDITOR]

Caption: Issues progressed through To Do, In Progress, and Done columns as each feature branch was completed and merged.

### C. Branching Architecture
[PASTE BRANCHING SCREENSHOT HERE VIA GITHUB WEB EDITOR]

Caption: Branch names follow conventional, issue-linked patterns such as feat/4-local-storage-persistence, style/5-styling-pass, and fix/13-streak-bug.

### D. Pull Requests & Traceability
[PASTE PULL REQUEST SCREENSHOT HERE VIA GITHUB WEB EDITOR]

Caption: PR for Issue #4 shows the localStorage persistence feature merged into main, with "Closes #4" linking it directly to its tracking issue.

## 5. Merge Conflict Evidence

### Conflict 1 — Full Chronology
What cause did you use? Concurrent edit to the same line — two branches both modified the same CSS variable independently.

**Step 1: Generating the Clash**
[PASTE SCREENSHOT OF ATTEMPTED MERGE / TERMINAL WARNING HERE VIA GITHUB WEB EDITOR]

Caption: Merging origin/main into feat/11-header-color-b triggered a conflict in style.css because both branches changed the same line.

**Step 2: Inside the Code Editor (Conflict Markers)**
[PASTE SCREENSHOT OF RAW CONFLICT MARKERS HERE VIA GITHUB WEB EDITOR]

Caption: Both branches set a different hex value for --accent-strong; I kept the red value from main and discarded the blue value.

**Step 3: Resolution & Clean Merge**
[PASTE SCREENSHOT OF CLEAN RESOLUTION HERE VIA GITHUB WEB EDITOR]

Caption: After removing the conflict markers and committing the resolution, the PR merged cleanly into main.

### Conflict 2 — Different Cause
What cause did you use? Rename vs. edit conflict.

Why does this cause trigger a conflict? One branch renamed script.js to app.js while another branch edited content on the corresponding line of the original file. Git's rename detection couldn't reconcile the path change with the conflicting content edit, so it required a manual merge.

[PASTE SCREENSHOT OF CONFLICT MARKERS FOR CONFLICT 2 HERE VIA GITHUB WEB EDITOR]

Caption: Branches feat/12-rename-script and fix/13-streak-bug collided on the streak-seed comment line inside the renamed file.

### Conflict 3 — Different Cause
What cause did you use? Delete vs. modify conflict.

Why does this cause trigger a conflict? One branch deleted notes.txt entirely while another branch edited its content. Since one side removed the file and the other changed it, Git couldn't determine which version represented the intended final state.

[PASTE SCREENSHOT OF CONFLICT MARKERS FOR CONFLICT 3 HERE VIA GITHUB WEB EDITOR]

Caption: Branches chore/14-remove-placeholder and docs/15-edit-placeholder conflicted over whether notes.txt should exist.

## 6. Feedback & Evaluation
Anonymous Evaluation Form: Course & Instructor Evaluation
