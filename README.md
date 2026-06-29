# Portfolio — Dinah Fanilontsoa

Portfolio personnel de **FANILONTSOA Santatriniaina Dinah**, géomaticienne cartographe & développeuse. Site statique (HTML / CSS / JS, sans framework ni dépendance), pensé comme un parcours interactif à travers mes expériences à Madagascar, à La Réunion, en France et en Corée du Sud.

## Pages du site

| Page | Contenu |
|---|---|
| `index.html` | Accueil : présentation, carte interactive des 4 territoires (clic sur un pays → projets associés), section Compétences |
| `projet.html?slug=...` | Détail d'un projet (description, rôle, outils, image/vidéo, liens), gabarit unique réutilisé pour tous les projets via `assets/js/project-data.js` |
| `formation.html` | Parcours académique (frise du lycée au Master 2), centres d'intérêt & engagement, nuage de mots des notions acquises (tiré du CV) |
| `mentions-legales.html` | Mentions légales, hébergement, usage d'outils d'IA |

## Fonctionnalités clés

- **Parcours interactif** : carte cliquable des territoires, avec bulles-satellites menant aux projets
- **Grille « Tous les projets »** filtrable par catégorie, pays et date
- **Bilingue FR / EN**, basculable à tout moment (mémorisé entre les visites)
- **Responsive** : menu mobile dédié, mise en page adaptée du mobile au grand écran
- **Accessibilité** : respect de `prefers-reduced-motion`, navigation au clavier, attributs ARIA

## Stack technique

HTML5, CSS3 (variables, animations, sans préprocesseur), JavaScript vanilla (sans build, sans dépendance npm). Hébergement : GitHub Pages.

## Consulter le site

Ouvrir `index.html` dans un navigateur (aucune installation ni serveur requis).

## Contenu

Tous les textes des projets sont basés sur des expériences réelles (stages, projets académiques, alternance) ; le détail complet (description, rôle, outils) est consultable sur la page de chaque projet.
