/* ============================================================
   project-data.js
   ------------------------------------------------------------
   Contient le détail de chaque projet affiché sur projet.html.
   Les textes ci-dessous sont des EXEMPLES FICTIFS à corriger et
   compléter avec les vraies informations de chaque projet avant
   la mise en ligne définitive (description, dates, rôle exact).

   Comment ajouter/modifier un projet :
   1. Choisir un "slug" unique (identifiant sans espace, ex: "madatlas")
   2. Ajouter une entrée dans PROJECT_DATA ci-dessous avec ce slug
   3. Le satellite correspondant dans assets/js/journey.js doit
      utiliser exactement le même slug pour pointer vers ce projet
   ============================================================ */

const PROJECT_DATA = {

  // ---------- MADAGASCAR ----------
  "madatlas": {
    country: "madagascar",
    countryLabel: "Madagascar",
    category: "academique",
    title: "MADATLAS, pratiques genrées",
    subtitle: "Chantier École de cartographie collaborative",
    period: "2023 - 2024",
    description:
      "MADATLAS est un projet de cartographie participative mené dans le cadre " +
      "d'un chantier école. L'objectif : recenser et représenter les pratiques " +
      "genrées de l'espace public à Fianarantsoa, à partir d'enquêtes de terrain " +
      "et de relevés géolocalisés. (Contenu fictif à préciser avec le vrai " +
      "déroulé du projet.)",
    role:
      "J'ai participé à la collecte des données sur le terrain, à leur " +
      "structuration dans une base SIG, puis à la réalisation des cartes " +
      "finales restituant les résultats de l'étude.",
    tools: ["qgis", "osm"],
    hasVideo: false  // Pas de vidéo pour ce projet (uniquement DORA en a une)
  },

  "ranosoa": {
    country: "madagascar",
    countryLabel: "Madagascar",
    category: "professionnel",
    title: "Projet RANOSOA (pompe solaire)",
    subtitle: "Accompagnement technique avec des stagiaires de Sherbrooke (Canada)",
    period: "Août - Novembre 2023",
    description:
      "Mise en place d'une pompe à eau solaire (E-tiala) en collaboration avec " +
      "une équipe de stagiaires venus du Québec. Le projet visait à fournir un " +
      "accès à l'eau potable autonome en énergie pour une communauté rurale. " +
      "(Contenu fictif à préciser.)",
    role:
      "Accompagnatrice du projet : coordination logistique sur place, appui à " +
      "la communication entre les équipes locales et les stagiaires canadiens.",
    tools: ["qgis"],
    hasVideo: false  // Pas de vidéo pour ce projet (uniquement DORA en a une)
  },

  "app-restaurants-parcs": {
    country: "madagascar",
    countryLabel: "Madagascar",
    category: "academique",
    title: "Application restaurants &amp; parcs d'attractions",
    subtitle: "Projet académique : React &amp; OpenStreetMap",
    period: "2022 - 2023",
    description:
      "Application web permettant de localiser des restaurants et des parcs " +
      "d'attractions à partir des données ouvertes d'OpenStreetMap. Carte " +
      "interactive, fiches détaillées par lieu, filtres de recherche. " +
      "(Contenu fictif, à détailler avec les vraies fonctionnalités.)",
    role:
      "Développement complet du front-end avec React, intégration de l'API " +
      "OpenStreetMap pour l'affichage de la carte et des points d'intérêt.",
    tools: ["react", "osm", "javascript"],
    hasVideo: false  // Pas de vidéo pour ce projet (uniquement DORA en a une)
  },

  "site-itdc-mada": {
    country: "madagascar",
    countryLabel: "Madagascar",
    category: "professionnel",
    title: "Site vitrine ITDC Mada",
    subtitle: "Stage L2, Développeuse Codeigniter",
    period: "Avril - Juillet 2020",
    description:
      "Conception et réalisation du site vitrine de l'entreprise ITDC Mada, " +
      "dans le cadre d'un stage de licence. Le site présente les activités de " +
      "l'entreprise et ses services. (Contenu fictif à compléter avec le " +
      "véritable périmètre du stage.)",
    role:
      "Développement du site avec le framework CodeIgniter (PHP) : structure " +
      "des pages, formulaires de contact, mise en page responsive.",
    tools: ["php"],
    hasVideo: false  // Pas de vidéo pour ce projet (uniquement DORA en a une)
  },

  // ---------- LA RÉUNION ----------
  "openatlas": {
    country: "reunion",
    countryLabel: "La Réunion",
    category: "professionnel",
    title: "OpenAtlas, interopérabilité OSM",
    subtitle: "Développeuse PHP (Yii) chez OpenAtlas",
    period: "2022 - 2024",
    description:
      "Développement au sein de l'équipe OpenAtlas sur des problématiques " +
      "d'interopérabilité des données avec OpenStreetMap, ainsi que sur la " +
      "qualité de la base de données (détection de spams et de doublons). " +
      "(Contenu fictif, à enrichir avec le détail réel des missions.)",
    role:
      "Développement PHP avec le framework Yii : implémentation de " +
      "fonctionnalités d'import/export de données OSM, scripts de nettoyage " +
      "de la base (doublons, contenus indésirables).",
    tools: ["php", "sgbd", "osm"],
    hasVideo: false  // Pas de vidéo pour ce projet (uniquement DORA en a une)
  },

  // ---------- FRANCE ----------
  "atopia": {
    country: "france",
    countryLabel: "France",
    category: "professionnel",
    title: "Stage M2 ATOPIA",
    subtitle: "Cartographie en urbanisme, architecture et paysage",
    period: "Avril 2025 - Aujourd'hui",
    description:
      "Stage de fin d'études au sein de l'agence ATOPIA (Paris 11e). Mission : " +
      "optimiser un outil de traitement, d'analyse et de cartographie de " +
      "données spatialisées, utilisé pour des projets d'urbanisme, " +
      "d'architecture et de paysage. (Contenu fictif à compléter avec le " +
      "détail réel du stage.)",
    role:
      "Amélioration des scripts de traitement de données géospatiales et " +
      "production de cartes pour accompagner les équipes projet.",
    tools: ["qgis", "python", "git"],
    hasVideo: false  // Pas de vidéo pour ce projet (uniquement DORA en a une)
  },

  "resallience": {
    country: "france",
    countryLabel: "France",
    category: "academique",
    title: "Étude RESALLIENCE",
    subtitle: "Vulnérabilité et exposition aux aléas climatiques",
    period: "2024 - 2025",
    description:
      "Étude académique portant sur les changements climatiques : analyse de " +
      "la vulnérabilité et de l'exposition de différents territoires aux " +
      "aléas climatiques, à l'aide d'outils de cartographie et d'analyse " +
      "spatiale. (Contenu fictif à préciser.)",
    role:
      "Traitement des données spatiales, modélisation des zones à risque et " +
      "restitution cartographique des résultats.",
    tools: ["qgis", "python"],
    hasVideo: false  // Pas de vidéo pour ce projet (uniquement DORA en a une)
  },

  "analyse-spatiale": {
    country: "france",
    countryLabel: "France",
    category: "academique",
    title: "Projets complémentaires en analyse spatiale",
    subtitle: "Travaux académiques menés en France",
    period: "2024 - 2025",
    description:
      "Plusieurs projets et exercices menés dans le cadre du Master 2, autour " +
      "de l'analyse spatiale et de la télédétection. (Section à compléter : " +
      "ces projets ne sont pas encore détaillés individuellement.)",
    role:
      "Travaux pratiques et projets de fin de module en analyse spatiale et " +
      "télédétection.",
    tools: ["qgis", "python"],
    hasVideo: false  // Pas de vidéo pour ce projet (uniquement DORA en a une)
  },

  // ---------- CORÉE DU SUD ----------
  "jeux-coreens": {
    country: "coree",
    countryLabel: "Corée du Sud",
    category: "academique",
    title: "Documentaire interactif sur les jeux coréens",
    subtitle: "Projet créatif autour de la culture ludique coréenne",
    period: "À venir",
    description:
      "Documentaire interactif présentant différents jeux traditionnels et " +
      "populaires coréens, pensé comme une expérience web immersive mêlant " +
      "vidéo, illustrations et navigation interactive. " +
      "(Contenu fictif : projet à détailler une fois réalisé.)",
    role:
      "Conception du parcours interactif et réalisation du contenu " +
      "multimédia (à préciser).",
    tools: ["javascript", "html-css"],

    // === Vidéo DORA ===
    // Seul ce projet affiche le bloc vidéo sur sa page de détail.
    // Une fois le fichier vidéo prêt (rendu attendu lundi selon la consigne
    // du professeur), il suffit de :
    //  1) déposer le fichier .mp4 dans assets/video/ (ex: assets/video/dora.mp4)
    //  2) remplacer la ligne videoSrc ci-dessous par : videoSrc: "assets/video/dora.mp4",
    hasVideo: true,
    videoSrc: "",
    videoCaption: "Vidéo de présentation DORA, à intégrer après réalisation."
  }

};
