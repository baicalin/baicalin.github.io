## Objective
Fix merge issues in the repository, prioritizing applying the latest commit/update first.

## Requirements & Constraints
- Must read and follow architecture source of truth: `./.codex/_architecture.md`.
- Must resolve merge issues while preserving the latest intended updates first.
- MVP scope listed in `core.md`: `README.ko.md`, `README.en.md`.
- Never read `.env`; no need to read `pdfs` or `logs`.
- Before changing any existing file, show proposed changes and get explicit user approval.
- Ask the user before starting each task and work only on tasks in `Now`.

## Plan
1. All planned tasks are complete.

## Now
1. No active task.

## Finished
1. Read `./.codex/_architecture.md`.
2. Summarized objective and constraints.
3. Created `./.codex/004_fix_merge_issue/`.
4. Copied current `core.md` into objective directory.
5. Created this `plan.md`.
6. Task 1 complete: inspected merge state and history; identified unresolved conflicts in `Gemfile.lock`, `_data/en.yml`, `_includes/landing-reviews.html`, `_layouts/post.html`, `index.en.html`, and `index.ko.html`, with `MERGE_HEAD` at `5adbd90`.
7. Task 2 complete: proposed file-by-file merge resolution strategy in `task2_merge_resolution_proposal.md` and received approval.
8. Task 3 complete: applied approved merge resolutions (`ours` for conflicted files and `git rm` for `index.en.html`, `index.ko.html`), resulting in no remaining unmerged files/conflict markers.
9. Task 4 complete: validated build/checks and finalized merge state with commit `6e96d41` (`NO_MERGE_IN_PROGRESS`).
10. Task 5 complete: documented final results in `task5_final_verification.md` and closed workflow.
