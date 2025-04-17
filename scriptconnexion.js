let mail = document.getElementById("mail");
let mdp = document.getElementById("motDePasse");
let submit = document.getElementById("submit")

//stockage des données en local:
submit.addEventListener("click", function (event) {
  event.preventDefault();

  //stock la saisie de connexion
  const email = mail.value;
  const password = mdp.value;

  //extrait les données stockées si il y en a
  const listeinfos = JSON.parse(localStorage.getItem("listeinfos")) || [];

  // Vérifie si un utilisateur avec les mêmes infos existe déjà
  const verifUser = listeinfos.some(function (user) {
    return user.password === password && user.mail === email;
  });

  if (verifUser) {
    window.location.href = "profil.html";
  } else {
    alert("Utilisateurs non trouver");
  }
});
