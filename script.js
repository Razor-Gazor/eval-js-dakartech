let taches= [];

const formulaire= document.getElementById('formulaire-tache');
const entreeUtilisateur= document.getElementById('entree-utilisateur');
const zoneErreur= document.getElementById('zone-erreur');
formulaire.addEventListener('submit', function(event){
    event.preventDefault();
    
    const texteTache = entreeUtilisateur.value.trim();

    if (texteTache === ""){
        zoneErreur.textContent = "Veuillez saisir une tâche.";
        return;
    }

    zoneErreur.textContent= "";

    const nouvelleTache={
        texte: texteTache,
        terminee: false
    };

    taches.push(nouvelleTache);

    entreeUtilisateur.value= "";

    console.log(taches);
});