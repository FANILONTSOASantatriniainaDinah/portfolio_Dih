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
    order: 8,
    country: "madagascar",
    countryLabel: "Madagascar",
    category: "academique",
    title: "MADATLAS, pratiques genrées",
    titleEn: "MADATLAS, gendered practices",
    subtitle: "Chantier École de cartographie collaborative",
    subtitleEn: "Field-school collaborative mapping project",
    period: "2023 - 2024",
    description:
      "MADATLAS est un projet de cartographie participative mené dans le cadre " +
      "d'un chantier école. L'objectif : recenser et représenter les pratiques " +
      "genrées de l'espace public à Fianarantsoa, à partir d'enquêtes de terrain " +
      "et de relevés géolocalisés.",
    descriptionEn:
      "MADATLAS is a participatory mapping project carried out as part of a " +
      "field school. The goal: identify and map gendered uses of public space " +
      "in Fianarantsoa, based on field surveys and geolocated data collection.",
    role:
      "J'ai participé à la collecte des données sur le terrain, à leur " +
      "structuration dans une base SIG, puis à la réalisation des cartes " +
      "finales restituant les résultats de l'étude.",
    roleEn:
      "I took part in the field data collection, structured it into a GIS " +
      "database, and produced the final maps presenting the study's results.",
    tools: ["qgis", "osm"],
    hasVideo: false  // Pas de vidéo pour ce projet (seul "jeux-coreens" et "dora-atopia" en ont une)
  },

  "ranosoa": {
    order: 9,
    country: "madagascar",
    countryLabel: "Madagascar",
    category: "professionnel",
    title: "Projet RANOSOA (pompe solaire)",
    titleEn: "RANOSOA project (solar pump)",
    subtitle: "Accompagnement technique avec des stagiaires de Sherbrooke (Canada)",
    subtitleEn: "Technical support with interns from Sherbrooke (Canada)",
    period: "Août - Novembre 2023",
    description:
      "Mise en place d'une pompe à eau solaire (E-tiala) en collaboration avec " +
      "une équipe de stagiaires venus du Québec. Le projet visait à fournir un " +
      "accès à l'eau potable autonome en énergie pour une communauté rurale.",
    descriptionEn:
      "Installation of a solar-powered water pump (E-tiala) in collaboration " +
      "with a team of interns from Quebec. The project aimed to provide an " +
      "energy-autonomous source of drinking water for a rural community.",
    role:
      "Accompagnatrice du projet : coordination logistique sur place, appui à " +
      "la communication entre les équipes locales et les stagiaires canadiens.",
    roleEn:
      "Project support: on-site logistics coordination, and assistance with " +
      "communication between the local teams and the Canadian interns.",
    tools: ["qgis"],
    hasVideo: false  // Pas de vidéo pour ce projet (seul "jeux-coreens" et "dora-atopia" en ont une)
  },

  "app-restaurants-parcs": {
    order: 10,
    country: "madagascar",
    countryLabel: "Madagascar",
    category: "academique",
    title: "Application restaurants &amp; parcs d'attractions",
    titleEn: "Restaurants &amp; amusement parks app",
    subtitle: "Projet académique : React &amp; OpenStreetMap",
    subtitleEn: "Academic project: React &amp; OpenStreetMap",
    period: "2022 - 2023",
    description:
      "Application web permettant de localiser des restaurants et des parcs " +
      "d'attractions à partir des données ouvertes d'OpenStreetMap. Carte " +
      "interactive, fiches détaillées par lieu, filtres de recherche.",
    descriptionEn:
      "Web application for locating restaurants and amusement parks using " +
      "open data from OpenStreetMap. Interactive map, detailed listing pages, " +
      "and search filters.",
    role:
      "Développement complet du front-end avec React, intégration de l'API " +
      "OpenStreetMap pour l'affichage de la carte et des points d'intérêt.",
    roleEn:
      "Full front-end development with React, including integration of the " +
      "OpenStreetMap API to display the map and points of interest.",
    tools: ["react", "osm", "javascript"],
    hasVideo: false  // Pas de vidéo pour ce projet (seul "jeux-coreens" et "dora-atopia" en ont une)
  },

  "site-itdc-mada": {
    order: 11,
    country: "madagascar",
    countryLabel: "Madagascar",
    category: "professionnel",
    title: "Site vitrine ITDC Mada",
    titleEn: "ITDC Mada showcase website",
    subtitle: "Stage L2, Développeuse Codeigniter",
    subtitleEn: "Undergraduate internship, CodeIgniter developer",
    period: "Avril - Juillet 2020",
    description:
      "Conception et réalisation du site vitrine de l'entreprise ITDC Mada, " +
      "dans le cadre d'un stage de licence. Le site présente les activités de " +
      "l'entreprise et ses services.",
    descriptionEn:
      "Design and development of the showcase website for ITDC Mada, as part " +
      "of an undergraduate internship. The site presents the company's " +
      "activities and services.",
    role:
      "Développement du site avec le framework CodeIgniter (PHP) : structure " +
      "des pages, formulaires de contact, mise en page responsive.",
    roleEn:
      "Site development with the CodeIgniter (PHP) framework: page structure, " +
      "contact forms, and responsive layout.",
    tools: ["php"],
    hasVideo: false  // Pas de vidéo pour ce projet (seul "jeux-coreens" et "dora-atopia" en ont une)
  },

  // ---------- LA RÉUNION ----------
  "openatlas": {
    order: 7,
    country: "reunion",
    countryLabel: "La Réunion",
    countryLabelEn: "Réunion Island",
    category: "professionnel",
    title: "OpenAtlas, Costum &amp; interopérabilité OSM",
    titleEn: "OpenAtlas, Costum &amp; OSM interoperability",
    subtitle: "Développeuse PHP (Yii) chez OpenAtlas, en télétravail depuis Madagascar",
    subtitleEn: "PHP developer (Yii) at OpenAtlas, working remotely from Madagascar",
    period: "2022 - 2024",
    description:
      "J'ai effectué mon stage de licence à Madagascar, et c'est à la suite de ce stage que " +
      "OpenAtlas, entreprise dont le siège est à La Réunion, m'a recrutée comme salariée à " +
      "mi-temps pendant la durée de mon master. J'ai travaillé en full remote depuis " +
      "Madagascar, en jonglant entre les cours, les deadlines et les rituels Scrum avec les " +
      "chefs de projet. Parmi les nombreux projets confiés, deux m'ont particulièrement " +
      "marquée : la création de pages dans Costum, le CMS interne de l'entreprise, qui permet " +
      "à n'importe quel utilisateur de générer sa propre page en quelques clics, simplement en " +
      "paramétrant l'interface, sur des éléments déjà préparés ; et le travail " +
      "d'interopérabilité des données avec OpenStreetMap décrit ci-dessous. OpenAtlas fait " +
      "partie de l'équipe derrière Communecter, un réseau territorial open-source bien plus " +
      "vaste, dont ce travail n'est qu'une petite partie.",
    descriptionEn:
      "I completed my bachelor's internship in Madagascar, and it was after this internship " +
      "that OpenAtlas, a company headquartered in Réunion Island, hired me as a part-time " +
      "employee for the duration of my master's degree. I worked fully remote from " +
      "Madagascar, juggling coursework, deadlines and Scrum rituals with the project " +
      "managers. Among the many projects I was entrusted with, two stood out: building the " +
      "page-creation feature in Costum, the company's in-house CMS, which lets any user " +
      "generate their own page in a few clicks by configuring the interface on top of " +
      "already-prepared building blocks; and the OpenStreetMap data interoperability work " +
      "described below. OpenAtlas is part of the team behind Communecter, a much larger " +
      "open-source territorial network, of which this work is only a small part.",
    role:
      "Développement PHP avec le framework Yii. D'une part, mise en place de la création de " +
      "pages dans Costum : il suffit à un utilisateur lambda de cliquer et de paramétrer " +
      "l'interface comme il le souhaite pour obtenir sa page, déjà garnie d'éléments " +
      "préparés. D'autre part, implémentation de fonctionnalités d'import/export de données " +
      "OSM et de scripts de nettoyage de la base (détection de doublons et de contenus " +
      "indésirables) pour les besoins d'interopérabilité.",
    roleEn:
      "PHP development with the Yii framework. On one hand, building the page-creation " +
      "feature in Costum: a regular user just clicks and configures the interface however " +
      "they like to get their own page, already populated with prepared building blocks. On " +
      "the other hand, implementing OSM data import/export features and database cleanup " +
      "scripts (detecting duplicates and unwanted content) for interoperability purposes.",
    tools: ["php", "mongodb", "osm"],
    hasVideo: false,
    image: "assets/images/projects/costum-pages.png",
    links: [
      { href: "https://www.communecter.org/#welcome", labelKey: "project.communecter" },
      { href: "https://www.open-atlas.org/#welcome", labelKey: "project.openatlassite" }
    ]
  },

  // ---------- FRANCE ----------
  "atopia": {
    order: 2,
    country: "france",
    countryLabel: "France",
    category: "professionnel",
    title: "Stage M2 ATOPIA",
    titleEn: "ATOPIA graduate internship",
    subtitle: "Cartographie en urbanisme, architecture et paysage",
    subtitleEn: "Mapping for urban planning, architecture and landscape",
    period: "Avril 2025 - Aujourd'hui",
    description:
      "Stage de fin d'études au sein de l'agence ATOPIA (Paris 11e). Mission : " +
      "optimiser un outil de traitement, d'analyse et de cartographie de " +
      "données spatialisées, utilisé pour des projets d'urbanisme, " +
      "d'architecture et de paysage.",
    descriptionEn:
      "End-of-studies internship at the ATOPIA agency (Paris 11th " +
      "arrondissement). Mission: optimize a tool for processing, analyzing " +
      "and mapping spatial data, used for urban planning, architecture and " +
      "landscape projects.",
    role:
      "Amélioration des scripts de traitement de données géospatiales et " +
      "production de cartes pour accompagner les équipes projet.",
    roleEn:
      "Improving geospatial data processing scripts and producing maps to " +
      "support the project teams.",
    tools: ["qgis", "python", "git"],
    hasVideo: false  // Pas de vidéo pour ce projet (seul "jeux-coreens" et "dora-atopia" en ont une)
  },

  "dora-atopia": {
    order: 1,
    country: "france",
    countryLabel: "France",
    category: "professionnel",
    title: "DORA, outil de cartographie interactive",
    titleEn: "DORA, interactive mapping tool",
    subtitle: "Alternance chez atopia (Paris 11e), 2025 - 2026",
    subtitleEn: "Work-study program at atopia (Paris, 11th arrondissement), 2025 - 2026",
    period: "2025 - 2026",
    description:
      "DORA est l'outil interne de cartographie interactive d'atopia, qui appuie les études " +
      "de densification et d'évaluation des potentiels fonciers de l'agence. Développé avec R " +
      "Shiny et Leaflet, adossé à une base PostgreSQL/PostGIS et hébergé sur un Raspberry Pi, " +
      "il permet de générer des cartes statistiques par commune ou par IRIS (cercles " +
      "proportionnels pour les effectifs, aplats de couleur pour les taux), avec un mode " +
      "comparaison calculant le taux de croissance annuel moyen entre deux dates. Il a été créé " +
      "pour s'affranchir des limites de l'Observatoire des territoires (Géoclip) : indicateurs " +
      "absents à l'échelle IRIS, délais de mise à jour des données INSEE, esthétique figée.",
    descriptionEn:
      "DORA is atopia's in-house interactive mapping tool, supporting the agency's land " +
      "densification studies and development potential assessments. Built with R Shiny and " +
      "Leaflet, backed by a PostgreSQL/PostGIS database and hosted on a Raspberry Pi, it " +
      "generates statistical maps by municipality or IRIS unit (proportional circles for " +
      "headcounts, color shading for rates), with a comparison mode computing the average " +
      "annual growth rate between two dates. It was built to overcome the limitations of the " +
      "Observatoire des territoires (Géoclip): no IRIS-level indicators, slow INSEE data " +
      "updates, and a fixed, non-customizable look.",
    role:
      "À mon arrivée, l'outil était à l'arrêt après un crash de sa base de données. Ma mission " +
      "a consisté à le relancer et à le fiabiliser, puis à l'améliorer pour mieux l'adapter aux " +
      "usages quotidiens des chefs de projet et chargés d'études : documentation du code " +
      "existant, remise en marche et mise à disposition de l'outil sur les postes de toute " +
      "l'équipe (ce qui n'était pas le cas auparavant), hébergement sur un serveur Raspberry " +
      "Pi pour une utilisation stable et continue, ajout d'une gestion de session " +
      "(déconnexion volontaire, maintien tant que l'outil reste ouvert), remplacement de la " +
      "saisie manuelle des codes INSEE par un identifiant unique lié au numéro de mission " +
      "(avec mise à jour de la table de correspondance missions/communes), et début de " +
      "l'actualisation de la base statistique avec les données du recensement 2022.",
    roleEn:
      "When I joined, the tool had been offline following a database crash. My mission was " +
      "to bring it back online and make it reliable, then improve it to better fit the daily " +
      "use of project managers and study officers: documenting the existing code, restoring " +
      "the tool and making it available on every team member's workstation (which wasn't the " +
      "case before), hosting it on a Raspberry Pi server for stable, continuous use, adding " +
      "session management (voluntary logout, session kept alive while the tool stays open), " +
      "replacing manual INSEE code entry with a single identifier tied to the mission number " +
      "(updating the mission/municipality correspondence table accordingly), and starting to " +
      "update the statistical database with the 2022 census data.",
    tools: ["r", "shiny", "sgbd", "git"],
    hasVideo: false,
    heroVideo: "",
    heroVideoPoster: "assets/images/projects/poster.jpg",
    interactive: null
    // Vidéo de démonstration DORA, à intégrer une fois prête (demande
    // explicite des profs) : déposer le fichier .mp4 dans
    // assets/video/ (ex: assets/video/dora-atopia.mp4), puis renseigner
    // heroVideo: "assets/video/dora-atopia.mp4" ci-dessus. Elle remplace
    // l'image du hero (pas de section vidéo séparée dans le corps,
    // contrairement à "jeux-coreens").
  },

  "pred-archeo": {
    order: 5,
    country: "france",
    countryLabel: "France",
    category: "academique",
    title: "Préd&rsquo;Archéo, prédiction du potentiel archéologique",
    titleEn: "Préd&rsquo;Archéo, archaeological potential prediction",
    subtitle: "Module IGAST, en binôme avec Thomas André (ENSG / Université Gustave Eiffel)",
    subtitleEn: "IGAST module, paired with Thomas André (ENSG / Gustave Eiffel University)",
    period: "2024 - 2025",
    description:
      "Automatisation, avec des outils et données entièrement open source, de la méthode " +
      "de Davis et al. (2020) pour prédire le potentiel archéologique d'un territoire à " +
      "partir d'images Sentinel-1 et Sentinel-2. Testée sur deux zones du sud-ouest de " +
      "Madagascar et une zone en Guyane, la méthode combine classification de l'occupation " +
      "du sol et calcul d'un indice de proximité aux ressources (eau, coraux, végétation, " +
      "paléo-dunes, îles).",
    descriptionEn:
      "Automation, using entirely open-source tools and data, of the method " +
      "by Davis et al. (2020) for predicting the archaeological potential of " +
      "a territory from Sentinel-1 and Sentinel-2 imagery. Tested on two " +
      "areas in southwestern Madagascar and one in French Guiana, the method " +
      "combines land cover classification with a resource-proximity index " +
      "(water, coral reefs, vegetation, paleo-dunes, islands).",
    role:
      "Sélection et prétraitement des images Sentinel-1 (radar) et Sentinel-2 (optique) : " +
      "pansharpening, moyennage temporel, calcul des cinq indices biophysiques (SAVI, EVI, " +
      "NDWI, BAI, BMI) et fusion des sources en une image unique à classifier. Thomas André " +
      "a développé en parallèle l'extension QGIS Préd'Archéo automatisant la classification " +
      "et le calcul d'indice ; l'analyse des résultats a été menée à deux.",
    roleEn:
      "Selection and preprocessing of Sentinel-1 (radar) and Sentinel-2 (optical) imagery: " +
      "pansharpening, temporal averaging, computation of the five biophysical indices " +
      "(SAVI, EVI, NDWI, BAI, BMI), and fusion of the sources into a single image to " +
      "classify. Thomas André developed the Préd'Archéo QGIS extension in parallel, " +
      "automating the classification and index calculation; results analysis was carried " +
      "out together.",
    tools: ["qgis", "python"],
    hasVideo: false,
    image: "assets/images/projects/classification-occupation-sol.jpg",
    links: [{ href: "https://gitlab.com/Thomas.Andre.Archgeo/pred_archeo.git", labelKey: "project.gitlab" }],
    interactive: "pred-archeo"
  },

  "recul-trait-cote": {
    order: 6,
    country: "france",
    countryLabel: "France",
    category: "academique",
    title: "Bâtiments menacés par le recul du trait de côte",
    titleEn: "Buildings threatened by coastline retreat",
    subtitle: "Master 2 IGAST, en équipe avec Lucie Bai et Maëlle Klein, pour Generali France",
    subtitleEn: "IGAST Master's, with Lucie Bai and Maëlle Klein, for Generali France",
    period: "2024 - 2025",
    description:
      "Étude commandée par l'assureur Generali France pour cartographier les bâtiments " +
      "menacés par le recul du trait de côte et la submersion marine aux horizons 2030, " +
      "2050 et 2100. La méthode, inspirée de celle du CEREMA, combine un recul " +
      "tendanciel (calculé à partir des traits de côte anciens et récents de Géolittoral) " +
      "et un recul événementiel (lié aux tempêtes), pour estimer une zone tampon de risque " +
      "autour du littoral. Deux départements aux littoraux très différents, la Gironde " +
      "(côte sableuse) et le Finistère (côte rocheuse), ont servi de cas d'étude pour " +
      "tester la robustesse de la méthode.",
    descriptionEn:
      "Study commissioned by the insurer Generali France to map buildings " +
      "threatened by coastline retreat and marine flooding for the 2030, " +
      "2050 and 2100 horizons. The method, inspired by CEREMA's approach, " +
      "combines a trend-based retreat (calculated from past and recent " +
      "coastlines from Géolittoral) with an event-based retreat (linked to " +
      "storms), to estimate a coastal risk buffer zone. Two départements " +
      "with very different coastlines, Gironde (sandy coast) and Finistère " +
      "(rocky coast), served as case studies to test the method's robustness.",
    role:
      "Travail en équipe de trois sur l'ensemble de la chaîne de traitement QGIS et " +
      "PostGIS : préparation des données Géolittoral et BD TOPO, calcul du recul du " +
      "trait de côte, identification des bâtiments impactés et rédaction de la note " +
      "technique permettant de reproduire les résultats.",
    roleEn:
      "Teamwork of three across the entire QGIS and PostGIS processing chain: " +
      "preparing Géolittoral and BD TOPO data, computing coastline retreat, " +
      "identifying impacted buildings, and writing the technical note needed " +
      "to reproduce the results.",
    tools: ["qgis", "sgbd", "python"],
    hasVideo: false,
    image: "assets/images/projects/projection-gironde.jpg",
    interactive: null
  },

  "capa-taro-chim": {
    order: 3,
    country: "france",
    countryLabel: "France",
    category: "academique",
    title: "Capa, Taro &amp; Chim, les inédits de la guerre d&rsquo;Espagne",
    titleEn: "Capa, Taro &amp; Chim, unseen photographs of the Spanish Civil War",
    subtitle: "Module Culture &amp; Métiers du Web, en équipe de cinq, pour les Archives nationales (Emilie Charrier et Maïwenn Bourdic)",
    subtitleEn: "Culture &amp; Web Professions module, team of five, for the French National Archives (Emilie Charrier and Maïwenn Bourdic)",
    period: "Octobre 2025 - 2027",
    description:
      "Site web et dispositif tactile conçus pour les Archives nationales, à l'occasion de " +
      "l'exposition Capa, Taro &amp; Chim, les inédits de la guerre d'Espagne (hôtel de Soubise, " +
      "2027, puis collection permanente du site de Saint-Denis). Le projet s'appuie sur un fonds " +
      "de plus de 4 000 photographies issues des carnets des trois photographes, accompagnées " +
      "d'une base de métadonnées décrivant lieux, dates, événements et mots-matière. Développé " +
      "en React, le site permet d'explorer la collection par carnet, par lieu, par photographe, " +
      "par reportage ou via une frise chronologique des grands événements de la guerre civile " +
      "espagnole.",
    descriptionEn:
      "Website and touchscreen device designed for the French National Archives, for the " +
      "exhibition Capa, Taro &amp; Chim, unseen photographs of the Spanish Civil War (Hôtel de " +
      "Soubise, 2027, later moving to the permanent collection at the Saint-Denis site). The " +
      "project draws on a collection of over 4,000 photographs from the three photographers' " +
      "notebooks, paired with a metadata database describing locations, dates, events and " +
      "subject keywords. Built with React, the site lets visitors explore the collection by " +
      "notebook, by location, by photographer, by photo story, or through a timeline of the " +
      "Spanish Civil War's major events.",
    role:
      "Conception et développement du module de navigation par carte et par lieu : interface " +
      "cartographique interactive permettant d'explorer les reportages et images associés à " +
      "chaque lieu, avec un affinage par province puis par ville ou quartier, à partir des " +
      "coordonnées géographiques de la base de métadonnées.",
    roleEn:
      "Design and development of the map and location navigation module: an interactive map " +
      "interface for exploring the photo stories and images linked to each location, with " +
      "drill-down from province to city or neighborhood, based on the geographic coordinates " +
      "in the metadata database.",
    tools: ["react", "javascript"],
    hasVideo: false,
    image: "assets/images/projects/accueil-site.png",
    links: [{ href: "https://www.archives-nationales.culture.gouv.fr/vv/capa-taro-chim/", labelKey: "project.visitsite" }],
    interactive: null
  },

  // ---------- CORÉE DU SUD ----------
  "jeux-coreens": {
    order: 4,
    country: "coree",
    countryLabel: "Corée du Sud",
    countryLabelEn: "South Korea",
    category: "academique",
    title: "Quand la Corée Joue, documentaire interactif sur les jeux coréens",
    titleEn: "When Korea Plays, an interactive documentary on Korean games",
    subtitle: "Web-documentaire interactif, projet de Master en équipe de dix",
    subtitleEn: "Interactive web-documentary, Master's team project of ten",
    period: "2025 - 2026",
    description:
      "Quand la Corée Joue est un web-documentaire interactif explorant les jeux traditionnels " +
      "et populaires coréens à travers les lieux où l'on y joue, plutôt que par chronologie. " +
      "L'utilisateur incarne un personnage parmi quatre générations, chacune associée à un " +
      "trigramme du Taegeukgi, et progresse sur un plateau de jeu 3D isométrique où chaque " +
      "génération débloque des chapitres associant mini-documentaires vidéo et citations à " +
      "collecter. Une page « Où l'on joue » propose en parallèle un parcours narratif en 2.5D " +
      "au scroll, qui bascule en véritable 3D temps réel dans sa séquence finale. Réalisé en " +
      "équipe de dix dans le cadre d'un Master, avec une direction artistique cohérente " +
      "(palette orange, lime, lavande, bleu) visant un rendu sobre et documentaire.",
    descriptionEn:
      "When Korea Plays is an interactive web-documentary exploring traditional and popular " +
      "Korean games through the places where they are played, rather than through chronology. " +
      "The user picks a character from one of four generations, each tied to a Taegeukgi " +
      "trigram, and progresses across an isometric 3D game board where each generation " +
      "unlocks chapters pairing short documentary videos with quotes to collect. A \"Where We " +
      "Play\" page offers in parallel a scroll-driven 2.5D narrative journey, switching to " +
      "real-time 3D for its final sequence. Built by a team of ten as part of a Master's " +
      "program, with a consistent art direction (orange, lime, lavender, blue palette) aiming " +
      "for a sober, documentary feel.",
    role:
      "Au sein d'une équipe de quatre développeurs, j'ai conçu et développé la page « À propos » " +
      "(présentation de l'équipe, mise en page façon cartes à jouer) et la page « Liste des " +
      "jeux » (carousel infini de fiches, recherche). J'ai aussi contribué aux réflexions de " +
      "conception des autres pages (parcours narratif, plateau 3D, direction artistique) avec " +
      "Francky R. et Babylone I.",
    roleEn:
      "Within a team of four developers, I designed and built the \"About\" page (team " +
      "presentation, playing-card-style layout) and the \"Game list\" page (infinite card " +
      "carousel, search). I also contributed to design discussions on the site's other pages " +
      "(narrative journey, 3D board, art direction) with Francky R. and Babylone I.",
    tools: ["react", "javascript", "html-css"],
    hasVideo: false,
    image: "assets/images/projects/noli.png",
    links: [{ href: "https://noli.mastercmw.com/home", labelKey: "project.visitsite" }],
    interactive: null
  }

};
