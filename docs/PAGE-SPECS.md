# Kindred Event Collective — Page Specifications

For each page: section structure, layout, content hierarchy, UX rationale, imagery style, and CTA placement. These specs match what's built in the HTML and serve as the editing/handoff reference.

---

## 1. Home (`index.html`)

**Goal:** Make an emotional first impression, establish trust and positioning fast, and route visitors to inquire.

### Section structure
1. **Hero** — full-viewport, script kicker → headline → subhead → dual CTA ("Begin Your Story" / "View Our Weddings"). Scroll hint.
2. **Intro / brand story** — editorial split: copy + arch portrait. Soft handoff to About.
3. **Featured services** — 3-card overview (Full / Partial / Management).
4. **Portfolio highlights** — 4-tile gallery with a feature tile → link to full portfolio.
5. **Trust / stats bar** — 150+ weddings · 10 yrs · 5.0★.
6. **Testimonial feature** — single large pull-quote.
7. **Process** — 4 steps (Discover · Design · Coordinate · Celebrate).
8. **Final CTA band** — "Let's create something unforgettable."
9. **Footer.**

### Layout
Alternating backgrounds (`--cream` / `--mist`) create rhythm. Full-bleed hero and CTA band bracket the page; content sits in the 1200px container.

### Content hierarchy
Hero h1 is the largest type on the site. Each section: eyebrow → h2 → lead → content. Emotional copy first, logistics second.

### UX rationale
Above the fold answers "who, what, where" in one glance. The page mirrors the buyer's journey (desire → trust → understanding → action) so a visitor can convert at any scroll depth — every major section is followed within one or two scrolls by a path to inquire.

### Imagery
Hero: a wide, light-filled celebration moment with negative space top-left for the headline. Intro: arch-cropped founder portrait. Portfolio: one wide feature + three tall portraits, varied venues.

### CTA placement
Dual CTA in hero (primary + secondary), inline "Explore" links on each service card, "View Full Portfolio" after the gallery, "Read More Love Notes" after the quote, and the final CTA band. Nav "Inquire" button persistent.

---

## 2. About (`about.html`)

**Goal:** Build personal trust in Nezzie and articulate the philosophy that justifies a premium price.

### Section structure
1. **Page hero** — "hello, I'm Nezzie" / "The calm behind the celebration."
2. **Story** — split: arch portrait + founder narrative (origin, 150+ weddings, boutique by design).
3. **Philosophy / values** — 3 cards (Stress-free · Personal · Detail).
4. **Local expertise** — reversed split: Charlotte/Carolinas rootedness + vendor relationships.
5. **CTA band** — "I'd love to hear your story."
6. **Footer.**

### Layout
Two editorial splits (one reversed) for visual variety; values as a centered 3-card grid on the `--mist` background.

### Content hierarchy
First-person voice throughout. Story → beliefs → local advantage → invitation. Bold lead sentences carry the scannable message.

### UX rationale
People hire a person, not a logo. A warm portrait + first-person story converts browsers into believers. Values pre-empt the "why so expensive?" question by reframing around stress-relief and personalization. Local expertise is a concrete differentiator for the Carolinas market.

### Imagery
A genuine, warm founder portrait (arch crop) is the most important photo on the whole site. Plus a Charlotte/Carolinas venue or on-the-job candid for the local section.

### CTA placement
Inline "See How We Work" link into Services; closing CTA band to Contact.

---

## 3. Services (`services.html`)

**Goal:** Explain the three engagement levels, set value expectations, and drive proposal requests.

### Section structure
1. **Page hero** — "how we help" / "Services & investment."
2. **Packages** — three editorial `.service` rows (name · description · "From $" price) in the narrow container.
3. **What's included** — 6-card grid (the always-included standard).
4. **Process** — 4 steps.
5. **CTA band** — "Ready to begin? Request a Proposal."
6. **Footer.**

### Layout
Narrow container for the price list keeps it scannable and editorial (like a menu). Included-benefits grid widens to full container on `--mist`.

### Content hierarchy
Most-comprehensive package listed first (anchoring). Prices shown as "From $X" to qualify leads without locking exact numbers. Note clarifies pricing is tailored.

