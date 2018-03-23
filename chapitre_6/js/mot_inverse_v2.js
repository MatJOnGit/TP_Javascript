function compterNbVoyelles(mot) {
    var nbVoyelles = 0;
    var motMinuscules = mot.toLowerCase();
    for (i = 0 ; i < mot.length; i++) {
        if ((mot[i] === "a") || (mot[i] === "e") || (mot[i] === "i") || (mot[i] === "o") || (mot[i] === "u") || (mot[i] === "y")) {
            nbVoyelles++;
        }
    }
    return nbVoyelles;
}

function inverser(mot) {
    var motInverse = "";
    for (i = 0; i < mot.length; i++) {
        motInverse = mot[i] + motInverse ;
    }
    return motInverse;
}

var mot = prompt("Entrez un mot :");
console.log("Le mot " + mot + " contient " + mot.length + " caractère(s)");
console.log("Il s'écrit en minuscules " + mot.toLowerCase());
console.log("Il s'écrit en majuscules " + mot.toUpperCase());
var nbVoyelles = compterNbVoyelles(mot);
console.log("Il contient " + nbVoyelles + " voyelle(s) et " + (mot.length - nbVoyelles) + " consonne(s)" );
console.log("Il s'écrit à l'envers " + inverser(mot));