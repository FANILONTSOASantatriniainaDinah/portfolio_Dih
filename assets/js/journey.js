/* ============================================================
   journey.js : révèle chaque territoire au scroll.
   ============================================================ */
(function () {
  "use strict";

  function init() {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const stops = document.querySelectorAll(".territory-stop");
    if (!stops.length) return;

    if (reduced) {
      stops.forEach((s) => s.classList.add("is-visible"));
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
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );
    stops.forEach((s) => observer.observe(s));

    initTrailArrow(reduced);
  }

  /**
   * Déplace la flèche le long du tracé SVG en fonction de la position
   * de scroll dans la section #parcours.
   */
  function initTrailArrow(reduced) {
    const map = document.querySelector(".journey__map");
    const path = document.getElementById("trailPath");
    const arrow = document.getElementById("trailArrow");
    if (!map || !path || !arrow) return;

    // Sur mobile le connecteur est masqué en CSS (display:none) : pas d'animation possible/utile.
    if (path.getClientRects().length === 0) return;

    const pathLength = path.getTotalLength();

    if (reduced) {
      const mid = path.getPointAtLength(pathLength * 0.5);
      arrow.setAttribute("transform", `translate(${mid.x},${mid.y})`);
      return;
    }

    function update() {
      const rect = map.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const total = rect.height + viewportH;
      const traveled = viewportH - rect.top;
      let progress = traveled / total;
      progress = Math.max(0.02, Math.min(0.98, progress));

      const point = path.getPointAtLength(pathLength * progress);
      const ahead = path.getPointAtLength(Math.min(pathLength, pathLength * progress + 1));
      const angle = Math.atan2(ahead.y - point.y, ahead.x - point.x) * (180 / Math.PI);

      arrow.setAttribute("transform", `translate(${point.x},${point.y}) rotate(${angle})`);
    }

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

/* ============================================================
   Satellites de projets : au clic sur un territoire, affiche
   des bulles de projets en éventail autour, + lien vers #experiences.
   ============================================================ */
(function () {
  "use strict";

  // Données issues du CV (sauf mention contraire). Chaque projet a un
  // "slug" utilisé pour construire le lien vers sa page de détail
  // (projet.html?slug=...).
  const PROJECTS = {
    madagascar: [
      { slug: "madatlas", title: "MADATLAS, pratiques genrées", category: "academique" },
      { slug: "ranosoa", title: "Projet RANOSOA (pompe solaire)", category: "professionnel" },
      { slug: "app-restaurants-parcs", title: "App restaurants &amp; parcs (React/OSM)", category: "academique" },
      { slug: "site-itdc-mada", title: "Site vitrine ITDC Mada", category: "professionnel" }
    ],
    reunion: [
      { slug: "openatlas", title: "OpenAtlas, interopérabilité OSM", category: "professionnel" }
    ],
    france: [
      { slug: "atopia", title: "Stage M2 ATOPIA, cartographie urbanisme", category: "professionnel" },
      { slug: "dora-atopia", title: "DORA, outil de cartographie interactive", category: "professionnel" },
      { slug: "pred-archeo", title: "Préd&rsquo;Archéo, prédiction archéologique", category: "academique" },
      { slug: "recul-trait-cote", title: "Bâtiments menacés par le recul du trait de côte", category: "academique" },
      { slug: "capa-taro-chim", title: "Capa, Taro &amp; Chim, les inédits de la guerre d&rsquo;Espagne", category: "academique" }
    ],
    coree: [
      { slug: "jeux-coreens", title: "Documentaire interactif sur les jeux coréens", category: "academique" }
    ]
  };

  // Positions des bulles-satellites selon le nombre de projets.
  // Demande spécifique : 2 satellites à gauche / 2 à droite quand il y
  // en a 4 (Madagascar), 3 à gauche / 2 à droite quand il y en a 5
  // (France), 2 à gauche / 1 à droite quand il y en a 3, et 1 seul à
  // droite quand il n'y en a qu'un (Réunion, Corée).
  const LAYOUTS = {
    5: [
      { x: -180, y: -110 },
      { x: -180, y: 0 },
      { x: -180, y: 110 },
      { x: 180, y: -55 },
      { x: 180, y: 55 }
    ],
    4: [
      { x: -170, y: -70 },
      { x: -170, y: 70 },
      { x: 170, y: -70 },
      { x: 170, y: 70 }
    ],
    3: [
      { x: -170, y: -70 },
      { x: -170, y: 70 },
      { x: 170, y: 0 }
    ],
    1: [
      { x: 170, y: 0 }
    ]
  };

  // Nombre maximum de satellites affichés en même temps autour d'un
  // territoire. Au-delà, un tirage aléatoire de 4 projets est fait à
  // chaque clic sur le territoire (pour éviter l'encombrement visuel
  // sur les territoires qui accumulent beaucoup de projets, comme la
  // France). Les projets non tirés restent accessibles via "Voir plus"
  // (section #experiences) ou la grille "Tous les projets" en bas des
  // pages projet.
  const MAX_SATELLITES = 4;

  /**
   * Tire au hasard `count` éléments distincts d'un tableau, sans le
   * modifier (mélange de Fisher-Yates sur une copie).
   */
  function pickRandom(array, count) {
    const copy = array.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy.slice(0, count);
  }

  function buildSatellites(country, container) {
    const allProjects = PROJECTS[country] || [];
    container.innerHTML = "";

    // Au-delà de MAX_SATELLITES projets sur un territoire, on n'en
    // affiche que MAX_SATELLITES, tirés au hasard à chaque ouverture.
    const projects = allProjects.length > MAX_SATELLITES
      ? pickRandom(allProjects, MAX_SATELLITES)
      : allProjects;

    const positions = LAYOUTS[projects.length] || LAYOUTS[4];

    projects.forEach((proj, i) => {
      const pos = positions[i] || { x: 0, y: 0 };
      const a = document.createElement("a");
      // Chaque bulle-projet renvoie vers sa page de détail dédiée.
      a.href = `projet.html?slug=${proj.slug}`;
      a.className = "satellite";
      a.dataset.category = proj.category;
      a.style.setProperty("--sat-x", `${pos.x}px`);
      a.style.setProperty("--sat-y", `${pos.y}px`);
      a.innerHTML = `<span class="satellite__bubble">${proj.title}</span>`;
      a.setAttribute(
        "aria-label",
        `${proj.title}, projet ${proj.category === "academique" ? "académique" : "professionnel"}`
      );
      container.appendChild(a);
    });

    // Le bouton "voir plus" n'a de sens que s'il y a plusieurs projets
    // à découvrir : avec un seul projet (Réunion, Corée), on l'omet.
    // Il reste utile même quand 4 satellites sont déjà affichés, car
    // d'autres projets du même territoire peuvent ne pas être tirés.
    if (allProjects.length > 1) {
      const more = document.createElement("a");
      more.href = "#experiences";
      more.className = "territory-more";
      // Toujours centré, sous la bulle du territoire.
      more.style.setProperty("--more-x", "0px");
      more.style.setProperty("--more-y", "150px");
      more.textContent = "Voir plus →";
      container.appendChild(more);
    }
  }

  function closeAll(except) {
    document.querySelectorAll(".territory-stop[aria-expanded='true']").forEach((btn) => {
      if (btn === except) return;
      btn.setAttribute("aria-expanded", "false");
      const sat = document.getElementById(btn.getAttribute("aria-controls"));
      if (sat) {
        sat.querySelectorAll(".satellite, .territory-more").forEach((el) => el.classList.remove("is-open"));
        setTimeout(() => { sat.hidden = true; }, 300);
      }
    });
  }

  function init() {
    const buttons = document.querySelectorAll(".territory-stop");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const country = btn.dataset.country;
        const sat = document.getElementById(btn.getAttribute("aria-controls"));
        const isOpen = btn.getAttribute("aria-expanded") === "true";

        closeAll(btn);

        if (isOpen) {
          btn.setAttribute("aria-expanded", "false");
          sat.querySelectorAll(".satellite, .territory-more").forEach((el) => el.classList.remove("is-open"));
          setTimeout(() => { sat.hidden = true; }, 300);
          return;
        }

        buildSatellites(country, sat);
        sat.hidden = false;
        btn.setAttribute("aria-expanded", "true");

        requestAnimationFrame(() => {
          sat.querySelectorAll(".satellite, .territory-more").forEach((el, i) => {
            setTimeout(() => el.classList.add("is-open"), i * 70);
          });
        });
      });
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".territory-wrap")) closeAll(null);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

/* ============================================================
   Barres de compétences : se remplissent au scroll, quand la
   catégorie entre dans le viewport (plus besoin de cliquer).
   ============================================================ */
(function () {
  "use strict";

  function init() {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const categories = document.querySelectorAll(".skills__category");
    if (!categories.length) return;

    if (reduced) {
      categories.forEach((c) => c.classList.add("is-visible"));
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
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" }
    );
    categories.forEach((c) => observer.observe(c));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
