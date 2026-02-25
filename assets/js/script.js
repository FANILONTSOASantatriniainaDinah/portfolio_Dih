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

function traduire() {
    langueActuelle = (langueActuelle === 'fr') ? 'en' : 'fr';
    const dictionnaire = traductions[langueActuelle];

    Object.keys(dictionnaire).forEach(function(cle) {
        const element = document.querySelector("#" + cle);
        if (element) {
            element.innerHTML = dictionnaire[cle];
        }
    });
    bouton.innerHTML = dictionnaire.btn;
}

bouton.addEventListener("click", traduire);


// --- AJOUT DE LA PARTIE TP VIDEO ---

const v1 = document.querySelector("#v1");
//const v2 = document.querySelector("#v2");
const btnPlay = document.querySelector("#play");
const masque = document.querySelector("#mask");

// Q3: Lancer les deux vidéos au clic 
btnPlay.addEventListener("click", function() {
    v1.play();
   //v2.play();
});

// Q4: Effet de fondu au blanc 
v1.addEventListener("play", function() {
    if (v1.currentTime < 1) {
        let opacite = 1;
        let videoTimer = setInterval(function() {
            opacite -= 0.05; 
            masque.style.opacity = opacite;

            if (opacite <= 0) {
                clearInterval(videoTimer);
                masque.style.display = "none";
            }
        }, 50); // Changement toutes les 50ms [cite: 24]
    }
});

// Q6: Affichage console du temps écoulé 
setInterval(function() {
    if (!v1.paused) {
        console.log("Temps écoulé : " + v1.currentTime.toFixed(2));
    }
}, 50);