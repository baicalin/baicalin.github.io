## Verification Results

### Build
- Command: `bundle exec jekyll build`
- Result: success
- Notes:
  - Ruby stdlib deprecation warnings for `csv`, `base64`, `bigdecimal` were printed.
  - No build failure.

### Generated Not-Found Pages
- `_site/404.html` exists.
- `_site/ko/404.html` exists.

### Layout/Nav Validation
- Removed global `.container` override from source `404.html`.
- Generated pages keep shared navbar container classes and no local `.container { ... }` override.

### Localization Validation
- English 404 title appears in `_site/404.html`: `Page not found`.
- Korean 404 title appears in `_site/ko/404.html`: `페이지를 찾을 수 없습니다`.
- Language toggle links:
  - `_site/404.html` -> `/ko/404.html`
  - `_site/ko/404.html` -> `/404.html`

