# Nezzie Events — Site Architecture

## 1. Stack Decision

**Plain, hand-authored HTML + CSS + vanilla JS. No build step, no framework.**

Why this is the right choice for a boutique marketing site:

- **Speed & SEO.** Static HTML is the fastest thing a browser can render and the easiest thing a crawler can index. No hydration cost, no JS-dependent content. This directly serves the "fast loading and SEO-friendly" requirement.
- **Hosting freedom.** Drops onto Netlify, Vercel, Cloudflare Pages, GitHub Pages, or any shared host for free or near-free. No Node server required.
- **Longevity & handoff.** A non-developer (or any future developer) can open an `.html` file and edit copy without learning a framework or running a toolchain.
- **Right-sized.** This is a ~6-page brochure site with no app logic, accounts, or dynamic data. React/Next would add complexity and a build pipeline with no payoff here.

When to revisit: if the site grows a blog with dozens of posts, a real CMS, or gated content, migrate to **Astro** (keeps the static output and SEO, adds components and content collections) or **Eleventy**. The current HTML maps cleanly onto either.

---

## 2. Page Map

```
/
├── index.html          Home
├── about.html          About / the planner & brand story
├── services.html       Services & investment
├── portfolio.html      Weddings / portfolio gallery
├── testimonials.html   Love Notes / testimonials
├── contact.html        Inquire / contact form
│
├── css/
│   └── styles.css      Entire design system (single stylesheet)
├── js/
│   └── main.js         Nav, scroll reveal, smooth scroll, form
├── assets/
│   └── brand/
│       └── brand-board.jpeg
└── docs/               Planning & reference (not shipped to prod)
    ├── SITE-ARCHITECTURE.md
    ├── DESIGN-SYSTEM.md
    ├── PAGE-SPECS.md
    ├── CONTENT-GUIDE.md
    ├── TASKS.md
    └── README.md
```

### Navigation labels (boutique voice)
Home · About · Services · **Weddings** (portfolio) · **Love Notes** (testimonials) · **Inquire** (contact, styled as the primary button)

The primary nav CTA ("Inquire") is always a filled button — it's the one action every page funnels toward.

---

## 3. Information Architecture & Conversion Flow

The whole site is a funnel toward a single conversion: **the inquiry form.**

```
Discover (Home hero / portfolio)
   → Trust (About, testimonials, stats, press)
      → Understand (Services & process)
         → Convert (Inquire)
```

Every page ends with a CTA band pointing to `contact.html`, so a visitor can convert from wherever they are. Internal links cross-connect: Home → all sections; About → Services; Services → Contact; Portfolio → Contact; Testimonials → Contact.

---

## 4. Global Components

- **Header** — fixed, frosted-on-scroll, identical across pages. Mobile collapses to a full-screen overlay menu.
- **Footer** — three columns (brand blurb / explore nav / connect), ink background, auto-updating year.
- **CTA band** — recurring gradient closer.
- **Skip link** — first focusable element on every page for keyboard/screen-reader users.

These are duplicated inline in each HTML file (no server includes in a static setup). If editing nav/footer, update all 6 files — or adopt Astro/Eleventy later to share a single layout. See `TASKS.md`.

---

## 5. SEO Architecture

- Unique `<title>` and `<meta name="description">` per page, all locally optimized ("Charlotte", "Carolinas").
- Canonical URLs on every page.
- Open Graph tags for social sharing.
- `WeddingPlanner` JSON-LD structured data on the home page (LocalBusiness schema) for rich local results.
- Semantic landmarks: one `<header>`, `<main>`, `<footer>`; sections labeled via `aria-labelledby`.
- Single `<h1>` per page; logical heading order.
- Pre-launch: add `sitemap.xml`, `robots.txt`, and replace placeholder domain/phone/email. See `TASKS.md`.

---

## 6. Performance Architecture

- One CSS file, one small JS file (deferred). No frameworks, no render-blocking scripts.
- Fonts loaded with `preconnect` + `display=swap`.
- Images (once added) lazy-loaded with explicit dimensions to prevent layout shift; hero image eager + `fetchpriority="high"`.
- All animation is CSS/IntersectionObserver — cheap and GPU-friendly.
- Target: Lighthouse 95+ across Performance, Accessibility, Best Practices, SEO once real (optimized) images are in.
