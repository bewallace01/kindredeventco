# Nezzie Events — Design System

The visual foundation for the website, derived directly from the brand board (`assets/brand/brand-board.jpeg`). Every value below is already wired into `css/styles.css` as a CSS custom property, so changing a token in one place updates the whole site.

---

## 1. Brand Story in Design Terms

The brand board's hero image is a soft, impressionist mountain sunset in lavender, heather, and peach. That mood — **dawn light, painterly softness, quiet luxury** — drives the whole aesthetic: generous whitespace, airy editorial layouts, serif elegance, and color used as a gentle wash rather than a loud statement.

Positioning: **boutique, high-touch, timeless.** Not trendy, not flashy. The design should feel like a beautifully printed wedding invitation suite.

---

## 2. Color Palette

> Note: the swatch labels on the original brand board were shuffled. The hex values below are matched to the actual swatch colors.

| Token | Hex | Role |
|---|---|---|
| `--lavender` | `#B7A9C9` | Soft lilac — gradients, accents, hover washes |
| `--heather` | `#8B7DA3` | **Primary brand color** — buttons, links, eyebrows, deep sections |
| `--slate` | `#727D91` | Dusk blue-grey — gradient depth, secondary accents |
| `--stone` | `#DCD9D4` | Warm neutral grey — placeholder washes, dividers |
| `--butter` | `#F9E1A2` | Soft gold — stars, small highlights (use sparingly) |
| `--peach` | `#F7D1B5` | Warm blush — script accents on dark, CTA hover |

**Supporting neutrals** (for editorial contrast and readability):

| Token | Hex | Role |
|---|---|---|
| `--ink` | `#2C2A33` | Primary text, footer background |
| `--charcoal` | `#4A4753` | Secondary text |
| `--mist` | `#F6F4F1` | Off-white alternate section background |
| `--cream` | `#FBFAF8` | Default page background / light text on dark |
| `--white` | `#FFFFFF` | Cards, form fields |
| `--line` | `#E7E3DE` | Hairline borders |

### Usage rules
- **Heather is the workhorse.** Lavender, slate, and peach are accents.
- **Butter is a seasoning** — stars and tiny highlights only. Never large fills.
- Body text is always `--ink` / `--charcoal` on light, `--cream` on dark — never colored text for paragraphs (contrast + elegance).
- Color appears mostly as **soft gradients** in heroes, CTA bands, and image placeholders.

### Contrast (WCAG)
- `--ink` on `--cream`: ~13:1 (AAA)
- `--heather` on `--cream`: ~4.7:1 (AA for normal text, AAA for large)
- `--cream` on `--heather`: ~4.7:1 (AA) — used for buttons/deep sections
- Avoid heather text smaller than 16px on light backgrounds; use ink instead.

---

## 3. Typography

Four families, mapped from the brand board:

| Brand board font | Site implementation | Used for |
|---|---|---|
| Playfair Display | **Playfair Display** (Google Fonts) | All headings, pull-quotes |
| Lora | **Lora** (Google Fonts) | Body copy |
| Amoresa Aged / New Icon Script | **Pinyon Script** (stand-in) | Script flourishes (`.script`) |
| — (UI need) | **Jost** | Eyebrows, labels, buttons, nav |

> **Action before launch:** Amoresa Aged and New Icon Script are licensed display fonts not on Google Fonts. To match the brand board exactly, purchase/license them and self-host via `@font-face`, then point `--font-script` at them. Pinyon Script is a close, free elegant stand-in until then.

### Type scale (fluid, `clamp()`-based)
`--step--1` … `--step-5`. Headings scale smoothly from mobile to desktop with no breakpoints needed. h1 ranges ~3.2rem → 6rem; body ~1rem → 1.13rem.

### Hierarchy principles
- One `<h1>` per page (the page hero).
- Eyebrow (`.eyebrow`, Jost, uppercase, letter-spaced) labels each section above its `<h2>`.
- `.script` adds a single calligraphic grace note per section — never stacked, never in body.
- Line length capped at ~68ch for readability; lead paragraphs ~58–60ch centered.

---

## 4. Spacing & Layout

- **Spacing scale:** `--space-2xs` (0.5rem) → `--space-2xl` (8rem). Sections use `--space-2xl` vertical rhythm for that luxury whitespace.
- **Container:** max 1200px; narrow variant 760px for text-heavy and form pages.
- **Gutter:** fluid `clamp(1.25rem, 5vw, 4rem)`.
- **Grid helpers:** `.grid--2/3/4`, `.split` (editorial two-column with `--reverse`).

---

## 5. Components (all in `styles.css`)

| Component | Class | Notes |
|---|---|---|
| Buttons | `.btn` + `--primary` / `--ghost` / `--light` | Uppercase Jost, subtle lift on hover |
| Animated link | `.link-underline` | Underline wipes in on hover |
| Header / nav | `.site-header`, `.nav` | Fixed, turns frosted on scroll; full-screen mobile menu |
| Hero | `.hero` | Full-viewport, gradient placeholder media + scrim |
| Page hero | `.page-hero` | 48–60vh inner-page banner |
| Image placeholder | `.ph` + ratio/gradient modifiers | **Swap for `<img>` when photos arrive** |
| Cards | `.card` | Service/value cards, hover lift |
| Service rows | `.service` | Editorial price list |
| Process steps | `.step` | Script numerals |
| Gallery | `.gallery`, `.tile` | Masonry-feel grid, caption reveal on hover |
| Testimonials | `.quote`, `.testimonial-card` | Feature quote + grid |
| Stats | `.stats` | Trust bar |
| CTA band | `.cta-band` | Gradient closing call-to-action |
| Forms | `.form`, `.field` | Accessible labels, focus rings |
| Footer | `.site-footer` | Ink background, 3-column |

---

## 6. Motion

- **Scroll reveal:** `.reveal` (+ `.reveal-delay-1/2/3`) fades/slides content in via IntersectionObserver.
- **Hover:** 2px button lift, gallery image zoom, underline wipes — all subtle.
- **Respects `prefers-reduced-motion`:** all animation is disabled and content shown immediately for users who opt out.
- Durations ~0.6–0.9s on a gentle `cubic-bezier(0.22,1,0.36,1)` ease.

---

## 7. Imagery Direction

Photography is the emotional core. Until real photos are added, every image is a labeled gradient placeholder (`.ph`).

**Art direction for real photos:**
- Light, airy, true-to-life color grading — soft and warm, never heavily saturated or moody-dark.
- Lots of negative space in the frame so text overlays breathe.
- Mix of: wide venue/landscape shots, intimate couple portraits, and detail shots (florals, tablescapes, stationery).
- Favor candid, editorial moments over stiff posed shots.
- Arch-cropped portraits (`.ph--arch`) echo the brand board's swatch shapes — use for the founder portrait and feature images.

**Recommended export sizes:** heroes 2400px wide, gallery tiles 1200px, portraits 1000px. Serve `.webp` with `.jpg` fallback; always set `width`/`height` and `loading="lazy"` (except the hero, which should be eager/`fetchpriority="high"`).
