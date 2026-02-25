// 1. Définition des contenus
const traductions = {
    fr: {
        titre: "Bienvenue sur mon portfolio",
        description: "Je suis un développeur passionné par le code.",
        "projet-titre": "Mes Projets",
        "projet-texte": "Découvrez mes dernières réalisations ci-dessous.",
        btn: "English"
    },
    en: {
        titre: "Welcome to my portfolio",
        description: "I am a developer passionate about coding.",
        "projet-titre": "My Projects",
        "projet-texte": "Check out my latest work below.",
        btn: "Français"
    }
};

let langueActuelle = 'fr';
const bouton = document.querySelector("#btn-translate");

// 2. Fonction de traduction
function traduire() {
    // On bascule la langue
    langueActuelle = (langueActuelle === 'fr') ? 'en' : 'fr';
    
    const dictionnaire = traductions[langueActuelle];

    // On parcourt les clés de l'objet (qui sont nos IDs HTML)
    Object.keys(dictionnaire).forEach(function(cle) {
        const element = document.querySelector("#" + cle);
        if (element) {
            element.innerHTML = dictionnaire[cle];
        }
    });

    // On change aussi le texte du bouton
    bouton.innerHTML = dictionnaire.btn;
}

// 3. Écouteur d'événement
bouton.addEventListener("click", traduire);