# Nezzie Events — Website

Boutique luxury wedding-planning website for a Charlotte, NC studio. Static HTML/CSS/JS, no build step.

## Quick start
Open `index.html` in a browser, or run a local server for clean paths:

```bash
# from the project root
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Structure
```
index.html · about.html · services.html · portfolio.html · testimonials.html · contact.html
css/styles.css   — full design system (edit tokens at the top)
js/main.js       — nav, scroll reveal, smooth scroll, form
assets/brand/    — brand board
docs/            — planning & reference (this folder)
```

## Documentation
| File | What's inside |
|---|---|
| `SITE-ARCHITECTURE.md` | Stack decision, page map, IA, SEO & performance architecture |
| `DESIGN-SYSTEM.md` | Colors, typography, components, motion, imagery direction |
| `PAGE-SPECS.md` | Per-page section structure, layout, hierarchy, UX rationale, CTA strategy |
| `CONTENT-GUIDE.md` | Brand voice, messaging pillars, placeholder→real checklist, SEO keywords |
| `TASKS.md` | Full launch roadmap (phased task board) |

## Editing copy
All text lives directly in the `.html` files. Colors and fonts are controlled by CSS variables at the top of `css/styles.css` (`:root`).

## Before launch
This is a complete design build with **placeholder content and gradient image placeholders.** See `CONTENT-GUIDE.md` and `TASKS.md` for everything to swap in (real name, copy, pricing, photos, form backend, domain).

## Deploy
Drag the folder into **Netlify**, or connect a repo to **Vercel** / **Cloudflare Pages**. No build command needed — it's a static site.
