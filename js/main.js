/* =====================================================================
   NEZZIE EVENTS — Interactions
   Vanilla JS, no dependencies. Progressive enhancement only:
   the site is fully usable with JS disabled.
   ===================================================================== */
(function () {
  "use strict";

  /* ---- 1. Sticky header state on scroll ------------------------------ */
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- 2. Mobile nav toggle ----------------------------------------- */
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav__toggle");
  if (nav && toggle) {
    const setOpen = (open) => {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    };
    toggle.addEventListener("click", () => setOpen(!nav.classList.contains("is-open")));
    // Close when a link is tapped
    nav.querySelectorAll(".nav__link").forEach((link) =>
      link.addEventListener("click", () => setOpen(false))
    );
    // Close on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("is-open")) setOpen(false);
    });
  }

  /* ---- 3. Scroll-reveal via IntersectionObserver -------------------- */
  const reveals = document.querySelectorAll(".reveal");
  if (reveals.length) {
    if (!("IntersectionObserver" in window) ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      reveals.forEach((el) => el.classList.add("is-visible"));
    } else {
      const io = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      reveals.forEach((el) => io.observe(el));
    }
  }

  /* ---- 4. Smooth-scroll for in-page anchors ------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const id = anchor.getAttribute("href");
      if (id.length <= 1) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  /* ---- 5. Contact form (front-end demo handler) --------------------- */
  const form = document.querySelector("[data-contact-form]");
  if (form) {
    const success = document.querySelector("[data-form-success]");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      // NOTE: wire this to a real backend / form service (Formspree,
      // Netlify Forms, etc.) before launch. See docs/TASKS.md.
      form.reset();
      if (success) {
        success.classList.add("is-visible");
        success.setAttribute("tabindex", "-1");
        success.focus();
        success.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  }

  /* ---- 6. Footer year ------------------------------------------------ */
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- 7. Custom cursor follower (enhancement) ---------------------- */
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (finePointer && !prefersReduced) {
    // The pretty icon cursors are pure CSS. This adds a sparkle trail:
    // small peach sparkles drift behind the cursor and fade out.
    let lastX = null, lastY = null;
    const minGap = 38; // px of travel between sparkles — sparser = classier

    const spawn = (x, y) => {
      const s = document.createElement("span");
      s.className = "sparkle-trail";
      const size = 6 + Math.random() * 6;          // 6–12px, daintier
      s.style.left = x + (Math.random() * 10 - 5) + "px";
      s.style.top  = y + (Math.random() * 10 - 5) + "px";
      s.style.width = s.style.height = size + "px";
      s.style.marginLeft = s.style.marginTop = -size / 2 + "px";
      document.body.appendChild(s);
      s.addEventListener("animationend", () => s.remove());
    };

    window.addEventListener("mousemove", (e) => {
      if (lastX === null) { lastX = e.clientX; lastY = e.clientY; }
      const dx = e.clientX - lastX, dy = e.clientY - lastY;
      if (Math.hypot(dx, dy) >= minGap) {
        spawn(e.clientX, e.clientY);
        lastX = e.clientX;
        lastY = e.clientY;
      }
    }, { passive: true });
  }
})();
