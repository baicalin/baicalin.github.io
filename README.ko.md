# SilicoPharm 웹사이트 개발 가이드 (KO)

이 문서는 Jekyll이 익숙하지 않은 프론트엔드 개발자가 이 저장소를 빠르게 이해하고 수정할 수 있도록 만든 가이드입니다.

## 1) 프로젝트 개요
- Jekyll 기반 정적 웹사이트입니다.
- 현재 MVP 주요 경로:
  - `/` (Home)
  - `/get-started/`
  - `/docs/` + 하위 문서 페이지
  - `/examples/` + `/examples/target-discovery/`
- 공통 UI와 섹션은 Jekyll include 컴포넌트로 구성되어 있습니다.

## 2) 로컬 실행/빌드
사전 준비:
- Ruby
- Bundler (`gem install bundler`)

의존성 설치:
```bash
bundle install
```

로컬 서버 실행:
```bash
bundle exec jekyll serve
```

정적 빌드:
```bash
bundle exec jekyll build
```

출력 디렉터리:
- `_site/`

## 3) 디렉터리 구조
```text
.
├─ _config.yml                 # Jekyll 설정
├─ _layouts/                   # 레이아웃 (marketing/docs/page/post)
├─ _includes/
│  ├─ ui/                      # 공통 UI: HeaderNav, Footer, Container
│  └─ components/              # 페이지 섹션 컴포넌트
├─ _data/
│  ├─ navigation.yml           # 상단 메뉴/문서 사이드바/푸터 링크
│  ├─ site.yml                 # 브랜드/CTA 설정
│  ├─ en.yml / ko.yml          # 레거시 다국어/토글 문자열
├─ assets/
│  ├─ css/
│  │  ├─ tokens.css            # 디자인 토큰
│  │  ├─ base.css              # 기본 스타일 조정
│  │  ├─ components.css        # 컴포넌트 커스텀 스타일
│  │  └─ demo.css              # 기존 템플릿 스타일
│  └─ img/
│     ├─ hero/                 # hero 플레이스홀더 에셋
│     └─ examples/             # example 플레이스홀더 에셋
├─ index.html / index.en.html / index.ko.html
├─ get-started/index.html
├─ docs/...
└─ examples/...
```

## 4) 이 저장소에서 Jekyll 동작 방식
페이지는 `frontmatter(---)` + 본문으로 구성됩니다.

자주 쓰는 frontmatter 키:
- `layout`: `_layouts/*.html` 선택
- `lang`: 언어 키 (`en`, `ko`)
- `title`, `description`
- 컴포넌트가 읽는 페이지 데이터 객체

Home 패턴 예시:
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

섹션 렌더링 예시:
```liquid
{% for section in page.sections %}
  {% include components/SectionRenderer.html section=section %}
{% endfor %}
```

## 5) 레이아웃/컴포넌트 렌더링 흐름
마케팅 페이지 기준 흐름:
1. 페이지 파일 (`index.html`, `get-started/index.html` 등)
2. `layout: marketing`
3. `_layouts/marketing.html`
4. 공통 include (`head.html`, `ui/HeaderNav.html`, `ui/Footer.html`, `scripts.html`)
5. `_includes/components/` 내부 섹션 include

문서 페이지는 `_layouts/docs.html`을 사용하며, 사이드바는 `_data/navigation.yml`의 `docs` 목록으로 렌더링됩니다.

## 6) CSS 구조 (라이브러리 클래스 vs 커스텀 클래스)
이 프로젝트는 벤더/템플릿 클래스와 프로젝트 커스텀 클래스를 함께 사용합니다.

### 6.1 벤더/템플릿 클래스
`assets/vendor/...` 및 템플릿 CSS에서 제공됩니다.

마크업에서 자주 보이는 예:
- Grid/Layout: `container`, `row`, `col-lg-6`, `col-md-4`
- Utility: `mb-4`, `py-8`, `d-flex`, `gap-3`
- Component: `card`, `btn`, `badge`, `navbar`

이 클래스들은 프로젝트가 만든 클래스가 아니라 벤더/테마가 제공하는 클래스입니다.

### 6.2 프로젝트 커스텀 클래스
다음 파일에서 관리합니다:
- `assets/css/tokens.css`
- `assets/css/base.css`
- `assets/css/components.css`

주로 `mvp-` 접두사 클래스를 사용합니다.

예:
- `.mvp-page`
- `.mvp-hero`
- `.mvp-get-started-hero`
- `.mvp-examples-gallery`

판별 기준:
- `row`, `col-*`, `mb-*`, `d-flex` 같은 유틸리티/그리드 패턴이면 벤더 클래스
- `mvp-`로 시작하거나 `assets/css/*.css` 커스텀 파일에만 있으면 프로젝트 클래스

## 7) 자주 하는 수정 작업

### A) 상단 메뉴/링크 수정
수정 파일:
- `_data/navigation.yml`

예시:
```yaml
primary:
  - key: docs
    label: Docs
    url: /docs/
```

### B) Home 섹션 추가
1. `_includes/components/`에 새 섹션 파일 생성 (예: `NewSection.html`)
2. `_includes/components/SectionRenderer.html`에 매핑 추가
3. `index.html`(필요 시 `index.ko.html`) frontmatter에 `sections`와 데이터 추가

렌더러 매핑 예시:
```liquid
{% when "NewSection" %}
  {% include components/NewSection.html %}
```

### C) Docs 페이지 추가
1. `docs/<slug>/index.html` 생성 (`layout: docs`)
2. `_data/navigation.yml`의 `docs:` 항목에 추가

페이지 예시:
```yaml
---
layout: docs
title: New Doc
---
<h1>New Doc</h1>
```

## 8) 안전한 작업 체크리스트
커밋 전:
1. `bundle exec jekyll build` 실행
2. `/`, `/get-started/`, `/docs/`, `/examples/` 링크 확인
3. 모바일/데스크톱에서 레이아웃 확인
4. 벤더 파일 직접 수정 대신 `tokens/base/components`에 커스텀 추가

## 9) 다국어 작업 참고
- Home은 `index.en.html`, `index.ko.html`을 사용합니다.
- 언어 토글 문자열/href는 `_data/en.yml`, `_data/ko.yml`에 있습니다.
- 다국어 페이지를 추가할 때 경로/네비게이션 규칙을 일관되게 유지하세요.
