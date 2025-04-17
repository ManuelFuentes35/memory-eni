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
const associListeEtMemory = {
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
let listeChoisie = associListeEtMemory[choixMemory];

let quantite = eval(choixTaille)/2;

console.log("choixMemory:", choixMemory);
console.log(listeChoisie);
console.log(choixTaille);
console.log(quantite)



const pisteJeux = document.getElementById("pisteJeux");


///////////////////////////////////////



// // Dupliquer pour créer des paires
// let paires = [...listeChoisie.slice(0, 6), ...listeChoisie.slice(0, 6)]; // ici, 6 paires, à adapter
// melangerTableau(paires);

// // Ajouter les cartes au plateau
// paires.forEach((imgOriginale) => {
//   const img = document.createElement("img");
//   img.src = "img/dos.png";
//   img.classList.add("carte");

//   // Stocker la vraie source dans un attribut data
//   img.dataset.src = imgOriginale.src;

//   img.addEventListener("click", () => {
//     img.src = img.dataset.src;
//     // Logique de comparaison à ajouter ici
//   });

//   pisteJeux.appendChild(img);
// });

// // Fonction pour mélanger
// function melangerTableau(tableau) {
//   for (let i = tableau.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [tableau[i], tableau[j]] = [tableau[j], tableau[i]];
//   }
// }

// //lance une partie et genere le plateau
// let lancer = document.getElementById("lancer");
// lancer.addEventListener("click", function () {
//   genererPlateau();
// });
