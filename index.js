document.addEventListener("DOMContentLoaded", function () {
    insertHtml();
});

const lignes = `
Le panier est rempli de fruits.
Pourrais-tu me donner du papier ?
Il est pilier de rugby.
Je suis sur le palier du 1er étage.
Quand peut-on publier ce livre ?
Il ne fallait pas parier !
Qu'est-ce qu'il avait parié ?
Il ne faut pas parier son panier !
`.trim().split("\n");

// console.log(lignes);

let text = [];
text.push(lignes)
// alert(text.join(''));

function insertHtml() {
    const docHtml = document.getElementById("regex");
    let html = text;
    docHtml.innerHTML += html;
    // console.log(html)
};

// 1ère REGEX
const regex = /pa.ier/g;

console.log("---------------");

for (const ligne of lignes) {
    // Activer pour obtenir la méthode test (phrase true renvoyée)
    // const result = regex.test(ligne);
    // if (result) {
    //     console.log(ligne);
    // }

    // Méthode match (phrase et mot true renvoyés)
    const matches = ligne.match(regex);
    console.log(ligne);
    if (matches != null) {
        console.log("   > ", matches.length, " matches : ", matches);
    } else {
        console.log("   > NO MATCH");
    }

    // Activer pour obtenir seulement les matches :
    // const matches = ligne.match(regex);
    // if (matches) {
    //     matches.forEach(match => console.log(match));
    // }
}

console.log("---------------");