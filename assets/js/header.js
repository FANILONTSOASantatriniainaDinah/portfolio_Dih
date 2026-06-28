/* ============================================================
   header.js : menu mobile (hamburger -> panneau déroulant).
   Chargé sur toutes les pages utilisant le header standard
   (index.html, projet.html, formation.html).
   ============================================================ */
(function () {
  "use strict";

  function init() {
    const toggle = document.getElementById("navToggle");
    const nav = document.getElementById("siteNav");
    if (!toggle || !nav) return;

    function close() {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    }
    function open() {
      toggle.setAttribute("aria-expanded", "true");
      nav.classList.add("is-open");
    }

    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      if (isOpen) close(); else open();
    });

    // Referme le panneau dès qu'un lien est choisi (navigation ou
    // ancre vers une section de la page).
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", close));

    // Referme au clic en dehors du header.
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".site-header")) close();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
