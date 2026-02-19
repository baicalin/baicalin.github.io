## Task 1 Gap Report: Current Jekyll Structure vs 4-Page MVP

### Objective Reference
Target MVP requires:
- Routes: `/`, `/get-started/`, `/docs/`, `/examples/`
- Docs subtree: `/docs/getting-started/`, `/docs/concepts/`, `/docs/condition-spec/`, `/docs/api/`
- Examples detail: `/examples/target-discovery/`
- Reusable shared UI + section components
- Minimal design tokens/base/components CSS
- Placeholder assets under `assets/img/hero/` and `assets/img/examples/`
- Working internal links and successful `jekyll build`

### Current Structure Snapshot
- Root pages: `index.html`, `index.en.html`, `index.ko.html`, `about.markdown`, `404.html`
- Layouts: `_layouts/default.html` (plus `_layouts/default.html.old`)
- Includes: flat in `_includes/` (e.g. `navbar.html`, `footer.html`, `landing-*.html`)
- Data: `_data/en.yml`, `_data/ko.yml`
- CSS: `assets/css/demo.css` only (no tokens/base/components files)
- Routes/folders for MVP docs/examples/get-started do not exist

### Coverage Matrix
1. Home route `/`: `PARTIAL`
- Exists, but implemented as single long landing page using hardcoded include sequence in `index.html`.
- Not aligned with component contract in architecture (no `sections` frontmatter array).

2. Get Started `/get-started/`: `MISSING`
- No page exists.

3. Docs landing `/docs/` + 4 docs pages: `MISSING`
- No `docs/` pages.
- No `_docs/` collection or alternative docs page tree.

4. Examples landing `/examples/` + detail page: `MISSING`
- No `examples/` pages.
- No `_examples/` collection or equivalent structure.

5. Shared UI components (`HeaderNav`, `Footer`, `Container`): `PARTIAL`
- Existing `navbar.html` and `footer.html` can be adapted.
- No `_includes/ui/` directory, no `Container` component.

6. Section components for MVP pages: `MISSING/PARTIAL`
- Existing `landing-*` sections are legacy landing-specific and data-coupled.
- No `_includes/components/` structure or MVP-oriented section set.

7. Data-driven navigation (`_data/navigation.yml`, `_data/site.yml`): `MISSING`
- Current nav is hardcoded anchors (`#landingFeatures`, `#landingPricing`, etc.) in `_includes/navbar.html`.

8. Layout model (`marketing`, `docs`): `MISSING`
- Only `default` layout exists.
- No docs layout/sidebar pattern.

9. Design tokens + base/component CSS: `MISSING`
- `assets/css/demo.css` is template demo CSS; no tokenized system.

10. Placeholder assets in required folders: `MISSING`
- `assets/img/hero/` not present.
- `assets/img/examples/` not present.

11. Internal link structure for 4-page IA: `MISSING`
- Current top nav links in-page sections, not MVP routes.

12. Multilingual support baseline: `EXISTS`
- `index.html`, `index.en.html`, `index.ko.html` + language toggle strings in `_data/en.yml`/`_data/ko.yml`.
- Needs adaptation to work with new route architecture.

### Notable Risks / Constraints for Implementation
- `about.markdown` uses `layout: page` and `_posts/...` uses `layout: post`, but those layouts are not present in `_layouts/`.
- If currently unhandled, these may break `jekyll build` during final verification and will need cleanup or layout mapping.
- Current UI stack loads template vendor assets; architecture states Materialize-first. We should keep scope minimal and avoid large framework rewrites unless necessary for MVP completion.

### Recommended Next Step (Task 2)
Propose exact file-level shared architecture changes for approval before edits:
1. Add new layout(s): `_layouts/marketing.html`, `_layouts/docs.html`.
2. Add shared UI include structure: `_includes/ui/HeaderNav.html`, `_includes/ui/Footer.html`, `_includes/ui/Container.html`.
3. Add navigation/site data files: `_data/navigation.yml`, `_data/site.yml`.
4. Keep legacy includes temporarily for compatibility, then route new pages to new components.
