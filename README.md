# Helicon

Source for [samuelstanton.github.io](https://samuelstanton.github.io), built with [Astro](https://astro.build).

## Run it locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # writes the site to dist/
```

## Where things live

| To change | Edit |
| --- | --- |
| An essay | `src/content/essays/<name>.md` |
| The author bio | `src/content/pages/bio.md` |
| Publications and patents | `src/data/publications.yaml` |
| Research themes on the home page | `src/data/research.json` |
| Site name, motto, links | `src/data/site.json` |
| Colors and type | `src/styles/global.css` |
| CV and other downloads | `public/` |

## Add an essay

Create `src/content/essays/my-title.md`:

```markdown
---
title: My title
date: 2026-11-13
kind: essay        # or tutorial
summary: One or two sentences for the contents list and link previews.
draft: true        # leave out, or set to false, to publish
---

The text, in Markdown. Math works with $...$ and $$...$$.
```

The newest essay that is not a draft leads the home page.

## Deploy

Merging to `main` builds the site and publishes it to the `gh-pages` branch (see `.github/workflows/deploy.yml`).
