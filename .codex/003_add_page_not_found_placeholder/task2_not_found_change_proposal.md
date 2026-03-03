## Task 2 Proposal: Page Not Found Placeholder (`en`, `ko`)

### Requirement Summary
- Fix nav/layout ratio break on not-found pages.
- Provide localized not-found placeholder content in English and Korean.
- Keep route behavior compatible with Polyglot output (`/404.html`, `/ko/404.html`).

### Root Cause Confirmed
- `404.html` currently injects a global `.container` CSS rule.
- Because header/footer also use `.container`, this rule shrinks nav/footer width and breaks layout ratio.

### Proposed File Changes

1. `404.html` (replace current content)
- Remove the global `<style>` block entirely.
- Render a layout-safe section/card using existing utility classes only (no global selector overrides).
- Pull all display text from locale data (`site.data[site.active_lang].not_found`).

Proposed structure:
```liquid
---
permalink: /404.html
layout: marketing
title: 404
description: Page not found
---

{% assign t = site.data[site.active_lang] %}
{% assign nf = t.not_found %}

<section class="section-py mvp-not-found">
  <div class="container py-10">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="card shadow-none border text-center">
          <div class="card-body p-7 p-md-10">
            <p class="text-uppercase text-primary fw-semibold mb-3">{{ nf.eyebrow | default: "404" }}</p>
            <h1 class="display-6 fw-bold mb-3">{{ nf.title | default: "Page not found" }}</h1>
            <p class="mb-6">{{ nf.description | default: "The page you requested could not be found." }}</p>

            <div class="d-flex flex-wrap justify-content-center gap-3">
              <a class="btn btn-primary" href="{{ nf.primary_cta.url | default: '/' | relative_url }}">
                {{ nf.primary_cta.label | default: "Go Home" }}
              </a>
              <a class="btn btn-outline-primary" href="{{ nf.secondary_cta.url | default: '/docs/' | relative_url }}">
                {{ nf.secondary_cta.label | default: "Open Docs" }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

2. `_data/en.yml` (add `not_found` block)
```yml
not_found:
  eyebrow: "404"
  title: "Page not found"
  description: "The page you requested does not exist or the address may be incorrect."
  primary_cta:
    label: "Go Home"
    url: "/"
  secondary_cta:
    label: "Open Docs"
    url: "/docs/"
```

3. `_data/ko.yml` (add `not_found` block)
```yml
not_found:
  eyebrow: "404"
  title: "페이지를 찾을 수 없습니다"
  description: "요청하신 페이지가 없거나 주소가 올바르지 않을 수 있습니다."
  primary_cta:
    label: "홈으로 이동"
    url: "/"
  secondary_cta:
    label: "문서 보기"
    url: "/docs/"
```

### Notes
- No `HeaderNav` logic change is proposed; current language toggle mapping on 404 already resolves correctly.
- No README edits are proposed for this objective. The README scope listed in `core.md` appears to be stale metadata for this task.

### Verification Plan (after implementation)
- Run `bundle exec jekyll build`.
- Confirm both generated pages exist: `_site/404.html`, `_site/ko/404.html`.
- Confirm no inline/global `.container` style exists in generated 404 pages.
- Confirm nav container width remains normal and language toggle links `404.html <-> /ko/404.html`.
