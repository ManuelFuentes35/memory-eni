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
  const listeinfos = JSON.parse(localStorage.getItem("listeinfos"));
  

  // Vérifie si un utilisateur avec les mêmes infos existe déjà
  const verifUser = listeinfos.some(function (user) {
    return user.password === password && user.mail === email;
  });

  if (verifUser) {
    sessionStorage.setItem("mail",email);
    window.location.href = "profil.html";
  } else {
    // alert("Utilisateurs non trouver");
    const form = document.getElementById("form");
      form.classList.add("shake");

      // Retire la classe après l'animation pour pouvoir la relancer plus tard
      setTimeout(() => {
          form.classList.remove("shake");
      }, 400);
  }
});

