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

  /* ---- 5. Contact form (Formspree AJAX submission) ----------------- */
  const form = document.querySelector("[data-contact-form]");
  if (form) {
    const success = document.querySelector("[data-form-success]");
    const errorBox = document.querySelector("[data-form-error]");
    const submitBtn = form.querySelector('[type="submit"]');
    const submitLabel = submitBtn ? submitBtn.textContent : "";

    const reveal = (el) => {
      if (!el) return;
      el.classList.add("is-visible");
      el.setAttribute("tabindex", "-1");
      el.focus();
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    };

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const endpoint = form.getAttribute("action");
      // Guard: don't attempt a submit while the placeholder endpoint is still in place.
      if (!endpoint || endpoint.indexOf("YOUR_FORM_ID") !== -1) {
        console.warn("Contact form: set the Formspree endpoint (action) in contact.html before going live.");
        reveal(errorBox);
        return;
      }

      if (errorBox) errorBox.classList.remove("is-visible");
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending…";
      }

      try {
        const res = await fetch(endpoint, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        });
        if (!res.ok) throw new Error("Form submission failed: " + res.status);
        form.reset();
        reveal(success);
      } catch (err) {
        reveal(errorBox);
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = submitLabel;
        }
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

  /* ---- 8. Portfolio lightbox (per-wedding gallery) ------------------ */
  const lightbox = document.querySelector("[data-lightbox]");
  const openers = document.querySelectorAll("[data-lightbox-open]");
  if (lightbox && openers.length) {
    const imgEl = lightbox.querySelector("[data-lightbox-img]");
    const countEl = lightbox.querySelector("[data-lightbox-count]");
    const btnPrev = lightbox.querySelector("[data-lightbox-prev]");
    const btnNext = lightbox.querySelector("[data-lightbox-next]");
    const btnClose = lightbox.querySelector("[data-lightbox-close]");
    let images = [];
    let index = 0;
    let lastFocused = null;

    const render = () => {
      const img = images[index];
      if (!img) return;
      imgEl.src = img.src;
      imgEl.alt = img.alt || "";
      const multiple = images.length > 1;
      countEl.textContent = multiple ? index + 1 + " / " + images.length : "";
      btnPrev.hidden = !multiple;
      btnNext.hidden = !multiple;
    };

    const open = (opener) => {
      try {
        images = JSON.parse(opener.getAttribute("data-images") || "[]");
      } catch (_) {
        images = [];
      }
      if (!images.length) return;
      index = 0;
      lastFocused = opener;
      render();
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
      btnClose.focus();
    };

    const close = () => {
      lightbox.hidden = true;
      document.body.style.overflow = "";
      imgEl.src = "";
      if (lastFocused) lastFocused.focus();
    };

    const step = (dir) => {
      if (!images.length) return;
      index = (index + dir + images.length) % images.length;
      render();
    };

    openers.forEach((o) => o.addEventListener("click", () => open(o)));
    btnClose.addEventListener("click", close);
    btnPrev.addEventListener("click", () => step(-1));
    btnNext.addEventListener("click", () => step(1));
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) close();
    });
    document.addEventListener("keydown", (e) => {
      if (lightbox.hidden) return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "ArrowRight") step(1);
    });
  }
})();
