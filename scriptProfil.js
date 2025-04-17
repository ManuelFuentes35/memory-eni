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
choixMemory.addEventListener("click",stockage)

function stockage() {
localStorage.setItem("choixMemory", JSON.stringify(choixMemory.value));
};
