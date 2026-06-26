# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Jekyll-based academic personal website built on the [al-folio](https://github.com/alshedivat/al-folio) theme, deployed to GitHub Pages at `https://jrupprec.github.io`. Content covers research publications, CV, teaching materials, and news.

## Architecture

### Content Flow

Content sources → Liquid templates → Jekyll build → `_site/` (HTML output)

- **`_pages/`** — Markdown pages (about, CV, publications, blog, teaching, etc.)
- **`_bibliography/papers.bib`** — BibTeX entries auto-converted to HTML via `jekyll-scholar`; the primary way to add/update publications
- **`_data/`** — YAML data files: `cv.yml` (structured CV), `socials.yml` (contact links), `coauthors.yml`, `venues.yml`, `repositories.yml`
- **`_news/`**, **`_posts/`**, **`_projects/`**, **`_courses/`**, **`_books/`** — Jekyll collections with per-item markdown files
- **`_layouts/`** — Liquid layout templates; `about` is the homepage layout
- **`_includes/`** — Reusable partials (header, footer, figure, video, metadata, etc.)
- **`_sass/`** — SCSS source; `_themes.scss` controls color theming, `_variables.scss` controls spacing/typography

### Publications Workflow

Publications live entirely in `_bibliography/papers.bib`. The `jekyll-scholar` plugin renders them. Key BibTeX fields beyond standard:

- `preview` — thumbnail image filename (place file in `assets/img/publication_preview/`)
- `pdf` — PDF filename or URL
- `selected={true}` — shows entry in homepage highlights
- `bibtex_show={true}` — enables collapsible BibTeX block
- `arxiv`, `doi`, `code`, `website` — generate badge links automatically

Author highlighting is configured in `_config.yml` under `scholar.last_name` / `scholar.first_name`.

### Configuration

`_config.yml` is the master config. Key sections:

- Site metadata: `title`, `url`, `baseurl`, author info
- `scholar` block: bibliography rendering, author name for highlighting, citation badges
- Collection definitions: `news`, `projects`, `books`, `courses`
- Feature toggles: `enable_math`, `enable_darkmode`, `enable_search`, `enable_medium_zoom`, etc.
- `theme_color` — sets the color theme (default: purple)

### Deployment

- **`main` branch** — source (edit here)
- **`gh-pages` branch** — compiled output (managed by `bin/deploy` or GitHub Actions)
- GitHub Actions (`.github/workflows/deploy.yml`) auto-deploys on push to `main`; skips doc-only changes
- `bin/deploy` does: build → PurgeCSS → create `.nojekyll` → force-push to `gh-pages`

### Custom Plugins (`_plugins/`)

- `google-scholar-citations.rb`, `inspirehep-citations.rb` — fetch live citation counts at build time
- `download-3rd-party.rb` — bundles CDN assets locally
- `cache-bust.rb` — asset versioning fingerprints
- `hide-custom-bibtex.rb`, `details.rb` — bibliography display customization

### Image Optimization

`jekyll-imagemagick` auto-generates responsive WebP variants at build time (480 px, 800 px, 1400 px) for images placed in `assets/img/`. No manual conversion needed.
