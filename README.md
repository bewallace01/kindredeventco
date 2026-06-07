# Kindred Event Collective — Wedding Planning Website

A boutique luxury wedding-planning website for a Charlotte, North Carolina studio. Built with **[Astro](https://astro.build)** (static output) and a **[Sanity](https://www.sanity.io)** CMS so the studio can manage its own wedding photos and client reviews.

> Built on the studio's brand board: lavender–heather–peach palette, Playfair Display + Lora typography, with a script accent.

## Pages
Home · About · Services · Weddings (portfolio) · Love Notes (testimonials) · Inquire (contact)

## Content management (for Nezzie)
Photos and reviews are managed in a hosted Sanity Studio — no code required:

**Studio:** https://kindred-event-collective.sanity.studio/

- **Weddings** — each has a couple name, venue/location, a **cover photo**, and a **photo gallery** (clicking a wedding on the site opens its gallery in a lightbox). A wedding only appears on the live site once it has a cover photo and is **Published**.
- **Testimonials** — couple name, quote, star rating, and an optional "feature" toggle (the featured one shows large at the top of Love Notes).

The site is rebuilt with the latest **published** content on every deploy. To make content changes go live automatically, connect a [Sanity webhook → Vercel Deploy Hook](https://www.sanity.io/docs/webhooks) (see `docs/TASKS.md`).

## Project structure
```
src/
  layouts/Layout.astro   — shared head, header/nav, footer
  pages/                 — index, about, services, portfolio, testimonials, contact, 404 (.astro)
  lib/sanity.ts          — Sanity client image helper + GROQ queries
public/
  css/styles.css         — full design system (brand tokens at :root)
  js/main.js             — nav, scroll reveal, contact form, lightbox
  assets/                — brand board, cursor art
  robots.txt · sitemap.xml
astro.config.mjs         — Astro + @sanity/astro integration (projectId, dataset)
vercel.json              — security headers, caching, redirects
docs/                    — architecture, design system, page specs, content guide, task board
```

## Run locally
```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output to dist/
npm run preview   # preview the production build
```

## Sanity / CMS details
- **Project ID:** `ixmyxkfg` · **Dataset:** `production` (public read)
- Config lives in `astro.config.mjs`. The dataset is public, so the build reads content with **no secret token** — nothing sensitive is committed.

## Deploy
Connect this repo to **Vercel** — it auto-detects Astro (build `astro build`, output `dist/`). `vercel.json` adds security headers, asset caching, and the `/home → /` redirect.

## Status
Design build complete. **Testimonials** are seeded (placeholders — replace with real, consented quotes). **Weddings** are seeded as drafts with couple/venue pre-filled, awaiting real photos before they go live. Remaining launch items (real copy, pricing, photography, Formspree form ID, domain) are in [`docs/TASKS.md`](docs/TASKS.md).
