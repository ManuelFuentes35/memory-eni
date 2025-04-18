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
localStorage.setItem("choixMemory",JSON.stringify("legume"));
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

function updateOptions(selectElement, optionsArray) {
  // 1. On vide les options existantes
  selectElement.innerHTML = "";

  // 2. On parcourt le tableau d’options
  for (var i = 0; i < optionsArray.length; i++) {
    var option = optionsArray[i];

    // 3. Pour chaque élément du tableau, on crée une <option>
    var opt = document.createElement("option");
    opt.value = option.value;       // valeur interne de l'option
    opt.textContent = option.label; // texte affiché à l'écran

    // 4. On ajoute l'option à la liste
    selectElement.appendChild(opt);
  }
}
choixMemory.addEventListener("click", selectListeTaille);
function selectListeTaille() {
  const listeTaille = document.getElementById("listeTaille");
  if (choixMemory.value === "scrabble") {
    updateOptions(listeTaille, [
      { value: "2*2", label: "2 x 2" },
      { value: "3*2", label: "3 x 2" },
      { value: "4*3", label: "4 x 3" },
      { value: "4*4", label: "4 x 4" },
      { value: "5*4", label: "5 x 4" },
      { value: "6*5", label: "6 x 5" },
      { value: "6*6", label: "6 x 6" },
      { value: "7*6", label: "7 x 6" }
    ]);
  } else if (choixMemory.value === "animaux") {
    updateOptions(listeTaille, [
      { value: "2*2", label: "2 x 2" },
      { value: "3*2", label: "3 x 2" },
      { value: "4*3", label: "4 x 3" },
      { value: "4*4", label: "4 x 4" },
      { value: "5*4", label: "5 x 4" },
      { value: "6*5", label: "6 x 5" },
      { value: "6*6", label: "6 x 6" },
      { value: "7*6", label: "7 x 6" }
    ]);
  } else if (choixMemory.value === "animauxAnimes") {
    updateOptions(listeTaille, [
      { value: "2*2", label: "2 x 2" },
      { value: "3*2", label: "3 x 2" },
      { value: "4*3", label: "4 x 3" },
      { value: "4*4", label: "4 x 4" }
    ]);
  } else if (choixMemory.value === "animauxDomestiques") {
    updateOptions(listeTaille, [
      { value: "2*2", label: "2 x 2" },
      { value: "3*2", label: "3 x 2" },
      { value: "4*3", label: "4 x 3" },
      { value: "4*4", label: "4 x 4" },
      { value: "5*4", label: "5 x 4" }
    ]);  
  } else if (choixMemory.value === "chiens") {
    updateOptions(listeTaille, [
      { value: "2*2", label: "2 x 2" },
      { value: "3*2", label: "3 x 2" },
      { value: "4*3", label: "4 x 3" },
      { value: "4*4", label: "4 x 4" },
      { value: "5*4", label: "5 x 4" },
      { value: "6*5", label: "6 x 5" },
      { value: "6*6", label: "6 x 6" },
      { value: "7*6", label: "7 x 6" }
    ]);
  } else if (choixMemory.value === "dinosaures") {
    updateOptions(listeTaille, [
      { value: "2*2", label: "2 x 2" },
      { value: "3*2", label: "3 x 2" },
      { value: "4*3", label: "4 x 3" },
      { value: "4*4", label: "4 x 4" },
      { value: "5*4", label: "5 x 4" }
    ]);  
  } else if (choixMemory.value === "dinosauresAvecNom") {
    updateOptions(listeTaille, [
      { value: "2*2", label: "2 x 2" },
      { value: "3*2", label: "3 x 2" },
      { value: "4*3", label: "4 x 3" },
      { value: "4*4", label: "4 x 4" },
      { value: "5*4", label: "5 x 4" }
    ]);  
  } else if (choixMemory.value === "legume") {
    updateOptions(listeTaille, [
      { value: "2*2", label: "2 x 2" },
      { value: "3*2", label: "3 x 2" },
      { value: "4*3", label: "4 x 3" }
    ]);  
  }
}


// envoi vers la page de jeu
imageMemory.addEventListener("click", function () {
  window.location.href = "jouer.html";
});


//stockage choix de la taille du memory dans le LocalS

let choixTaille = document.getElementById("listeTaille");
choixTaille.addEventListener("click", stockageTaille);
localStorage.setItem("choixTaille",JSON.stringify("4*3"));

function stockageTaille() {
  localStorage.setItem("choixTaille", JSON.stringify(choixTaille.value));
}