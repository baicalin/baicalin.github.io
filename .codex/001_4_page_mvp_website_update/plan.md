## Objective
Deliver the MVP website update for the 4-page strategy: Home (`/`), Get Started (`/get-started/`), Docs (`/docs/`), Examples (`/examples/`) plus one example detail page, with reusable Jekyll components, minimal design system CSS, placeholder assets, and a passing `jekyll build`.

## Requirements & Constraints
- Must read from architecture source of truth: `./.codex/_architecture.md`.
- Must keep MVP IA/routes aligned to architecture:
  - `/`, `/get-started/`, `/docs/`, `/examples/`
  - Docs children: `/docs/getting-started/`, `/docs/concepts/`, `/docs/condition-spec/`, `/docs/api/`
  - Example detail: `/examples/target-discovery/`
- Must use Jekyll components/includes and reusable shared UI (`HeaderNav`, `Footer`, `Container` + section components).
- Must add minimal design tokens/base/component CSS and placeholder assets under `assets/img/hero/` and `assets/img/examples/`.
- Must ensure internal links are correct and `bundle exec jekyll build` succeeds.
- Must not read any `.env` file.
- Must not read `pdfs` or `logs`.
- Must ask user before starting each implementation task and only work tasks listed in `Now`.
- Must get explicit approval before changing any existing file.

## Plan
1. All planned MVP tasks are completed.

## Now
1. No active task.

## Finished
1. Read `./.codex/_architecture.md`.
2. Summarized objective and constraints.
3. Created `./.codex/001_4_page_mvp_website_update/`.
4. Copied `./.codex/core.md` into the objective directory.
5. Created this `plan.md`.
6. Task 1 complete: inspected current Jekyll structure and wrote gap report at `./.codex/001_4_page_mvp_website_update/gap_report.md`.
7. Task 2 complete: proposed shared architecture updates in `./.codex/001_4_page_mvp_website_update/task2_shared_architecture_proposal.md`.
8. Task 3 complete: implemented approved shared layout/include/data files and shared head/script updates.
9. Task 4 complete: implemented Home sections with reusable components and migrated `index.html`, `index.en.html`, `index.ko.html` to `layout: marketing`.
10. Task 5 complete: implemented `/get-started/` with quickstart steps, Web vs API comparison, and minimal API code snippet.
11. Task 6 complete: implemented docs landing and 4-page docs tree at `/docs/`, `/docs/getting-started/`, `/docs/concepts/`, `/docs/condition-spec/`, `/docs/api/`.
12. Task 7 complete: implemented examples landing and detailed example at `/examples/` and `/examples/target-discovery/`.
13. Task 8 complete: implemented design tokens/base/components CSS and placeholder hero/examples assets.
14. Task 9 complete: validated build, routes, and internal links against MVP done criteria.
