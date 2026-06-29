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
    category: "professionnel",
    title: "MADATLAS, pratiques genrées",
    titleEn: "MADATLAS, gendered practices",
    subtitle: "Cartographie des sanitaires du campus, chantier École à Fianarantsoa",
    subtitleEn: "Mapping campus sanitation facilities, field-school in Fianarantsoa",
    period: "2023 - 2024",
    description:
      "MADATLAS est un projet de cartographie participative mené dans le cadre d'un chantier " +
      "école, à l'université de Fianarantsoa. Mon rôle principal a consisté à cartographier " +
      "les toilettes du campus : leur localisation, leur état, le genre des usagers et le type " +
      "d'installation. Nous avons mené une enquête de terrain auprès des étudiants avec " +
      "KoboCollect et KoboToolbox, avant de nettoyer les données récoltées et d'en tirer les " +
      "analyses cartographiques. La carte présentée ici est ma toute première réalisation " +
      "cartographique : une proposition d'implantation de toilettes publiques et de " +
      "réhabilitation des sanitaires existants. J'ai eu l'honneur d'assister à la restitution " +
      "finale du projet MADATLAS en France, les 19 et 20 mars 2026.",
    descriptionEn:
      "MADATLAS is a participatory mapping project carried out as part of a field school at " +
      "the University of Fianarantsoa. My main role was to map the campus' sanitation " +
      "facilities: their location, condition, the gender of their users and the type of " +
      "facility. We carried out a field survey among students using KoboCollect and " +
      "KoboToolbox, then cleaned the collected data and built the mapping analysis from it. " +
      "The map shown here is my very first cartographic work: a proposal for new public " +
      "toilets and the rehabilitation of existing facilities. I had the honor of attending " +
      "the MADATLAS project's final presentation in France, on March 19-20, 2026.",
    role:
      "Cartographie des toilettes du campus (localisation, état, genre des usagers, type " +
      "d'installation), conception et conduite de l'enquête de terrain avec KoboCollect et " +
      "KoboToolbox, nettoyage des données collectées, puis réalisation des cartes finales " +
      "restituant les résultats de l'étude.",
    roleEn:
      "Mapping the campus' sanitation facilities (location, condition, gender of users, type " +
      "of facility), designing and running the field survey with KoboCollect and KoboToolbox, " +
      "cleaning the collected data, and producing the final maps presenting the study's " +
      "results.",
    tools: ["qgis"],
    hasVideo: false,
    image: "assets/images/projects/Toilette_publique.png",
    links: [{ href: "https://www.madatlas.mg/", labelKey: "project.visitsite" }]
  },

  "ranosoa": {
    order: 9,
    country: "madagascar",
    countryLabel: "Madagascar",
    category: "professionnel",
    title: "Projet RANOSOA (pompe solaire)",
    titleEn: "RANOSOA project (solar pump)",
    subtitle: "Accompagnatrice d'une stagiaire de fin d'études de Sherbrooke (Canada)",
    subtitleEn: "Mentor for an end-of-studies intern from Sherbrooke (Canada)",
    period: "Août - Novembre 2023",
    description:
      "RANOSOA est un projet de mise en place d'une pompe à eau solaire (forage et panneaux " +
      "photovoltaïques) pour une communauté rurale malgache. J'ai accompagné Sandrine, " +
      "étudiante stagiaire de fin d'études venue de Sherbrooke (Canada), tout au long du " +
      "chantier : du début du forage jusqu'à l'inauguration de la pompe. Un échange riche et " +
      "pluridisciplinaire, où mon regard de géomaticienne a croisé le génie civil et " +
      "l'électronique des stagiaires canadiens.",
    descriptionEn:
      "RANOSOA is a project to install a solar-powered water pump (borehole and " +
      "photovoltaic panels) for a rural Malagasy community. I mentored Sandrine, an " +
      "end-of-studies intern from Sherbrooke (Canada), throughout the entire build: from the " +
      "start of the borehole drilling to the pump's inauguration. A rich, multidisciplinary " +
      "exchange, where my geomatics background met the Canadian interns' civil engineering " +
      "and electronics expertise.",
    role:
      "Présente 3 jours par semaine sur le chantier, j'observais l'avancement avec Sandrine et " +
      "rédigeais mes retours pour appuyer son mémoire de fin d'études. Cet accompagnement m'a " +
      "fait découvrir le vocabulaire du génie civil, de la construction et de l'électronique, " +
      "au sein d'une équipe pluridisciplinaire. J'ai aussi participé à l'école d'été qui a " +
      "suivi, consacrée à l'étude pratique des circuits électroniques et du photovoltaïque, et " +
      "j'ai reçu deux certificats : un pour ma participation au projet, l'autre pour cette " +
      "école d'été.",
    roleEn:
      "Present on site three days a week, I followed the build's progress together with " +
      "Sandrine and wrote up my observations to support her end-of-studies thesis. This " +
      "mentoring introduced me to the vocabulary of civil engineering, construction and " +
      "electronics within a multidisciplinary team. I also took part in the summer school " +
      "that followed, focused on hands-on study of electronic circuits and photovoltaics, and " +
      "received two certificates: one for my participation in the project, the other for this " +
      "summer school.",
    tools: ["qgis"],
    hasVideo: false,
    image: "assets/images/projects/Ranosoa.jpg",
    links: [{ href: "https://fianaralab.fr/ranosoa.html", labelKey: "project.visitsite" }]
  },

  "app-restaurants-parcs": {
    order: 10,
    country: "madagascar",
    countryLabel: "Madagascar",
    category: "academique",
    title: "Application restaurants &amp; parcs d'attractions",
    titleEn: "Restaurants &amp; amusement parks app",
    subtitle: "Premier projet React, en autonomie",
    subtitleEn: "First React project, self-directed",
    period: "2022 - 2023",
    description:
      "Mon tout premier projet en React, réalisé en autonomie dans le cadre d'un module de " +
      "webmapping. L'application permet de localiser des restaurants et des parcs " +
      "d'attractions dans une ville, en s'appuyant sur l'API Google pour récupérer images, " +
      "coordonnées, avis et notes de chaque lieu.",
    descriptionEn:
      "My very first React project, built independently as part of a webmapping module. The " +
      "application locates restaurants and amusement parks in a city, relying on the Google " +
      "API to fetch each place's images, coordinates, reviews and ratings.",
    role:
      "Développement complet du front-end avec React, intégration de l'API Google pour " +
      "récupérer et afficher les images, coordonnées, avis et notes de chaque lieu sur la " +
      "carte interactive.",
    roleEn:
      "Full front-end development with React, integrating the Google API to fetch and " +
      "display each place's images, coordinates, reviews and ratings on the interactive map.",
    tools: ["react", "javascript"],
    hasVideo: false,
    image: "assets/images/projects/app-restaurants-parcs-illustration.svg"
    // Pas de dépôt public : le code n'a pas pu être mis sur GitHub pour ce
    // projet. Image de couverture générée (illustration), faute de capture
    // d'écran réelle disponible.
  },

  "site-itdc-mada": {
    order: 11,
    country: "madagascar",
    countryLabel: "Madagascar",
    category: "professionnel",
    title: "Site vitrine ITDC Mada",
    titleEn: "ITDC Mada showcase website",
    subtitle: "Stage L2, reprise d'un site existant sous CodeIgniter 3",
    subtitleEn: "Undergraduate internship, taking over an existing CodeIgniter 3 site",
    period: "Avril - Juillet 2020",
    description:
      "Le site vitrine de l'entreprise ITDC Mada existait déjà lorsqu'on m'a confié ce projet, " +
      "lors de mon premier stage (L2) au sein de l'université. Il fonctionnait avec MySQL " +
      "comme base de données et CodeIgniter 3 comme framework, alors que nous n'avions encore " +
      "étudié que les bases de PHP et JavaScript en licence, sans framework.",
    descriptionEn:
      "The ITDC Mada showcase website already existed when this project was entrusted to me " +
      "during my first internship (2nd year of bachelor's) through the university. It ran on " +
      "MySQL with the CodeIgniter 3 framework, while we had so far only studied plain PHP and " +
      "JavaScript in our coursework, without any framework.",
    role:
      "Reprise et compréhension du code existant, puis adaptation à la technologie CodeIgniter " +
      "3 et à MySQL malgré l'absence de cours sur les frameworks à ce stade de la licence. Ma " +
      "tâche principale a été d'optimiser la responsivité du site. Le site a depuis été repris " +
      "et entièrement remanié par d'autres étudiants.",
    roleEn:
      "Took over and made sense of the existing code, then adapted to the CodeIgniter 3 " +
      "framework and MySQL despite not having studied any framework yet at that stage of the " +
      "degree. My main task was optimizing the site's responsiveness. The site has since been " +
      "taken over and fully reworked by other students.",
    tools: ["php", "mysql"],
    hasVideo: false,
    image: "assets/images/projects/site-itdc-mada-illustration.svg",
    // Image de couverture générée (illustration) : le projet d'origine n'a
    // pas pu être relancé pour en capturer un vrai rendu.
    links: [{ href: "https://itdcmada.mg/", labelKey: "project.visitsite" }]
  },

  "chu-fianarantsoa": {
    order: 12,
    country: "madagascar",
    countryLabel: "Madagascar",
    category: "academique",
    title: "Application de gestion hospitalière, CHU Andrainjato",
    titleEn: "Hospital management application, CHU Andrainjato",
    subtitle: "Partenariat EMIT &amp; CHU, en équipe de quatre",
    subtitleEn: "EMIT & hospital partnership, team of four",
    period: "2023 - 2024",
    description:
      "Application de gestion hospitalière développée pour le CHU Andrainjato de Fianarantsoa, " +
      "à l'occasion de la célébration des 10 ans de l'hôpital, dans le cadre d'un partenariat " +
      "entre l'EMIT et l'établissement. Elle permet de gérer les inventaires de matériel par " +
      "département, bloc et bureau de l'hôpital, le suivi des entrées/sorties, ainsi que la " +
      "prise de rendez-vous en ligne, sur le principe de Doctolib.",
    descriptionEn:
      "Hospital management application developed for the Andrainjato University Hospital " +
      "(CHU) in Fianarantsoa, for the hospital's 10th anniversary, as part of a partnership " +
      "between EMIT and the institution. It manages equipment inventories by department, " +
      "ward and office, tracks stock entries/exits, and provides online appointment booking, " +
      "Doctolib-style.",
    role:
      "En équipe de quatre, je me suis concentrée sur le module de comptabilité matière " +
      "(gestion des inventaires et des entrées/sorties de matériel), tandis que les trois " +
      "autres membres assuraient le module de prise de rendez-vous en ligne. Développé avec " +
      "Laravel et PostgreSQL.",
    roleEn:
      "Within a team of four, I focused on the materials accounting module (inventory " +
      "management and stock entries/exits), while the three other members handled the online " +
      "appointment booking module. Built with Laravel and PostgreSQL.",
    tools: ["php", "sgbd"],
    hasVideo: false,
    image: "assets/images/projects/CHU.png"
    // Lien vers le site du CHU à ajouter dès que l'URL exacte est connue.
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
    title: "Diagnostic territorial &amp; potentiels fonciers, stage M2 chez atopia",
    titleEn: "Territorial diagnosis &amp; land potential, M2 internship at atopia",
    subtitle: "Stage de fin d'études, pôle géomatique d'atopia (Paris 11e)",
    subtitleEn: "End-of-studies internship, atopia's geomatics team (Paris 11th)",
    period: "Avril - Septembre 2025",
    description:
      "Stage de fin d'études au sein du pôle géomatique d'atopia, agence-conseil en " +
      "urbanisme, paysage et architecture (Paris 11e, fondée en 2014). Mission articulée " +
      "autour du diagnostic territorial et de l'optimisation des traitements, analyses et " +
      "cartographies de données spatialisées, pour des études de SCoT et de PLUi menées sur " +
      "plusieurs territoires (SCoT Melun Val-de-Seine, CA Saint-Quentin-en-Yvelines, CC " +
      "Caux-Austreberthe, SCoT du Pays de Thiérache). Mon travail a porté sur " +
      "l'identification et la qualification des « dents creuses » : ces parcelles non " +
      "bâties au sein du tissu urbain existant, dont la mobilisation répond aux objectifs de " +
      "sobriété foncière (Zéro Artificialisation Nette) sans consommer d'espaces naturels ou " +
      "agricoles.",
    descriptionEn:
      "End-of-studies internship within atopia's geomatics team, an urban planning, " +
      "landscape and architecture consultancy (Paris 11th arrondissement, founded in 2014). " +
      "The mission centered on territorial diagnosis and optimizing the processing, analysis " +
      "and mapping of spatial data, for SCoT and PLUi studies carried out across several " +
      "territories (Melun Val-de-Seine SCoT, Saint-Quentin-en-Yvelines, Caux-Austreberthe, " +
      "Pays de Thiérache SCoT). My work focused on identifying and qualifying \"dents " +
      "creuses\" (vacant lots): undeveloped plots within the existing urban fabric, whose " +
      "mobilization supports land-use restraint goals (Zero Net Land Take) without " +
      "consuming natural or agricultural land.",
    role:
      "J'ai construit une méthode mixte (CEREMA, OCS-GE, cadastre) pour délimiter l'enveloppe " +
      "urbaine de chaque territoire, puis qualifié les dents creuses brutes (filtres " +
      "morphologiques : compacité, surface, taux de bâti) avant de les croiser avec les " +
      "risques naturels, zonages écologiques et prescriptions d'urbanisme pour obtenir un " +
      "potentiel net mobilisable. J'ai élargi cette approche aux zones d'activités " +
      "économiques (Thiérache) et aux parkings de surface (Melun Val-de-Seine, classés selon " +
      "leur potentiel de densification, de renaturation ou de production d'énergie). " +
      "Traitements sous QGIS, partage des résultats intermédiaires avec les chefs de projet " +
      "via Felt, et synthèses statistiques sous Excel.",
    roleEn:
      "I built a mixed method (CEREMA, OCS-GE, land registry) to delineate the urban " +
      "envelope of each territory, then qualified raw vacant lots (morphological filters: " +
      "compactness, area, building ratio) before cross-referencing them with natural " +
      "hazards, ecological zoning and planning regulations to obtain a net mobilizable " +
      "potential. I extended this approach to economic activity zones (Thiérache) and " +
      "surface parking lots (Melun Val-de-Seine, classified by their potential for " +
      "densification, renaturation or energy production). Processing under QGIS, sharing " +
      "interim results with project managers via Felt, and statistical summaries in Excel.",
    tools: ["qgis"],
    hasVideo: false,
    image: "assets/images/projects/atopia-diagnostic-illustration.svg",
    links: [{ href: "https://atopiaconseil.com/", labelKey: "project.visitsite" }]
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
      "DORA est un observatoire cartographique et statistique développé pour appuyer les " +
      "diagnostics territoriaux d'atopia. L'outil permet d'explorer des données géographiques, " +
      "démographiques, sociales, économiques, agricoles et environnementales à différentes " +
      "échelles, notamment communale et IRIS, afin de produire rapidement des cartes " +
      "interactives, des synthèses territoriales et des supports d'analyse exploitables dans " +
      "les études. Une première version avait été développée par Maggie Mateu lors de son " +
      "stage, mais elle avait été interrompue après un crash de la base de données.",
    descriptionEn:
      "DORA is a cartographic and statistical observatory built to support atopia's " +
      "territorial diagnostics. The tool makes it possible to explore geographic, " +
      "demographic, social, economic, agricultural and environmental data at different " +
      "scales, in particular municipal and IRIS level, to quickly produce interactive maps, " +
      "territorial summaries and analysis material usable directly in studies. An initial " +
      "version had been built by Maggie Mateu during her internship, but was interrupted " +
      "after a database crash.",
    role:
      "J'ai repris l'outil à partir de ce socle existant pour en assurer la remise en service, " +
      "la refonte technique et l'évolution fonctionnelle : reconstruction de la connexion aux " +
      "données, consolidation de l'architecture sous R Shiny, rétablissement de l'exploitation " +
      "de la base PostgreSQL/PostGIS, refonte de l'interface utilisateur, hébergement sur un " +
      "serveur Raspberry Pi pour une utilisation stable et continue, et développement de " +
      "nouveaux modules (cartographie interactive, analyse temporelle, synthèse statistique, " +
      "export). J'ai aussi ajouté une gestion de session et remplacé la saisie manuelle des " +
      "codes INSEE par un identifiant unique lié au numéro de mission. La version actuelle " +
      "transforme DORA en outil métier opérationnel, capable de fiabiliser la production de " +
      "diagnostics territoriaux et d'accélérer la lecture spatiale des enjeux pour les équipes " +
      "projet.",
    roleEn:
      "I took over the existing tool to bring it back online, rebuild it technically and " +
      "extend its features: reconstructing the data connection, consolidating the R Shiny " +
      "architecture, restoring the PostgreSQL/PostGIS database, redesigning the user " +
      "interface, hosting it on a Raspberry Pi server for stable, continuous use, and " +
      "building new modules (interactive mapping, time-series analysis, statistical " +
      "summaries, export). I also added session management and replaced manual INSEE code " +
      "entry with a single identifier tied to the mission number. The current version turns " +
      "DORA into an operational business tool, able to make territorial diagnostics more " +
      "reliable and speed up spatial analysis for project teams.",
    tools: ["r", "shiny", "javascript", "html-css", "sgbd", "git"],
    hasVideo: false,
    heroVideo: "assets/images/DORA_SCREEN.mp4",
    heroVideoPoster: "",
    interactive: null
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
