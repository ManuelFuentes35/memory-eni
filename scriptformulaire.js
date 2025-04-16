// création pseudo
// interaction avec l'image et le texte
let imageNom = document.getElementById("validationNom");
let textNom = document.getElementById("alerteNom");
let nom = document.getElementById("nom");
console.log(nom);

//changer d'image à la saisie et couleur texte
nom.addEventListener("input", function () {
  if (nom.value === "") {
    textNom.setAttribute("hidden", true);
    imageNom.setAttribute("hidden", true);
  } else if (nom.value.length < 3) {
    imageNom.removeAttribute("hidden");
    imageNom.src = "ressources/valid_error.svg";
    imageNom.alt = "incorrect";
    textNom.removeAttribute("hidden");
    textNom.style.color = "red";
  } else if (nom.value.length >= 3) {
    imageNom.removeAttribute("hidden");
    imageNom.src = "ressources/valid_check.svg";
    imageNom.alt = "correct";
    textNom.removeAttribute("hidden");
    textNom.style.color = "green";
  }
});

// création mail
// interaction avec l'image et le texte
let imageMail = document.getElementById("validationMail");
let textMail = document.getElementById("alerteMail");
let mail = document.getElementById("mail");
const regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//changer d'image à la saisie et couleur texte
mail.addEventListener("input", function () {
  if (mail.value === "") {
    textMail.setAttribute("hidden", true);
    imageMail.setAttribute("hidden", true);
  } else if (regexMail.test(mail.value)) {
    imageMail.removeAttribute("hidden");
    imageMail.src = "ressources/valid_check.svg";
    imageMail.alt = "correct";
    textMail.removeAttribute("hidden");
    textMail.style.color = "green";
    textMail.innerText = "Mail valide";
  } else {
    imageMail.removeAttribute("hidden");
    imageMail.src = "ressources/valid_error.svg";
    imageMail.alt = "incorrect";
    textMail.removeAttribute("hidden");
    textMail.style.color = "red";
    textMail.innerText =
      "Rentrez un mail valide exemple : prénom.nom@domaine.fr";
  }
});

// création mot de passe + vérification

let imageMDP = document.getElementById("validationMDP");
let mdp = document.getElementById("motDePasse");
const seg1 = document.getElementById("seg1");
const seg2 = document.getElementById("seg2");
const seg3 = document.getElementById("seg3");
const faible = document.getElementById("faible");
const moyen = document.getElementById("moyen");
const fort = document.getElementById("fort");
let force = 0;
let verifCS = false;
let verifChiffre = false;
let verifLongueur = false;

mdp.addEventListener("input", testTout);

function testCaracteresSpeciaux() {
  if (/[^a-zA-Z0-9]/.test(mdp.value)) {
    force++;
    verifCS = true;
  } else {
    verifCS = false;
  }
}

function testchiffre() {
  if (/[0-9]/.test(mdp.value)) {
    force++;
    verifChiffre = true;
  } else {
    verifChiffre = false;
  }
}

function testnbCharacteres() {
  if (mdp.value.length >= 6) {
    force++;
    verifLongueur = true;
  } else {
    verifLongueur = false;
  }
}

function testTout() {
  force = 0;
  testCaracteresSpeciaux();
  testchiffre();
  testnbCharacteres();

  if (mdp.value !== "") {
    imageMDP.removeAttribute("hidden");
    if (force === 3) {
      imageMDP.src = "ressources/valid_check.svg";
      imageMDP.alt = "correct";
    } else {
      imageMDP.src = "ressources/valid_error.svg";
      imageMDP.alt = "incorrect";
    }
  } else {
    imageMDP.setAttribute("hidden", true);
  }

  // vérifie la validation à chaque itération
  [seg1, seg2, seg3].forEach(function (seg) {
    seg.className = "segment";
  });
  faible.setAttribute("hidden", true);
  moyen.setAttribute("hidden", true);
  fort.setAttribute("hidden", true);

  // Active les segment en fonction
  if (force >= 1) {
    seg1.classList.add("barre1");
    faible.removeAttribute("hidden");
    moyen.setAttribute("hidden", true);
    fort.setAttribute("hidden", true);
  }
  if (force >= 2) {
    seg2.classList.add("barre2");
    moyen.removeAttribute("hidden", false);
    faible.setAttribute("hidden", true);
    fort.setAttribute("hidden", true);
  }
  if (force === 3) {
    seg3.classList.add("barre3");
    fort.removeAttribute("hidden", false);
    faible.setAttribute("hidden", true);
    moyen.setAttribute("hidden", true);
  }
  accesbouton();
}

//comparaison des 2 mots de passe
let verifMDP = document.getElementById("verificationMotDePasse");
let imageVerifMDP = document.getElementById("validationconfirmMDP");
verifMDP.addEventListener("input", verifieMDP);
mdp.addEventListener("input", verifieMDP);

function verifieMDP() {
  if (verifMDP.value == "" || mdp.value == "") {
    imageVerifMDP.setAttribute("hidden", true);
    return;
  }
  imageVerifMDP.removeAttribute("hidden");
  if (mdp.value === verifMDP.value) {
    imageVerifMDP.src = "ressources/valid_check.svg";
    imageVerifMDP.alt = "correct";
  } else {
    imageVerifMDP.src = "ressources/valid_error.svg";
    imageVerifMDP.alt = "incorrect";
  }
  accesbouton();
}

let submit = document.getElementById("submit");

function accesbouton() {
  if (
    nom.value.length >= 3 &&
    regexMail.test(mail.value) &&
    force === 3 &&
    mdp.value === verifMDP.value
  ) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
}

//stockage des données en local:
submit.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem("pseudo", nom.value);
  localStorage.setItem("mail", mail.value);
  localStorage.setItem("password", mdp.value);
});
