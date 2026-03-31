## Task 4: Home Page Sections Proposal (For Approval)

### Goal
Implement Home page with required sections using reusable components:
- Hero
- Value Props
- How It Works
- Collaboration

### Proposed file changes

#### New files (create)
1. `_includes/components/HeroSection.html`
- Renders `page.hero` content: eyebrow, title, subtitle, primary CTA, secondary CTA, optional badge list.

2. `_includes/components/ValuePropsSection.html`
- Renders `page.value_props` list (3 cards).

3. `_includes/components/HowItWorksSection.html`
- Renders `page.how_it_works` steps (3 numbered steps).

4. `_includes/components/CollaborationSection.html`
- Renders `page.collaboration` partner bullets + CTA.

5. `_includes/components/SectionRenderer.html`
- Maps `sections[].type` to the right include via Liquid `case`.

#### Existing files (modify)
1. `index.html`
- Switch from legacy landing includes to `layout: marketing`.
- Add frontmatter content objects (`hero`, `value_props`, `how_it_works`, `collaboration`) and `sections` list.
- Render sections by iterating `page.sections` and including `SectionRenderer`.

2. `index.en.html`
- Same structure/content as `index.html` (English).

3. `index.ko.html`
- Same structure but Korean copy for section text and CTAs.

### Proposed frontmatter structure
```yaml
layout: marketing
lang: en
title: Home
description: ...
sections:
  - type: HeroSection
  - type: ValuePropsSection
  - type: HowItWorksSection
  - type: CollaborationSection
hero:
  eyebrow: ...
  title: ...
  subtitle: ...
  primary_cta:
    label: Get Started
    url: /get-started/
  secondary_cta:
    label: Read Docs
    url: /docs/
value_props:
  heading: ...
  items:
    - title: ...
      description: ...
how_it_works:
  heading: ...
  steps:
    - title: ...
      description: ...
collaboration:
  heading: ...
  description: ...
  points:
    - ...
  cta:
    label: Explore Examples
    url: /examples/
```

### Notes
- This task changes only Home pages and Home components.
- Styling will rely on existing utility classes for now; dedicated tokens/base/components CSS is planned in Task 8.
- Legacy landing includes remain in repo for compatibility but will no longer be used by `index*.html`.
