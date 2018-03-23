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
    for (i = mot.length - 1; i >= 0; i--) {
        motInverse = motInverse + mot[i];
    }
    return motInverse;
}

function convertirEnLeetSpeak(mot) {
    var motConverti = "";
    for (i = 0; i < mot.length; i++) {
        motConverti = motConverti + trouverLettreLeet(mot[i]);
    }
    return motConverti;
}

function trouverLettreLeet(lettre) {
    switch (lettre) {
        case "a": case "A":
            lettre = "4";
            break;
        case "b": case "B":
            lettre = "8";
            break;
        case "e": case "E":
            lettre = "3";
            break;
        case "l": case "L":
            lettre = "1";
            break;
        case "o": case "O":
            lettre = "0";
            break;
        case "s": case "S":
            lettre = "5";
            break;
    }
    return lettre;
}
    
var mot = prompt("Entrez un mot :");
console.log("Le mot " + mot + " contient " + mot.length + " caractère(s)");
console.log("Il s'écrit en minuscules " + mot.toLowerCase());
console.log("Il s'écrit en majuscules " + mot.toUpperCase());
var nbVoyelles = compterNbVoyelles(mot);
console.log("Il contient " + nbVoyelles + " voyelle(s) et " + (mot.length - nbVoyelles) + " consonne(s)" );
var motInverse = inverser(mot)
console.log("Il s'écrit à l'envers " + motInverse);
if (motInverse.toLowerCase() === mot.toLowerCase()) {
    console.log("C'est un palindrome");
} else {
    console.log("Ce n'est pas un palindrome");
}
console.log("Il s'écrit en leet speak " + convertirEnLeetSpeak(mot));