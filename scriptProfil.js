// Récupère le mail de la page de connexion
let mail = document.getElementById("mail");
const mailStocker = sessionStorage.getItem("mail");
if (mailStocker) mail.innerText = mailStocker;

// Récupère les infos stockées pour extraire le pseudo
let nom = document.getElementById("nom");
const listeinfos = JSON.parse(localStorage.getItem("listeinfos"));

const user = listeinfos.find(function (user) {
  return user.mail === mailStocker;
});

if (user) {
  nom.innerText = user.pseudo;
}

//stockage choix du type de memory dans le LocalS

let choixMemory = document.getElementById("listeMemory");
choixMemory.addEventListener("click", stockage);

function stockage() {
  localStorage.setItem("choixMemory", JSON.stringify(choixMemory.value));
}

//changement d'image en fonction du choix de Memory
let imageMemory = document.getElementById("imageMemory");
choixMemory.addEventListener("click", selectImage);

function selectImage() {
  if (choixMemory.value === "scrabble") {
    imageMemory.src = "ressources/alphabet-scrabble/memory_detail_scrabble.png";
  } else if (choixMemory.value === "animaux") {
    imageMemory.src ="ressources/animaux/memory_detail_animaux.png";
  } else if (choixMemory.value === "animauxAnimes") {
    imageMemory.src =
      "ressources/animauxAnimes/memory_detail_animaux_animes.png";
  } else if (choixMemory.value === "animauxDomestiques") {
    imageMemory.src =
      "ressources/animauxdomestiques/memory_detail_animaux_domestiques.png";
  } else if (choixMemory.value === "chiens") {
    imageMemory.src = "ressources/chiens/memory_details_chiens.png";
  } else if (choixMemory.value === "dinosaures") {
    imageMemory.src = "ressources/dinosaures/memory_detail_dinosaures.png";
  } else if (choixMemory.value === "dinosauresAvecNom") {
    imageMemory.src =
      "ressources/dinosauresAvecNom/memory_details_dinosaures_avec_nom.png";
  } else if (choixMemory.value === "legume") {
    imageMemory.src = "ressources/memory-legume/memory_detail.png";
  }
}

// envoi vers la page de jeu
imageMemory.addEventListener("click", function () {
  window.location.href = "jouer.html";
});


//stockage choix de la taille du memory dans le LocalS

let choixTaille = document.getElementById("listeTaille");
choixTaille.addEventListener("click", stockageTaille);

function stockageTaille() {
  localStorage.setItem("choixTaille", JSON.stringify(choixTaille.value));
}