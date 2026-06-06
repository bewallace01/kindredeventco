# Kindred Event Collective Website — Task Board

Status legend: `[ ]` to-do · `[~]` in progress · `[x]` done

---

## ✅ Phase 0 — Foundation (DONE)
- [x] Analyze brand board (colors, type) and reference sites
- [x] Choose stack: static HTML/CSS/JS (see SITE-ARCHITECTURE.md)
- [x] Build design system (`css/styles.css`) with brand tokens
- [x] Build JS interactions (`js/main.js`)
- [x] Build all 6 pages (Home, About, Services, Portfolio, Testimonials, Contact)
- [x] Write planning docs (architecture, design system, page specs, content guide)

---

## Phase 1 — Real Content (blocks launch)
Owner: Nezzie / Bailey
- [x] Business name finalized: Kindred Event Collective · founder: Nezzie
- [ ] Replace contact details: email, phone, domain, social URLs
- [ ] Write/approve final About story
- [ ] Confirm real stats (weddings count, years, rating)
- [ ] Finalize service tiers + **real pricing**
- [ ] Collect real testimonials **with consent** + attribution
- [ ] Confirm real portfolio weddings (names, venues)
- [ ] Decide on / verify "As Featured In" press

## Phase 2 — Photography (blocks launch)
- [ ] Source/select hero image per page (light, airy, negative space)
- [ ] Founder portrait (arch-crop friendly)
- [ ] 9+ portfolio images across varied venues
- [ ] Optimize: export `.webp` + `.jpg` fallback, correct dimensions
- [ ] Replace every `.ph` placeholder div with `<picture>`/`<img>` (lazy-load, alt text, width/height)
- [ ] Hero image: `loading="eager"` + `fetchpriority="high"`

## Phase 3 — Functionality
- [x] Connect contact form to **Formspree** (AJAX submit in `js/main.js`) — paste real form ID into the `action` in `contact.html` (currently `YOUR_FORM_ID`)
- [x] Add spam protection (`_gotcha` honeypot field) — enable reCAPTCHA in Formspree dashboard for extra coverage if desired
- [ ] Test form submission end-to-end + confirmation email (after pasting the real form ID)
- [ ] Add favicon, apple-touch-icon, web manifest

## Phase 4 — SEO & Analytics
- [ ] Replace placeholder domain in canonical + OG tags
- [ ] Create `sitemap.xml` and `robots.txt`
- [ ] Verify unique title/description per page
- [ ] Add real OG share image (1200×630)
- [ ] Set up privacy-friendly analytics (Plausible / Fathom)
- [ ] Submit to Google Search Console
- [ ] Create / claim Google Business Profile (local SEO)

## Phase 5 — QA & Accessibility
- [ ] Cross-browser test (Chrome, Safari, Firefox, mobile Safari)
- [ ] Responsive test (360px → 1440px+)
- [ ] Keyboard-only navigation pass (focus order, menu, form)
- [ ] Screen-reader spot check (VoiceOver/NVDA)
- [ ] Color-contrast verification on any new color usage
- [ ] Lighthouse: aim 95+ in all four categories
- [ ] Validate HTML (validator.w3.org) once content is final
- [ ] Confirm `prefers-reduced-motion` behavior

## Phase 6 — Launch
- [x] Choose host — **Vercel** (connected via GitHub repo `kindredeventco`)
- [ ] Connect custom domain + SSL
- [ ] Final link check (no `#` placeholder links remaining)
- [ ] Confirm font licensing (or keep Pinyon Script stand-in)
- [ ] Go live 🎉
- [ ] Post-launch: monitor form submissions + analytics

---

## Phase 7 — Nice-to-have / Future
- [ ] Individual wedding story pages (link from portfolio tiles)
- [ ] Blog / journal for SEO (consider migrating to Astro or Eleventy for templating — see SITE-ARCHITECTURE §1)
- [ ] Newsletter signup
- [ ] Couple resources / FAQ page
- [ ] Self-host brand script fonts (Amoresa Aged / New Icon Script) via `@font-face`
- [ ] Shared header/footer partials (only needed if maintaining nav across files gets tedious)

---

### Maintenance note
The header and footer are duplicated in all 6 HTML files (static site, no includes). **When editing nav or footer, update all six pages.** If this becomes painful, migrating to Astro/Eleventy lets you keep one shared layout while preserving the static output and SEO.
