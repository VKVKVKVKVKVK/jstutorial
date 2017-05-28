
/*
document.getElementById("bouton").addEventListener("click", function(e){
    console.log("Evènement: " + e.type + ", texte de la cible: " + e.target.textContent);
});

document.addEventListener("keypress", function(e){
   console.log("Vous avez appuyé sur la touche " + String.fromCharCode(e.charCode)); 
});
*/



/*
Affiche position de la souris au clic
function getBoutonSouris(code){
    var bouton = "inconnu";
    switch(code){
        case 0:
            bouton = "gauche";
            break;
        case 1:
            bouton = "milieu";
            break;
        case 2:
            bouton = "droit";
            break;
               }
    return bouton;
}

function infosSouris(e){
    console.log("Evènement Souris: " + e.type + ", bouton : " +getBoutonSouris(e.button) + ", X : " + e.clientX + ", Y : " + e.clientY );
}

document.addEventListener("click", infosSouris);


Message lorsque la page est chargée
window.addEventListener("load", function(){
    console.log("Page Entièrement chargée");
});


Message avant la fermeture de la fenetre
window.addEventListener("beforeunload", function(e){
    var message = "Aurevoir";
    e.returnValue = message;
    return message;
})

*/


/*Propagation des évenements*/

// Gestion du clic sur le document
document.addEventListener("click", function () {
    console.log("Gestionnaire document");
});
// Gestion du clic sur le paragraphe
document.getElementById("para").addEventListener("click", function () {
    console.log("Gestionnaire paragraphe");
});
// Gestion du clic sur le bouton
document.getElementById("propa").addEventListener("click", function (e) {
    console.log("Gestionnaire bouton");
});

/*
Gestion du clic sur le bouton
document.getElementById("propa").addEventListener("click", function (e) {
    console.log("Gestionnaire bouton");
    e.stopPropagation(); // Arrêt de la propagation de l'événement
});
*/

// Gestion du clic sur le lien interdit
document.getElementById("interdit").addEventListener("click", function (e) {
    console.log("Continuez plutôt à lire le cours ;)");
    e.preventDefault(); // Annulation de la navigation vers la cible du lien
});
