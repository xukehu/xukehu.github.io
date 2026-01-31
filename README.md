# Academic Homepage - Dr. rer. nat. Xuke Hu

A modern, accessible academic website built with Astro + Tailwind CSS. All content is derived from the provided CV PDF.

## Quick start

```bash
npm install
npm run dev
```

Build & preview:

```bash
npm run build
npm run preview
```

## GitHub Pages deployment

This repo supports **both** user/organization pages and project pages.

### 1) User/Org Pages (https://uhuohuy.github.io/)

- Repository name must be `uhuohuy.github.io`.
- GitHub → **Settings → Pages** → **Build and deployment** → **Source: GitHub Actions**.
- Push to `main`. The workflow will set `PUBLIC_BASE_PATH=/` automatically.

### 2) Project Pages (https://uhuohuy.github.io/<repo>/)

- Repository name can be anything (e.g. `academic-site`).
- GitHub → **Settings → Pages** → **Build and deployment** → **Source: GitHub Actions**.
- Push to `main`. The workflow will set `PUBLIC_BASE_PATH=/<repo>` automatically.

### Local build switching (base path)

You can manually set base path and site URL using env vars:

```bash
PUBLIC_BASE_PATH=/ PUBLIC_SITE_URL=https://uhuohuy.github.io npm run build

# Project pages (replace <repo>)
PUBLIC_BASE_PATH=/academic-site PUBLIC_SITE_URL=https://uhuohuy.github.io/academic-site npm run build
```

Optional convenience script (uses package.json config):

```bash
# Set once
npm pkg set config.repo=academic-site

# Build for project pages using the configured repo name
npm run build:project
```

## Content updates

The site is a single-page layout with section anchors (About, Publications, Projects, Service, Contact). All content is data-driven and lives in `src/data/*.json`.

- Profile + CV details: `src/data/profile.json`
- Publications: `src/data/publications.json`
- Projects/Datasets: `src/data/projects.json`
- Teaching: `src/data/teaching.json`
- Service: `src/data/service.json`
- Awards: `src/data/awards.json`
- Highlights: `src/data/highlights.json`

If you deploy under a project subpath, update `profile.links.website` in `src/data/profile.json` to match the final URL.

### Replace the profile photo

Preferred (optimized):
- Replace `src/assets/profile.jpg`.

Fallback (no build-time optimization):
- Place an image at `public/profile.jpg`.

### Replace the CV PDF

Replace the placeholder at:
- `public/cv.pdf`

The `/cv` page will automatically use the updated file.

## Project structure

```
src/
  components/
  data/
  layouts/
  pages/
  styles/
public/
.github/workflows/
```

## Notes

- Dark/light theme toggle is persistent (localStorage) and respects `prefers-color-scheme` by default.
- SEO metadata, OpenGraph/Twitter cards, and JSON-LD Person schema are included.
- `sitemap.xml` is generated during build from `src/pages/sitemap.xml.ts`.

## License

MIT License. See `LICENSE`.
