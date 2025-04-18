//liste scrabble
const listeScrabble = [];

for (let i = 1; i <= 26; i++) {
  const img = document.createElement("img");
  img.src = `ressources/alphabet-scrabble/${i}.png`;
  listeScrabble.push(img);
}

// liste animaux
const listeAnimaux = [];

for (let i = 1; i <= 27; i++) {
  const img = document.createElement("img");
  img.src = `ressources/animaux/${i}.webp`;
  listeAnimaux.push(img);
}

// liste animaux animes
const listeAnimauxAnimes = [];

for (let i = 1; i <= 8; i++) {
  const img = document.createElement("img");
  img.src = `ressources/animauxAnimes/${i}.webp`;
  listeAnimauxAnimes.push(img);
}

//liste animaux domestiques
const listeAnimauxDomestiques = [];

for (let i = 1; i <= 10; i++) {
  const img = document.createElement("img");
  img.src = `ressources/animauxdomestiques/${i}.jpg`;
  listeAnimauxDomestiques.push(img);
}

// liste chiens
const listeChiens = [];

for (let i = 1; i <= 23; i++) {
  const img = document.createElement("img");
  img.src = `ressources/chiens/${i}.webp`;
  listeChiens.push(img);
}

// liste dinosaures
const listeDinosaures = [];

for (let i = 1; i <= 10; i++) {
  const img = document.createElement("img");
  img.src = `ressources/dinosaures/${i}.jpg`;
  listeDinosaures.push(img);
}

// liste dinosaures avec nom
const listeDinosauresAvecNom = [];

for (let i = 1; i <= 10; i++) {
  const img = document.createElement("img");
  img.src = `ressources/dinosauresAvecNom/${i}.jpg`;
  listeDinosauresAvecNom.push(img);
}

// liste legume
const listeLegume = [];

for (let i = 1; i <= 6; i++) {
  const img = document.createElement("img");
  img.src = `ressources/memory-legume/${i}.svg`;
  listeLegume.push(img);
}

//création tableau des différentes listes et association des listes au nom des choix
const associeListeEtMemory = {
  scrabble: listeScrabble,
  animaux: listeAnimaux,
  animauxAnimes: listeAnimauxAnimes,
  animauxDomestiques: listeAnimauxDomestiques,
  chiens: listeChiens,
  dinosaures: listeDinosaures,
  dinosauresAvecNom: listeDinosauresAvecNom,
  legume: listeLegume,
};

//récupération des choix stocker + recherche dans la liste
const choixMemory = JSON.parse(localStorage.getItem("choixMemory"));
const choixTaille = JSON.parse(localStorage.getItem("choixTaille"));
let listeChoisie = associeListeEtMemory[choixMemory];

const [colonnes, lignes] = choixTaille.split("*").map(Number);

let quantite = (colonnes * lignes) / 2;

console.log("choixMemory:", choixMemory);
console.log(listeChoisie);
console.log(choixTaille);
console.log(quantite);

//selection aléatoire des cartes du jeux
const copieListe = [...listeChoisie];
const selection = [];

function choixImageAleatoire() {
  for (let i = 0; i < quantite; i++) {
    if (copieListe.length === 0) {
      break;
    }
    const choixIndexImage = Math.floor(Math.random() * copieListe.length);
    const imageCopie = copieListe.splice(choixIndexImage, 1)[0];
    selection.push(imageCopie);
  }
  return selection;
}

choixImageAleatoire();

console.log("Sélection aléatoire :", selection);

//création des paires de cartes
let doublons = [];
function doubleSelection() {
  doublons.push(...selection);
  doublons.push(...selection);
  return doublons;
}

doubleSelection();

console.log("sélection final ;", doublons);

//mélange des cartes pour le jeux
function melangeur(doublons) {
  for (let i = doublons.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [doublons[i], doublons[j]] = [doublons[j], doublons[i]];
  }
  return doublons;
}

const cartesMelangees = melangeur(doublons);

console.log("cartes mélangées :", cartesMelangees);

///////////////////////////////////////////////////////////////////

// Sélectionner l'élément qui va contenir les cartes
const pisteJeux = document.getElementById("pisteJeux");

//tailles de grille pour les cartes
pisteJeux.style.gridTemplateColumns = `repeat(${colonnes}, 1fr)`;
pisteJeux.style.gridTemplateRows = `repeat(${lignes}, 1fr)`;

let compteur = document.getElementById("compteur");
// Variables globales pour gérer le jeu
let premiereCarte = null;
let deuxiemeCarte = null;
let verouillage = false;
let count = 0;

// Fonction pour réinitialiser les cartes sélectionnées
function resetCartes() {
  premiereCarte = null;
  deuxiemeCarte = null;
  verouillage = false;
}

// Fonction pour afficher les cartes
function afficherCartes(cartes) {
  // Pour chaque carte dans le tableau cartesMelangees
  cartes.forEach((carte, index) => {
    // Créer un élément div pour la carte
    const carteElement = document.createElement("div");
    carteElement.classList.add("carte");

    // Création du recto (face visible au départ)
    const recto = document.createElement("div");
    recto.classList.add("recto");
    recto.innerHTML = '<img src="ressources/dos.png" alt="dos des cartes" id="doscartes">'; // ou mets une icône, un emoji, etc.

    // Création du verso (l'image à révéler)
    const verso = document.createElement("div");
    verso.classList.add("verso");

    const imgElement = document.createElement("img");
    imgElement.src = carte.src;
    imgElement.alt = "Carte";

    verso.appendChild(imgElement);

    // Ajout des faces à la carte
    carteElement.appendChild(recto);
    carteElement.appendChild(verso);

    // Ajouter un écouteur d'événement pour gérer le clic
    carteElement.addEventListener("click", function () {
      if (verouillage || carteElement.classList.contains("active")) {
        return;
      }

      carteElement.classList.toggle("active");

      if (!premiereCarte) {
        premiereCarte = carteElement;
      } else {
        deuxiemeCarte = carteElement;
        verouillage = true;

        var img1 = premiereCarte.querySelector(".verso img").src;
        var img2 = deuxiemeCarte.querySelector(".verso img").src;

        if (img1 !== img2) {
          setTimeout(function () {
            premiereCarte.classList.remove("active");
            deuxiemeCarte.classList.remove("active");
            resetCartes();
          }, 3000);
          count++;
        } else {
          resetCartes();
          count++;
        }
        // mettre à jour le compteur
        compteur.innerText = "nombre de coup: " + count;
      }
    });

    // Ajouter la carte au conteneur
    pisteJeux.appendChild(carteElement);
  });
}

// Afficher les cartes mélangées
afficherCartes(cartesMelangees);


