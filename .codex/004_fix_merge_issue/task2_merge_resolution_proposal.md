## Task 2 Proposal: Merge Resolution (`apply latest update first`)

### Current Merge State
- In-progress merge with `MERGE_HEAD = 5adbd90` (`origin/dev` side).
- Unmerged files:
  - `Gemfile.lock`
  - `_data/en.yml`
  - `_includes/landing-reviews.html`
  - `_layouts/post.html`
  - `index.en.html` (DU)
  - `index.ko.html` (DU)

### Resolution Principle
- Prioritize the latest branch updates from `10-asset_follow_up` (`HEAD`, includes `#10` work and recent not-found changes).
- Keep incoming `dev` additions only where they are already auto-merged/staged and non-conflicting.

### Proposed Resolutions
1. `Gemfile.lock`
- Keep **ours (HEAD)** entirely.
- Reason: includes newer locked versions and `jekyll-polyglot` dependency used by current architecture.

2. `_data/en.yml`
- Keep **ours (HEAD)** entirely.
- Reason: preserves current MVP data model + localized not-found keys from latest update.

3. `_includes/landing-reviews.html`
- Keep **ours (HEAD)** entirely.
- Reason: follows latest branch state; incoming side contains outdated structure and a typo (`item.positio`).

4. `_layouts/post.html`
- Keep **ours (HEAD)** entirely.
- Reason: preserves current post layout (`layout: page` + `article` structure) from latest branch.

5. `index.en.html`, `index.ko.html`
- Resolve as **deleted** (keep HEAD deletion).
- Reason: latest branch intentionally removed these in favor of current localization approach.

### Planned Commands (after approval)
```bash
git checkout --ours Gemfile.lock _data/en.yml _includes/landing-reviews.html _layouts/post.html
git add Gemfile.lock _data/en.yml _includes/landing-reviews.html _layouts/post.html
git rm index.en.html index.ko.html
```

Then verify:
```bash
rg -n "^(<<<<<<<|=======|>>>>>>>)" -g '!_site/**' -g '!assets/vendor/**' .
git status --porcelain=v1 -b
bundle exec jekyll build
```

### Expected Outcome
- All merge conflicts resolved in favor of latest `#10` updates.
- Merge state ready for commit.
- Build remains successful.
