# SilicoPharm Website Developer Guide (EN)

This guide is for front-end developers who are new to Jekyll and need to modify this repository safely.

## 1) What this project is
- Static website built with Jekyll.
- Current MVP routes:
  - `/` (Home)
  - `/get-started/`
  - `/docs/` and docs child pages
  - `/examples/` and `/examples/target-discovery/`
- Shared UI and sections are built with Jekyll includes.

## 2) Local setup and run
Prerequisites:
- Ruby
- Bundler (`gem install bundler`)

Install dependencies:
```bash
bundle install
```

Run local dev server:
```bash
bundle exec jekyll serve
```

Build static output:
```bash
bundle exec jekyll build
```

Output folder:
- Generated site: `_site/`

## 3) Project structure
```text
.
├─ _config.yml                 # Jekyll site config
├─ _layouts/                   # Page layouts (marketing/docs/page/post)
├─ _includes/
│  ├─ ui/                      # Shared UI: HeaderNav, Footer, Container
│  └─ components/              # Page sections (HeroSection, etc.)
├─ _data/
│  ├─ navigation.yml           # Top nav/docs/footer route config
│  ├─ site.yml                 # Brand + CTA config
│  ├─ en.yml / ko.yml          # Legacy language strings and toggle labels
├─ assets/
│  ├─ css/
│  │  ├─ tokens.css            # Design tokens (color/space/radius)
│  │  ├─ base.css              # Base style overrides for MVP
│  │  ├─ components.css        # Component-level custom styles
│  │  └─ demo.css              # Existing template/demo styles
│  └─ img/
│     ├─ hero/                 # Hero placeholder assets
│     └─ examples/             # Example snapshot placeholders
├─ index.html                  # Home (EN default)
├─ index.en.html               # Home (EN explicit)
├─ index.ko.html               # Home (KO)
├─ get-started/index.html
├─ docs/...                    # Docs pages
└─ examples/...                # Examples pages
```

## 4) How Jekyll works in this repo
Each page has frontmatter (`---` block) + content.

Typical frontmatter fields:
- `layout`: selects `_layouts/*.html`
- `lang`: language key (`en`, `ko`)
- `title`, `description`
- page-specific data objects (for components)

Example (Home pattern):
```yaml
---
layout: marketing
lang: en
title: Home
sections:
  - type: HeroSection
  - type: ValuePropsSection
hero:
  title: "..."
---
```

Then render sections:
```liquid
{% for section in page.sections %}
  {% include components/SectionRenderer.html section=section %}
{% endfor %}
```

## 5) Layout and include flow
Main flow for marketing pages:
1. page file (`index.html`, `get-started/index.html`, etc.)
2. `layout: marketing`
3. `_layouts/marketing.html`
4. shared includes (`head.html`, `ui/HeaderNav.html`, `ui/Footer.html`, `scripts.html`)
5. section includes in `_includes/components/`

Docs flow is similar but uses `_layouts/docs.html` with a docs sidebar sourced from `_data/navigation.yml`.

## 6) CSS structure and class ownership
This project uses both vendor/template classes and custom classes.

### 6.1 Vendor/template classes (do not treat as custom)
Loaded from `assets/vendor/...` and template CSS in `head.html`.

Examples of library/template classes used in markup:
- Grid/layout: `container`, `row`, `col-lg-6`, `col-md-4`
- Spacing/utilities: `mb-4`, `py-8`, `d-flex`, `gap-3`
- Components: `card`, `btn`, `badge`, `navbar`

These are provided by bundled vendor/theme CSS + JS.

### 6.2 Custom classes (project-owned)
Defined in:
- `assets/css/tokens.css`
- `assets/css/base.css`
- `assets/css/components.css`

Custom classes are mostly prefixed with `mvp-`.

Examples:
- `.mvp-page`
- `.mvp-hero`
- `.mvp-get-started-hero`
- `.mvp-examples-gallery`

Rule of thumb:
- If class looks like utility/grid (`row`, `col-*`, `mb-*`, `d-flex`), it is vendor.
- If class starts with `mvp-` (or appears only in `assets/css/*.css` custom files), it is custom.

## 7) Common edit scenarios

### A) Change navigation labels or routes
Edit:
- `_data/navigation.yml`

Example:
```yaml
primary:
  - key: docs
    label: Docs
    url: /docs/
```

### B) Add a new section to Home
1. Create section include in `_includes/components/`, for example `NewSection.html`.
2. Update `_includes/components/SectionRenderer.html`.
3. Add section type and data in `index.html` (and localized versions if needed).

Renderer update example:
```liquid
{% when "NewSection" %}
  {% include components/NewSection.html %}
```

### C) Add a new docs page
1. Create `docs/<slug>/index.html` with `layout: docs`.
2. Add route entry in `_data/navigation.yml` under `docs:`.

Page example:
```yaml
---
layout: docs
title: New Doc
---
<h1>New Doc</h1>
```

## 8) Safe development checklist
Before commit:
1. Run `bundle exec jekyll build`.
2. Verify links for `/`, `/get-started/`, `/docs/`, `/examples/`.
3. Check responsive layout quickly (mobile width + desktop width).
4. Keep custom style changes in `tokens/base/components` first, avoid patching vendor files.

## 9) Notes for multilingual edits
- Home currently has `index.en.html` and `index.ko.html`.
- Language toggle labels/href are in `_data/en.yml` and `_data/ko.yml`.
- If you add localized pages, keep route and link behavior consistent.
