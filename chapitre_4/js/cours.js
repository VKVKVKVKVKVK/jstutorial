var pElt = document.querySelector("p");
pElt.style.color = "red";
pElt.style.margin = "50px";

pElt.style.fontFamily = "Arial";
pElt.style.backgroundColor = "green";

/*Afficher certaines propriétés du DOM*/
var StylePara = getComputedStyle(document.getElementById("para"));
console.log(StylePara.fontStyle);
console.log(StylePara.color);