/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// TODO : compléter ce fichier pour ajouter les liens à la page web
for (var i = 0; i < 3; i++)
    {
        var box = document.createElement("p");
        box.className = "lien";
        
        var title = document.createElement("a");
        title.style.color = "#428bca";
        title.textContent = listeLiens[i].titre;
        title.href = listeLiens[i].url;
 
        box.appendChild(title);
        box.insertAdjacentHTML("beforeend", ' ' + '<span>' + listeLiens[i].url + '</span>' + '<br>' + "Ajouté par " + listeLiens[i].auteur);
        
        
        document.getElementById("contenu").appendChild(box);
    }

console.log(document.getElementById("contenu").innerHTML);