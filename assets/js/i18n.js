/* ============================================================
   i18n.js — Moteur de traduction
   Charge le dictionnaire (i18n-dict.js, chargé avant ce fichier),
   applique les clés data-i18n, gère le bouton de bascule FR/EN
   et mémorise le choix de langue de la personne.
   ============================================================ */

(function () {
  "use strict";

  const STORAGE_KEY = "portfolio-lang";
  const DEFAULT_LANG = "fr";

  function getDict() {
    return typeof PORTFOLIO_I18N_DICT !== "undefined" ? PORTFOLIO_I18N_DICT : null;
  }

  function getStoredLang() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function storeLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* stockage indisponible : on continue sans persister */
    }
  }

  function applyLang(lang) {
    const dict = getDict();
    if (!dict || !dict[lang]) return;

    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = dict[lang][key];
      if (value !== undefined) {
        el.innerHTML = value;
      }
    });

    const toggle = document.getElementById("langToggle");
    if (toggle) {
      toggle.textContent = lang === "fr" ? "FR / EN" : "EN / FR";
      toggle.setAttribute(
        "aria-label",
        lang === "fr" ? "Switch to English" : "Passer en français"
      );
    }

    storeLang(lang);

    // Permet à d'autres scripts (ex: project.js, pour la grille "Tous
    // les projets" générée dynamiquement) de réagir au changement de
    // langue sans que i18n.js ait besoin de connaître leur existence.
    document.dispatchEvent(new CustomEvent("portfolio:langchange", { detail: { lang } }));
  }

  function initLang() {
    const stored = getStoredLang();
    const browserLang = (navigator.language || "fr").slice(0, 2);
    const initial = stored || (browserLang === "en" ? "en" : DEFAULT_LANG);
    applyLang(initial);
  }

  document.addEventListener("DOMContentLoaded", () => {
    initLang();

    const toggle = document.getElementById("langToggle");
    if (toggle) {
      toggle.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("lang") || DEFAULT_LANG;
        applyLang(current === "fr" ? "en" : "fr");
      });
    }
  });
})();
