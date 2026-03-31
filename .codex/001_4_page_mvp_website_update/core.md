# .codex/core.md

## Objective
Deliver the MVP website update based on the 4-page strategy:
Home / Get Started / Docs / Examples

## 작업 설명
- Update website information architecture and navigation for 4-page MVP.
- Implement Jekyll pages and reusable components (includes) to support:
  - Home: Hero, Value Props, How it works, Collaboration
  - Get Started: Quickstart steps, Web vs API, Minimal code snippet
  - Docs: minimal docs tree with clear structure
  - Examples: gallery + at least one detailed example page
- Add minimal design tokens and base/component CSS.
- Add placeholder assets (hero background + example snapshots).
- Ensure `jekyll build` succeeds and internal links are correct.

## Scope (MVP)
Included:
- Pages: /, /get-started/, /docs/, /examples/ (+ 1 example detail)
- Components: HeaderNav, Footer, Container, and section components needed for above pages
- Docs skeleton: 4 docs pages
- Examples skeleton: 1 detailed example

Excluded (later):
- Proof hub / Case studies hub
- Full OpenAPI rendering
- Blog / research section
- Auth / dashboard integration

## Rules
- Never read any `.env` file.
- You do not need to read `pdfs` or `logs`.
- Before starting any new task, always read `./.codex/_architecture.md`.
- After that, read the current **Objective** in this file, summarize it, and create a directory `./.codex/[number]_[objective_name]` (with an increasing number like `001`, `002`, etc.).
- In that directory:
  - Copy the current `core.md` into the directory.
  - Create a `plan.md` (using `./.codex/_template_plan.md` as a reference) with small, checkable steps to achieve the Objective.
  - When you should answer long results of thinking, you write document as `.md`.
  - If the objective is planning, constructing or system, you must write `design.md`.
- Follow this workflow for `plan.md`:
  - `plan.md` is just for recording workflow.
  - When you start a task, ask me before doing it and move that task into the `Now` section.
  - Work only on the tasks listed in `Now`.
  - When you finish a task, move it from `Now` to `Finished` and then pull the first task from `Plan` into `Now`.
- Before changing the content of any existing file, show the proposed changes to the user and get explicit approval.
- When you need to update or add information (`_architecture.md` etc) or template (`_template_plan.md`, `core.md` etc), ask me before applying it.
- Clarify requirements and constraints first, and write the `plan.md`.

## Definition of Done
- 4 pages exist and are linked via navigation
- At least one example detail page exists
- Docs landing + 3~4 minimal docs pages exist
- `jekyll build` passes
- Mobile responsive basics (nav works, layout readable)
- Assets are present (hero + example snapshots) with consistent visual style
