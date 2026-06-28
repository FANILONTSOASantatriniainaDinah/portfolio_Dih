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

  // Libellé de catégorie, lu depuis le dictionnaire i18n actif (FR/EN)
  // plutôt que codé en dur, pour suivre la langue choisie sur le site.
  function i18nText(key, fallback) {
    const lang = document.documentElement.getAttribute("lang") || "fr";
    const dict = typeof PORTFOLIO_I18N_DICT !== "undefined" ? PORTFOLIO_I18N_DICT[lang] : null;
    return (dict && dict[key]) || fallback || "";
  }

  function categoryLabel(category) {
    const key = category === "professionnel" ? "project.category.professionnel" : "project.category.academique";
    return i18nText(key, category === "professionnel" ? "Professionnel" : "Académique");
  }

  // Retourne la version anglaise d'un champ (ex: "title" → "titleEn")
  // si elle existe et que la langue active est l'anglais, sinon la
  // version française par défaut. Même logique que celle déjà utilisée
  // dans renderAllProjects, centralisée ici pour être réutilisée dans
  // le hero (titre, sous-titre, pays) et garder les deux en phase.
  function localizedField(data, baseKey) {
    const lang = document.documentElement.getAttribute("lang") || "fr";
    const enKey = `${baseKey}En`;
    if (lang === "en" && data[enKey]) return data[enKey];
    return data[baseKey] || "";
  }

  // Icônes déjà utilisées ailleurs sur le site (section compétences),
  // réutilisées ici pour rester cohérent visuellement.
  const TOOL_LABELS = {
    qgis: "QGIS",
    php: "PHP",
    react: "React",
    javascript: "JavaScript",
    "html-css": "HTML / CSS",
    python: "Python",
    r: "R",
    git: "Git",
    osm: "OpenStreetMap",
    sgbd: "Bases de données"
  };

  // Coordonnées approximatives par pays, affichées sous le titre
  // comme un repère de carte (cohérent avec le métier de cartographe).
  const COUNTRY_COORDS = {
    madagascar: "23.6° S, 47.0° E",
    reunion: "21.1° S, 55.5° E",
    france: "48.9° N, 2.3° E",
    coree: "36.5° N, 127.8° E"
  };

  // Position approximative (en % du globe SVG 200x200, centre 100,100)
  // du point représentant chaque pays sur le mini-globe du hero.
  const COUNTRY_GLOBE_POS = {
    madagascar: { x: 118, y: 118 },
    reunion: { x: 128, y: 124 },
    france: { x: 96, y: 58 },
    coree: { x: 150, y: 70 }
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

  function decodeEntities(html) {
    const ta = document.createElement("textarea");
    ta.innerHTML = html;
    return ta.value;
  }

  /**
   * Découpe le titre en mots et anime chacun en cascade (légère
   * montée + fondu, délai croissant). Le texte est d'abord décodé
   * (les entités comme &rsquo; doivent apparaître comme de vrais
   * caractères, pas comme du texte brut "&rsquo;").
   */
  function renderAnimatedTitle(el, titleHtml) {
    if (!el) return;
    const plain = decodeEntities(titleHtml);
    const words = plain.split(" ");
    el.innerHTML = words
      .map((w, i) => `<span class="title-word" style="animation-delay:${(i * 0.07).toFixed(2)}s">${w}</span>`)
      .join(" ");
  }

  /**
   * Découpe un texte (pouvant contenir du HTML simple comme <strong>)
   * en phrases, chacune dans un <span> qui se révèle (fondu + montée)
   * quand il entre dans le viewport. Donne au paragraphe un effet de
   * lecture progressive plutôt qu'un bloc de texte figé.
   */
  let revealObserver = null;
  function getRevealObserver() {
    if (revealObserver) return revealObserver;
    if (typeof IntersectionObserver === "undefined") return null;
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    return revealObserver;
  }

  function renderRevealText(el, html) {
    if (!el) return;
    // Découpe sur les frontières de phrase (point suivi d'un espace),
    // sans casser une balise HTML ouverte (recherche simple, suffisante
    // pour des descriptions courtes sans balises imbriquées complexes).
    const parts = html.split(/(?<=\.)\s+(?=[A-ZÀ-Ý])/);
    const reduced = typeof window.matchMedia === "function"
      && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.innerHTML = parts
      .map((sentence, i) => `<span class="reveal-sentence" style="transition-delay:${(i * 0.12).toFixed(2)}s">${sentence}</span>`)
      .join(" ");
    if (reduced) {
      el.querySelectorAll(".reveal-sentence").forEach((s) => s.classList.add("is-revealed"));
      return;
    }
    const observer = getRevealObserver();
    if (observer) {
      el.querySelectorAll(".reveal-sentence").forEach((s) => observer.observe(s));
    } else {
      el.querySelectorAll(".reveal-sentence").forEach((s) => s.classList.add("is-revealed"));
    }
  }

  /**
   * Remplace le texte traduit d'un bloc déjà révélé (ex: après un
   * changement de langue) sans relancer l'effet de flou/montée au
   * scroll : le bloc est déjà visible à l'écran à ce moment-là, donc
   * on garde le même balisage par phrases mais on les affiche
   * directement, sans repasser par l'IntersectionObserver.
   */
  function updateRevealText(el, html) {
    if (!el) return;
    const parts = html.split(/(?<=\.)\s+(?=[A-ZÀ-Ý])/);
    el.innerHTML = parts
      .map((sentence) => `<span class="reveal-sentence is-revealed">${sentence}</span>`)
      .join(" ");
  }

  function renderProject(data) {
    // ----- En-tête du projet -----
    const localizedTitle = localizedField(data, "title");
    document.title = `${decodeEntities(localizedTitle)}, Dinah Fanilontsoa`;
    document.getElementById("projectCategory").textContent = categoryLabel(data.category);
    document.getElementById("projectCategory").dataset.category = data.category;
    renderAnimatedTitle(document.getElementById("projectTitle"), localizedTitle);
    const coordsEl = document.getElementById("projectCoords");
    if (coordsEl) {
      const coords = COUNTRY_COORDS[data.country];
      coordsEl.textContent = coords ? `${coords} · ${data.period || ""}` : (data.period || "");
    }
    const pin = document.getElementById("projectGlobePin");
    if (pin) {
      const pos = COUNTRY_GLOBE_POS[data.country] || { x: 100, y: 100 };
      pin.querySelectorAll("circle").forEach((c) => {
        c.setAttribute("cx", pos.x);
        c.setAttribute("cy", pos.y);
      });
    }
    const globeCoords = document.getElementById("projectGlobeCoords");
    if (globeCoords) {
      globeCoords.textContent = COUNTRY_COORDS[data.country] || "";
    }
    document.getElementById("projectSubtitle").textContent = decodeEntities(localizedField(data, "subtitle"));

    // ----- Média illustrant le projet : affiché dans le hero, à côté
    // du titre, dans une carte stylée. Une image OU une vidéo selon
    // le projet (data.heroVideo prioritaire sur data.image), jamais
    // les deux à la fois. -----
    const heroVisual = document.getElementById("projectHeroVisual");
    const heroVisualImg = document.getElementById("projectHeroVisualImg");
    const heroVisualVideo = document.getElementById("projectHeroVisualVideo");
    const heroExpand = document.getElementById("projectHeroExpand");
    let heroMediaType = null; // "image" | "video" | null, utilisé par le bouton agrandir

    if (heroVisual && heroVisualImg && heroVisualVideo) {
      if (data.heroVideo) {
        heroVisualVideo.querySelectorAll("source").forEach((s) => s.remove());
        const source = document.createElement("source");
        source.src = data.heroVideo;
        source.type = "video/mp4";
        heroVisualVideo.appendChild(source);
        heroVisualVideo.poster = data.heroVideoPoster || "";
        heroVisualVideo.hidden = false;
        heroVisualImg.hidden = true;
        heroVisual.hidden = false;
        heroMediaType = "video";
        heroVisualVideo.load();
        const playPromise = heroVisualVideo.play();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(() => { /* autoplay bloqué par le navigateur : pas grave, les contrôles restent disponibles dans le lightbox */ });
        }
      } else if (data.image) {
        heroVisualImg.src = data.image;
        heroVisualImg.alt = "";
        heroVisualImg.hidden = false;
        heroVisualVideo.hidden = true;
        heroVisual.hidden = false;
        heroMediaType = "image";
      } else {
        heroVisual.hidden = true;
        heroVisualImg.hidden = true;
        heroVisualVideo.hidden = true;
      }
    }

    // ----- Bouton "agrandir" : ouvre l'image ou la vidéo du hero dans
    // un dialog plein écran, pour mieux visualiser le détail (cartes,
    // ou la vidéo de démonstration). -----
    if (heroExpand) {
      heroExpand.hidden = !heroMediaType;
      heroExpand.onclick = () => {
        const dialog = document.getElementById("heroMediaLightbox");
        const lbImg = document.getElementById("heroMediaLightboxImg");
        const lbVideo = document.getElementById("heroMediaLightboxVideo");
        if (!dialog || !lbImg || !lbVideo) return;

        if (heroMediaType === "video") {
          lbVideo.querySelectorAll("source").forEach((s) => s.remove());
          const source = document.createElement("source");
          source.src = data.heroVideo;
          source.type = "video/mp4";
          lbVideo.appendChild(source);
          lbVideo.poster = data.heroVideoPoster || "";
          lbVideo.hidden = false;
          lbImg.hidden = true;
        } else if (heroMediaType === "image") {
          lbImg.src = data.image;
          lbImg.alt = "";
          lbImg.hidden = false;
          lbVideo.hidden = true;
        }
        dialog.showModal();
      };
    }

    // ----- Corps : description et rôle -----
    renderRevealText(document.getElementById("projectDescription"), localizedField(data, "description"));
    renderRevealText(document.getElementById("projectRole"), localizedField(data, "role"));

    // ----- Liens externes optionnels (GitLab, site mis en ligne...) -----
    // Placés directement sous l'image/vidéo du hero plutôt qu'en fin de
    // texte, pour rester visibles sans avoir à lire toute la description.
    // data.links est un tableau ([{href, labelKey}, ...]) : 0, 1 ou
    // plusieurs liens selon le projet (ex: OpenAtlas en a deux).
    const heroLinksContainer = document.getElementById("projectHeroLinks");
    if (heroLinksContainer) {
      heroLinksContainer.innerHTML = "";
      (data.links || []).forEach((linkData) => {
        const a = document.createElement("a");
        a.href = linkData.href;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.className = "project-hero__link";
        const label = linkData.labelKey ? i18nText(linkData.labelKey, "Voir le dépôt") : (linkData.label || "");
        a.textContent = label + " ↗";
        a.dataset.labelKey = linkData.labelKey || "";
        heroLinksContainer.appendChild(a);
      });
    }

    // ----- Pièce interactive optionnelle -----
    // Certains projets définissent data.interactive (un identifiant de
    // widget). Le script correspondant (ex: assets/js/pa-widget.js) doit
    // être chargé dans la page. On l'insère en PLEINE LARGEUR, après la
    // grille description/colonne latérale — jamais à l'intérieur de
    // .project-body__main, qui est volontairement étroite pour le texte.
    if (data.interactive === "pred-archeo" && typeof window.PA_WIDGET_HTML === "string") {
      const bodySection = document.querySelector(".project-body");
      if (bodySection) {
        const holder = document.createElement("div");
        holder.innerHTML = window.PA_WIDGET_HTML;
        bodySection.appendChild(holder);
        if (typeof window.PA_WIDGET_INIT === "function") {
          window.PA_WIDGET_INIT();
        }
      }
    }

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
    document.getElementById("projectCountry").textContent = localizedField(data, "countryLabel");
    document.getElementById("projectCategoryText").textContent = categoryLabel(data.category);
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
   * Les projets sont triés par défaut du plus récent au plus ancien
   * (champ "order" : 1 = le plus récent), le tri inverse étant
   * appliqué ensuite par applyProjectFiltersAndSort si besoin.
   */
  function renderAllProjects(currentSlug) {
    const grid = document.getElementById("allProjectsGrid");
    if (!grid) return;

    const lang = document.documentElement.getAttribute("lang") || "fr";
    grid.innerHTML = "";

    const slugs = Object.keys(PROJECT_DATA)
      .filter((slug) => slug !== currentSlug) // on n'affiche pas le projet déjà ouvert
      .sort((a, b) => (PROJECT_DATA[a].order || 0) - (PROJECT_DATA[b].order || 0));

    slugs.forEach((slug) => {
      const proj = PROJECT_DATA[slug];
      const country = (lang === "en" && proj.countryLabelEn) ? proj.countryLabelEn : proj.countryLabel;
      const title = (lang === "en" && proj.titleEn) ? proj.titleEn : proj.title;
      const subtitle = (lang === "en" && proj.subtitleEn) ? proj.subtitleEn : (proj.subtitle || "");

      const card = document.createElement("a");
      card.href = `projet.html?slug=${slug}`;
      card.className = "project-mini-card";
      card.dataset.category = proj.category;
      card.dataset.country = proj.country || "";
      card.dataset.order = proj.order || 0;
      card.innerHTML = `
        <span class="project-mini-card__country">${country}</span>
        <span class="project-mini-card__title">${title}</span>
        <span class="project-mini-card__subtitle">${subtitle}</span>
      `;
      grid.appendChild(card);
    });
  }

  /**
   * Applique ensemble les trois contrôles de la grille "Tous les
   * projets" : filtre catégorie (boutons), filtre pays (menu) et tri
   * récent/ancien (menu). Appelée à chaque changement de l'un des
   * trois contrôles, pour que leurs effets se combinent plutôt que
   * de s'écraser mutuellement.
   */
  function applyProjectFiltersAndSort() {
    const grid = document.getElementById("allProjectsGrid");
    if (!grid) return;

    const activeFilterBtn = document.querySelector(".filter-btn.is-active");
    const categoryFilter = activeFilterBtn ? activeFilterBtn.dataset.filter : "all";
    const countrySelect = document.getElementById("countryFilter");
    const countryFilter = countrySelect ? countrySelect.value : "all";
    const sortSelect = document.getElementById("sortOrder");
    const sortValue = sortSelect ? sortSelect.value : "recent";

    const cards = Array.from(grid.querySelectorAll(".project-mini-card"));

    // Tri : on réordonne les nœuds DOM eux-mêmes (pas seulement un
    // affichage visuel), pour que la lecture au clavier/lecteur d'écran
    // suive le même ordre que l'affichage.
    cards.sort((a, b) => {
      const orderA = Number(a.dataset.order) || 0;
      const orderB = Number(b.dataset.order) || 0;
      return sortValue === "oldest" ? orderB - orderA : orderA - orderB;
    });
    cards.forEach((card) => grid.appendChild(card));

    cards.forEach((card) => {
      const matchesCategory = categoryFilter === "all" || card.dataset.category === categoryFilter;
      const matchesCountry = countryFilter === "all" || card.dataset.country === countryFilter;
      card.classList.toggle("is-hidden", !(matchesCategory && matchesCountry));
    });
  }

  /**
   * Active les contrôles de la grille "Tous les projets" : boutons de
   * filtre par catégorie, menu déroulant pays, et menu déroulant tri.
   */
  function initProjectFilters() {
    const buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        applyProjectFiltersAndSort();
      });
    });

    const countrySelect = document.getElementById("countryFilter");
    if (countrySelect) {
      countrySelect.addEventListener("change", applyProjectFiltersAndSort);
    }

    const sortSelect = document.getElementById("sortOrder");
    if (sortSelect) {
      sortSelect.addEventListener("change", applyProjectFiltersAndSort);
    }

    // Applique l'état initial (tri "plus récents" par défaut, déjà
    // posé par renderAllProjects, mais on repasse par la fonction
    // commune pour rester cohérent si les valeurs par défaut changent).
    applyProjectFiltersAndSort();
  }

  /**
   * Branche l'ouverture/fermeture du dialog d'agrandissement du visuel
   * du hero (image ou vidéo). Le bouton "agrandir" lui-même est câblé
   * dans renderProject (il a besoin de connaître data.image/heroVideo).
   */
  function initHeroMediaLightbox() {
    const dialog = document.getElementById("heroMediaLightbox");
    const closeBtn = document.getElementById("heroMediaLightboxClose");
    const lbVideo = document.getElementById("heroMediaLightboxVideo");
    if (!dialog || !closeBtn) return;

    function close() {
      if (lbVideo) lbVideo.pause();
      dialog.close();
    }

    closeBtn.addEventListener("click", close);
    dialog.addEventListener("click", (e) => {
      if (e.target === dialog) close();
    });
    // <dialog> gère déjà Échap nativement pour la fermeture.
  }

  /**
   * Masque la boussole flottante "Tous les projets sont juste en bas"
   * dès que la section qu'elle pointe entre dans le viewport, pour
   * qu'elle ne reste pas affichée par-dessus le contenu qu'elle annonce.
   */
  function initScrollCue() {
    const cue = document.getElementById("projectScrollCue");
    const target = document.getElementById("allProjectsSection");
    if (!cue || !target) return;

    if (typeof IntersectionObserver === "undefined") {
      return; // pas de masquage automatique possible, la boussole reste visible
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          cue.classList.toggle("is-hidden", entry.isIntersecting);
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(target);
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
    initHeroMediaLightbox();
    initScrollCue();

    // Quand la langue change (bouton FR/EN du header), on régénère le
    // contenu généré dynamiquement par ce script : la grille "Tous les
    // projets" (titres/sous-titres traduits) et les libellés de la
    // page courante qui dépendent de la langue (catégorie, infos).
    document.addEventListener("portfolio:langchange", () => {
      if (data) {
        const localizedTitle = localizedField(data, "title");
        document.title = `${decodeEntities(localizedTitle)}, Dinah Fanilontsoa`;
        renderAnimatedTitle(document.getElementById("projectTitle"), localizedTitle);
        document.getElementById("projectSubtitle").textContent = decodeEntities(localizedField(data, "subtitle"));
        document.getElementById("projectCountry").textContent = localizedField(data, "countryLabel");
        document.getElementById("projectCategory").textContent = categoryLabel(data.category);
        document.getElementById("projectCategoryText").textContent = categoryLabel(data.category);
        updateRevealText(document.getElementById("projectDescription"), localizedField(data, "description"));
        updateRevealText(document.getElementById("projectRole"), localizedField(data, "role"));
        if (data.links && data.links.length) {
          const linkEls = document.querySelectorAll("#projectHeroLinks .project-hero__link");
          linkEls.forEach((linkEl) => {
            const labelKey = linkEl.dataset.labelKey;
            if (labelKey) {
              const label = i18nText(labelKey, "Voir le dépôt");
              linkEl.textContent = label + " ↗";
            }
          });
        }
      }
      // Régénère la grille traduite, puis réapplique les filtres et le
      // tri actuellement actifs (catégorie, pays, ordre) — le bouton
      // catégorie actif et les menus déroulants gardent leur état, on
      // n'a donc qu'à relire leur valeur, pas à simuler un clic.
      renderAllProjects(slug);
      applyProjectFiltersAndSort();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