### UX rationale
Transparency about packages and starting prices filters for fit and builds trust (the inspiration sites either show or thoughtfully gate this). "Always included" reassures lower-tier buyers they're still fully cared for. Listing the process here reinforces competence.

### Imagery
Optional: a single elegant detail shot in the hero. Keep this page text-forward and clean — whitespace signals confidence.

### CTA placement
"Request a Proposal" in the closing band; nav Inquire button. Each package could later deep-link to a tailored inquiry.

---

## 4. Portfolio / Weddings (`portfolio.html`)

**Goal:** Prove quality and range through imagery; let the work do the selling.

### Section structure
1. **Page hero** — "real celebrations" / "Our weddings."
2. **Gallery** — responsive grid of 9 tiles (mix of wide features + tall portraits), each with couple name + venue caption revealed on hover/focus.
3. **Press strip** — "As Featured In."
4. **CTA band** — "Picture your day here."
5. **Footer.**

### Layout
Masonry-feel CSS grid: feature tiles span two columns on desktop, portraits one. Generous gaps. Captions overlay on hover and on keyboard focus (accessible).

### Content hierarchy
Image-first — minimal text. Captions provide just enough context (who, where) to make each wedding feel real and local.

### UX rationale
For luxury wedding planning, the portfolio is the single most persuasive page. Big, beautiful, fast-loading imagery with restrained captions mirrors the editorial feel of the reference sites. Variety of venues communicates range across the Carolinas.

### Imagery
The whole page is photography. Each tile should be a genuinely strong, light-and-airy image. Eventually link tiles to individual wedding stories/galleries (phase 2).

### CTA placement
Closing band only — let the gallery breathe, then invite. Tiles currently link to Contact; later they'll open wedding detail pages.

---

## 5. Testimonials / Love Notes (`testimonials.html`)

**Goal:** Convert trust into confidence with social proof.

### Section structure
1. **Page hero** — "kind words" / "Love notes."
2. **Feature quote** — one large centered testimonial.
3. **Testimonial grid** — 6 cards with 5-star ratings + attribution.
4. **CTA band** — "Your love note starts here."
5. **Footer.**

### Layout
Feature quote centered on `--cream`; grid of cards on `--mist`. Cards use flexbox so attribution pins to the bottom regardless of quote length.

### Content hierarchy
Strongest, most emotional quote featured first and largest. Remaining quotes scannable, each ending in a name. Stars give instant 5.0 signal.

### UX rationale
Social proof reduces the perceived risk of a high-ticket purchase. Naming couples (and ideally adding their photo/venue later) makes praise credible. A dedicated page also ranks for "[planner] reviews" searches.

### Imagery
Optional small couple thumbnails per card in phase 2. For now, type-driven and clean.

### CTA placement
Closing band. Could add inline "See their wedding →" links connecting to portfolio entries later.

---

## 6. Contact / Inquire (`contact.html`)

**Goal:** Make inquiring easy and warm; capture qualifying details.

### Section structure
1. **Page hero (short)** — "let's begin" / "Inquire" + response-time promise.
2. **Form + details split** — accessible inquiry form (names, email, phone, date/season, service interest, venue, message) beside a contact sidebar (email, phone, location, service area, hours, social).
3. **Footer.**

### Layout
Two-column split, form left / details right, collapsing to single column on mobile. Inline success message appears on submit and receives focus.

### Content hierarchy
Friendly intro + response promise reduce friction first. Required fields minimal (name, email, message); everything else optional but useful for qualifying.

### UX rationale
Setting a "within two business days" expectation increases completion. Asking for date/season, service, and venue pre-qualifies leads and lets Nezzie prepare. The sidebar offers alternative contact methods for those not ready to fill a form. Native HTML validation + accessible labels and focus management keep it usable for everyone.

### Imagery
One soft detail/studio image in the sidebar for warmth — optional.

### CTA placement
The form *is* the CTA. The nav "Inquire" button is marked current here.

> **Pre-launch:** the form currently runs a front-end demo handler. Connect it to a real service (Formspree, Netlify Forms, or an email endpoint) before going live — see `TASKS.md`.
