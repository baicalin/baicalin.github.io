## Task 6 Implementation

Created docs route tree aligned to architecture:
- `/docs/` -> `docs/index.html`
- `/docs/getting-started/` -> `docs/getting-started/index.html`
- `/docs/concepts/` -> `docs/concepts/index.html`
- `/docs/condition-spec/` -> `docs/condition-spec/index.html`
- `/docs/api/` -> `docs/api/index.html`

All docs pages use `layout: docs` and are linked from docs landing and sidebar.

Validation:
- `bundle exec jekyll build` succeeds.
- Remaining warnings are pre-existing legacy layout warnings (`page`, `post`).
