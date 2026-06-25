/* ============================================================
   landing.js — parallax billes (scroll + souris) sur le wrapper
   .hero__orb ; l'animation de flottement vit sur .hero__orb__inner,
   donc aucun conflit de transform. Plus : reveal au scroll, scroll cue.
   ============================================================ */
(function () {
  "use strict";

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const orbs = document.querySelectorAll(".hero__orb");

  let scrollY = 0;
  let mouse = { x: 0, y: 0 };

  function applyParallax() {
    orbs.forEach((orb, i) => {
      const depth = (i + 1) * 0.7;
      const x = mouse.x * depth * 7;
      const y = mouse.y * depth * 7 + scrollY * depth * 0.06;
      orb.style.transform = `translate(${x}px, ${y}px)`;
    });
  }

  if (!reduced) {
    if (window.matchMedia("(pointer: fine)").matches) {
      const hero = document.querySelector(".hero");
      if (hero) {
        hero.addEventListener("mousemove", (e) => {
          const { innerWidth: w, innerHeight: h } = window;
          mouse.x = (e.clientX / w - 0.5) * 2;
          mouse.y = (e.clientY / h - 0.5) * 2;
          applyParallax();
        });
      }
    }

    window.addEventListener("scroll", () => {
      scrollY = window.scrollY;
      applyParallax();
    }, { passive: true });
  }

  const scrollCue = document.getElementById("scrollCue");
  if (scrollCue) {
    scrollCue.addEventListener("click", () => {
      window.scrollTo({ top: window.innerHeight * 0.92, behavior: "smooth" });
    });
  }

  const revealTargets = document.querySelectorAll(".reveal-on-scroll");
  if (revealTargets.length) {
    if (reduced) {
      revealTargets.forEach((el) => el.classList.add("is-visible"));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
      );
      revealTargets.forEach((el) => observer.observe(el));
    }
  }
})();
