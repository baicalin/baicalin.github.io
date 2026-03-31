## Task 2: Shared Architecture Change Proposal (For Approval)

### Goal
Introduce the reusable shared structure needed by the MVP IA without breaking current pages, then use this structure in later page tasks.

### Proposed Strategy
- Add new shared layouts and includes under architecture-aligned paths.
- Add data-driven nav/site config files.
- Avoid modifying legacy landing includes during this step.
- Keep migration incremental: shared structure first, then page implementations.

## File-Level Change List

### New files to create
1. `_layouts/marketing.html`
- Purpose: base layout for Home, Get Started, Examples pages.
- Will include:
  - `{% include head.html %}`
  - shared nav: `{% include ui/HeaderNav.html %}`
  - `{{ content }}`
  - shared footer: `{% include ui/Footer.html %}`
  - `{% include scripts.html %}`
- Will also link new CSS files:
  - `assets/css/tokens.css`
  - `assets/css/base.css`
  - `assets/css/components.css`

2. `_layouts/docs.html`
- Purpose: docs layout with docs sidebar + content area.
- Will include same shared head/nav/footer.
- Main area: two-column structure
  - left: docs sidebar nav built from `_data/navigation.yml`
  - right: page content

3. `_includes/ui/HeaderNav.html`
- Purpose: shared top navigation component.
- Data source: `_data/navigation.yml` and `_data/site.yml`.
- Behavior:
  - render top nav links: Home/Get Started/Docs/Examples
  - render CTA button: "Try KnockG"
  - render language toggle using existing language data (`_data/en.yml`/`_data/ko.yml`) for now

4. `_includes/ui/Footer.html`
- Purpose: shared minimal footer for all new layouts.
- Content:
  - copyright line
  - optional minimal footer links from `_data/navigation.yml`

5. `_includes/ui/Container.html`
- Purpose: reusable width wrapper.
- API:
  - optional include param `class`
  - outputs a standard container div and `{{ include.content }}`

6. `_data/navigation.yml`
- Purpose: central navigation source of truth.
- Structure:
  - `primary`: list of nav items with label/key/url
  - `docs`: docs tree used for sidebar
  - `footer`: optional footer link list

7. `_data/site.yml`
- Purpose: global site UI text/settings.
- Structure:
  - `brand_name`, `brand_logo`, `cta_label`, `cta_url`

### Existing files proposed to modify in Task 3
1. `_includes/head.html`
- Proposed update:
  - keep current vendor links
  - add conditional/fallback `<title>` using `page.title` first, then existing localized title
  - no removal of current assets in this phase

2. `_includes/scripts.html`
- Proposed update:
  - keep current JS includes
  - add optional hook for page-specific scripts if needed (`page.scripts`)

### Existing files intentionally untouched in Task 3
- `_includes/navbar.html` (legacy)
- `_includes/footer.html` (legacy)
- `index.html`, `index.en.html`, `index.ko.html` (handled later page tasks)
- `_layouts/default.html` (legacy compatibility)

## Why this split
- Shared architecture can be introduced safely without forcing immediate migration.
- Later page tasks can switch to `layout: marketing`/`layout: docs` one by one.
- Reduces regression risk while still aligning to required architecture.

## Acceptance for Task 3
- New shared layout/include/data files exist and build cleanly.
- No existing route behavior is intentionally broken.
- No page content migration is done yet (that is handled in Tasks 4+).
