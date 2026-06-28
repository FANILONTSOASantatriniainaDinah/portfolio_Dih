/* ============================================================
   formation.js : révèle la frise et les cartes hobbies/engagement
   au scroll, et anime la ligne de progression de la frise.
   ============================================================ */
(function () {
  "use strict";

  function revealOnScroll(selector, threshold) {
    const items = document.querySelectorAll(selector);
    if (!items.length) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: threshold || 0.2, rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach((el) => observer.observe(el));
  }

  /**
   * Fait "grandir" la ligne de progression de la frise au fil du
   * scroll, comme un chemin qui se trace au fur et à mesure de la
   * lecture (du Master 2 en cours jusqu'au baccalauréat).
   */
  function initProgressLine() {
    const list = document.getElementById("formationList");
    const progress = document.getElementById("formationProgress");
    if (!list || !progress) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return; // pas d'animation : seule la ligne de fond statique reste visible
    }

    function update() {
      const rect = list.getBoundingClientRect();
      const traveled = window.innerHeight * 0.6 - rect.top;
      const pct = Math.max(0, Math.min(100, (traveled / rect.height) * 100));
      progress.style.height = pct + "%";
    }

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

  function init() {
    revealOnScroll(".formation-item", 0.15);
    revealOnScroll(".hobby-card", 0.2);
    revealOnScroll(".engagement-card", 0.2);
    initProgressLine();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
