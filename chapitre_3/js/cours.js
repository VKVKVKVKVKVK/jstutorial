/* Modifier le contenu d'une page en js*/

document.getElementById("langages").innerHTML += '<li id="c">C</li>';
/*document.getElementById("langages").innerHTML = "";*/

document.querySelector("h1").textContent += " de programmation";



/*Modifier les attributs*/
document.querySelector("h1").setAttribute("id", "titre");

/*Modifier les classes*/
var titreElt = document.querySelector("h1");
titreElt.classList.remove("debut");
titreElt.classList.add("titre");
console.log(titreElt);

/*Insertion nouvel element*/
var pythonElt = document.createElement("li");
pythonElt.id = "python";
pythonElt.textContent = "Python";
document.getElementById("langages").appendChild(pythonElt);

var rubyElt = document.createElement("li");
rubyElt.id = "ruby";
rubyElt.appendChild(document.createTextNode("Ruby"));
document.getElementById("langages").appendChild(rubyElt);

/* Inserer Avant */
var perlElt = document.createElement("li");
perlElt.id = "perl";
perlElt.textContent = "Perl";
document.getElementById("langages").insertBefore(perlElt, document.getElementById("php"));

/*Positionnement précis*/
document.getElementById('langages').insertAdjacentHTML("afterend", '<li id="javascript">Javascript</li>');

/*Rempalcer element par un autre */
var bashElt = document.createElement("li");
bashElt.id = "bash";
bashElt.textContent = "Bash";
document.getElementById("langages").replaceChild(bashElt, document.getElementById("perl"));

/*Suprimmer un élément*/
document.getElementById("langages").removeChild(document.getElementById("bash"));

/*Exercice*/
var listeElt = document.createElement("p");
var lienElt = document.createElement("a");

lienElt.href = "https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation";
lienElt.textContent = "liste";

listeElt.appendChild(document.createTextNode("En voici une "));
listeElt.appendChild(lienElt);
listeElt.appendChild(document.createTextNode(" plus complète!"));
document.getElementById("contenu").appendChild(listeElt);