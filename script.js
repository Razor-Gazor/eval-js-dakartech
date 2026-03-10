let taches = [];

const formulaire = document.getElementById("formulaire-tache");
const entreeUtilisateur = document.getElementById("entree-utilisateur");
const zoneErreur = document.getElementById("zone-erreur");
formulaire.addEventListener("submit", function (event) {
  event.preventDefault();

  const texteTache = entreeUtilisateur.value.trim();

  if (texteTache === "") {
    zoneErreur.textContent = "Veuillez saisir une tâche.";
    return;
  }

  zoneErreur.textContent = "";

  const nouvelleTache = {
    texte: texteTache,
    terminee: false,
  };

  taches.push(nouvelleTache);
  afficherTaches();

  entreeUtilisateur.value = "";

  console.log(taches);
});

function afficherTaches() {
  const liste = document.getElementById("liste-taches");
  const compteur = document.getElementById("compteur-taches");

  liste.innerHTML = "";
  let nbEnCours = 0;

  taches.forEach(function (tache, index) {
    const li = document.createElement("li");
    li.className = "tache-item";

    if (tache.terminee) {
      li.classList.add("tache-terminee");
    } else {
      nbEnCours++;
    }

    const spanTexte = document.createElement("span");
    spanTexte.textContent = tache.texte;
    li.appendChild(spanTexte);

    const boutonFait = document.createElement("button");
    boutonFait.textContent = "Terminé";
    boutonFait.addEventListener("click", function () {
      taches[index].terminee = !taches[index].terminee;
      afficherTaches();
    });
    li.appendChild(boutonFait);

    const boutonSuppr = document.createElement("button");
    boutonSuppr.textContent = "Supprimer";
    boutonSuppr.addEventListener("click", function () {
      taches.splice(index, 1);
      afficherTaches();
    });
    li.appendChild(boutonSuppr);

    liste.appendChild(li);
  });

  compteur.textContent = nbEnCours;
}
