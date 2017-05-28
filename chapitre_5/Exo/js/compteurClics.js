var compteurElt = document.getElementById("compteurClics");
var i = 0;

function clic(){
   console.log("Compteur incrémenté");
    i++;
    compteurElt.textContent = i;
}

document.getElementById("clic").addEventListener("click",clic);

document.getElementById("desactiver").addEventListener("click", function(){
    document.getElementById("clic").removeEventListener("click", clic);
});