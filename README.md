# Nezzie Events — Wedding Planning Website

A boutique luxury wedding-planning website for a Charlotte, North Carolina studio. Static **HTML / CSS / vanilla JS** — no build step, no dependencies.

> Built on the studio's brand board: lavender–heather–peach palette, Playfair Display + Lora typography, with a script accent.

## Pages
Home · About · Services · Portfolio (Weddings) · Testimonials (Love Notes) · Contact (Inquire)

## Project structure
```
index.html · about.html · services.html · portfolio.html · testimonials.html · contact.html
css/styles.css   — full design system (brand tokens at :root)
js/main.js       — nav, scroll reveal, smooth scroll, form
assets/brand/    — brand board
docs/            — architecture, design system, page specs, content guide, task board
```

## Run locally
```bash
python3 -m http.server 8000   # then open http://localhost:8000
```
Or just open `index.html` in a browser.

## Documentation
See [`docs/`](docs/) — start with [`docs/README.md`](docs/README.md). The launch checklist lives in [`docs/TASKS.md`](docs/TASKS.md).

## Status
Complete design build with **placeholder content and gradient image placeholders.** See `docs/CONTENT-GUIDE.md` and `docs/TASKS.md` for what to swap in before launch (real name, copy, pricing, photography, form backend, domain).

## Deploy
Static site — connect this repo to **Vercel** (no build command needed). Settings live in `vercel.json`. Also works on Cloudflare Pages, GitHub Pages, or any static host.
