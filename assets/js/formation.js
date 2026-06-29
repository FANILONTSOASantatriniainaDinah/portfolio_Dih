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

  /**
   * Nuage de mots "Notions & compétences acquises" : au clic sur un
   * mot, ouvre une fenêtre affichant la phrase exacte du CV
   * correspondante (data-cv en français, data-cv-en en anglais).
   */
  function initWordCloud() {
    const cloud = document.getElementById("wordCloud");
    const dialog = document.getElementById("cvQuoteDialog");
    const closeBtn = document.getElementById("cvQuoteDialogClose");
    const text = document.getElementById("cvQuoteDialogText");
    if (!cloud || !dialog || !closeBtn || !text) return;

    cloud.querySelectorAll(".word-cloud__word").forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = document.documentElement.getAttribute("lang") || "fr";
        const quote = lang === "en" ? (btn.dataset.cvEn || btn.dataset.cv) : btn.dataset.cv;
        text.textContent = quote || "";
        dialog.showModal();
      });
    });

    closeBtn.addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (e) => {
      if (e.target === dialog) dialog.close();
    });
  }

  function init() {
    revealOnScroll(".formation-item", 0.15);
    revealOnScroll(".hobby-card", 0.2);
    revealOnScroll(".engagement-card", 0.2);
    initProgressLine();
    initWordCloud();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
