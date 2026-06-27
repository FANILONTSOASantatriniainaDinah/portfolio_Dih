/* ============================================================
   project.js
   ------------------------------------------------------------
   Lit le paramètre ?slug=... dans l'URL de la page (par exemple
   projet.html?slug=madatlas), récupère les informations
   correspondantes dans PROJECT_DATA (assets/js/project-data.js)
   et les insère dans le gabarit HTML de projet.html.
   ============================================================ */
(function () {
  "use strict";

  // Petits libellés lisibles pour la catégorie, réutilisés à
  // plusieurs endroits de la page.
  const CATEGORY_LABELS = {
    academique: "Académique",
    professionnel: "Professionnel"
  };

  // Icônes déjà utilisées ailleurs sur le site (section compétences),
  // réutilisées ici pour rester cohérent visuellement.
  const TOOL_LABELS = {
    qgis: "QGIS",
    php: "PHP",
    react: "React",
    javascript: "JavaScript",
    "html-css": "HTML / CSS",
    python: "Python",
    git: "Git",
    osm: "OpenStreetMap",
    sgbd: "Bases de données"
  };

  function getSlugFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get("slug");
  }

  function renderNotFound() {
    document.getElementById("projectTitle").textContent = "Projet introuvable";
    document.getElementById("projectSubtitle").textContent =
      "Ce projet n'existe pas ou son lien est incorrect.";
  }

  function renderProject(data) {
    // ----- En-tête du projet -----
    document.title = `${data.title}, Dinah Fanilontsoa`;
    document.getElementById("projectCategory").textContent = CATEGORY_LABELS[data.category] || "";
    document.getElementById("projectCategory").dataset.category = data.category;
    document.getElementById("projectTitle").innerHTML = data.title;
    document.getElementById("projectSubtitle").textContent = data.subtitle || "";

    // ----- Corps : description et rôle -----
    document.getElementById("projectDescription").innerHTML = data.description || "";
    document.getElementById("projectRole").innerHTML = data.role || "";

    // ----- Bloc vidéo -----
    // Affiché uniquement si ce projet a hasVideo: true (le documentaire
    // DORA sur la Corée du Sud). Pour tous les autres projets, on masque
    // entièrement la section (titre + lecteur), pas seulement le lecteur.
    const videoSection = document.getElementById("projectVideoSection");
    const video = document.getElementById("projectVideo");
    const caption = document.getElementById("projectVideoCaption");

    if (data.hasVideo) {
      videoSection.hidden = false;
      if (data.videoSrc) {
        const source = document.createElement("source");
        source.src = data.videoSrc;
        source.type = "video/mp4";
        video.appendChild(source);
      }
      caption.textContent = data.videoCaption || "";
    } else {
      videoSection.hidden = true;
    }

    // ----- Colonne latérale : informations pratiques -----
    document.getElementById("projectCountry").textContent = data.countryLabel || "";
    document.getElementById("projectCategoryText").textContent = CATEGORY_LABELS[data.category] || "";
    document.getElementById("projectPeriod").textContent = data.period || "";

    const toolsList = document.getElementById("projectTools");
    (data.tools || []).forEach((toolKey) => {
      const li = document.createElement("li");
      li.className = "project-card-info__tool";
      li.innerHTML = `
        <img src="assets/images/tools/${toolKey}.svg" alt="">
        <span>${TOOL_LABELS[toolKey] || toolKey}</span>
      `;
      toolsList.appendChild(li);
    });

    // ----- Lien "retour" : renvoie vers le pays d'origine du projet -----
    const backLink = document.getElementById("backLink");
    if (data.country) {
      backLink.href = `index.html#parcours`;
    }
  }

  /**
   * Construit la grille "Tous les projets" en bas de page, à partir
   * de l'ensemble de PROJECT_DATA. Le projet actuellement affiché
   * (currentSlug) est exclu de la liste pour éviter la redondance.
   */
  function renderAllProjects(currentSlug) {
    const grid = document.getElementById("allProjectsGrid");
    if (!grid) return;

    grid.innerHTML = "";

    Object.keys(PROJECT_DATA).forEach((slug) => {
      if (slug === currentSlug) return; // on n'affiche pas le projet déjà ouvert

      const proj = PROJECT_DATA[slug];
      const card = document.createElement("a");
      card.href = `projet.html?slug=${slug}`;
      card.className = "project-mini-card";
      card.dataset.category = proj.category;
      card.innerHTML = `
        <span class="project-mini-card__country">${proj.countryLabel}</span>
        <span class="project-mini-card__title">${proj.title}</span>
        <span class="project-mini-card__subtitle">${proj.subtitle || ""}</span>
      `;
      grid.appendChild(card);
    });
  }

  /**
   * Active les boutons de filtre (Tous / Académique / Professionnel)
   * au-dessus de la grille "Tous les projets".
   */
  function initProjectFilters() {
    const buttons = document.querySelectorAll(".filter-btn");
    const cards = () => document.querySelectorAll(".project-mini-card");

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");

        const filter = btn.dataset.filter;
        cards().forEach((card) => {
          const show = filter === "all" || card.dataset.category === filter;
          card.classList.toggle("is-hidden", !show);
        });
      });
    });
  }

  function init() {
    const slug = getSlugFromUrl();
    const data = slug ? PROJECT_DATA[slug] : null;

    if (!data) {
      renderNotFound();
    } else {
      renderProject(data);
    }

    // La liste "Tous les projets" et ses filtres sont toujours
    // affichés en bas de page, même si le projet demandé est introuvable.
    renderAllProjects(slug);
    initProjectFilters();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
