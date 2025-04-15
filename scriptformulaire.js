// interaction avec l'image
let image = document.getElementById("validationNom");
let text = document.getElementById("alerteNom");
let nom = document.getElementById("nom");

//changer d'image à la saisie
nom.addEventListener("input", function () {
  if (nom.value !== "") {
    if (nom.value.length < 3) {
      text.removeAttribute("hidden");
      image.removeAttribute("hidden");
    } else if (nom.value.length > 3) {
      text.setAttribute("hidden");
      image.setAttribute("hidden");
    }
  }
});
