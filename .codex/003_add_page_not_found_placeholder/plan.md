## Objective
Add a proper Page Not Found placeholder experience so invalid routes no longer break the navigation ratio/layout, with localized placeholder content in Korean and English.

## Requirements & Constraints
- Must follow architecture source of truth from `./.codex/_architecture.md`.
- Objective scope is Page not-found placeholder behavior and localized placeholder content (`:ko`, `:en`).
- MVP scope listed in core includes `README.ko.md` and `README.en.md`; verify whether this is intended scope or stale metadata before applying changes.
- Never read `.env`; no need to read `pdfs` or `logs`.
- Before changing any existing file, show proposed changes and get explicit user approval.
- Ask the user before starting each task and only execute tasks listed in `Now`.

## Plan
1. All planned tasks are complete.

## Now
1. No active task.

## Finished
1. Read `./.codex/_architecture.md`.
2. Summarized objective and constraints.
3. Created `./.codex/003_add_page_not_found_placeholder/`.
4. Copied current `core.md` into objective directory.
5. Created this `plan.md`.
6. Task 1 complete: inspected 404/not-found behavior, nav/layout, and localization routing; identified global `.container` CSS in `404.html` as the nav ratio/layout break source.
7. Task 2 complete: drafted and got approval for concrete edits in `404.html`, `_data/en.yml`, `_data/ko.yml`.
8. Task 3 complete: implemented approved 404 and localization data changes.
9. Task 4 complete: ran `bundle exec jekyll build` and verified `_site/404.html` and `_site/ko/404.html` output behavior.
10. Task 5 complete: documented verification in `./.codex/003_add_page_not_found_placeholder/task4_verification.md` and finalized workflow record.
