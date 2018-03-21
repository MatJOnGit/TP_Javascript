var tourMax = Number(prompt("Indiquez un nombre de tour de manège à effectuer :"));
if (tourMax > 0) {
    var i;
    for (i = 1; i <= tourMax; i++) {
        console.log("C'est le tour numéro " + i);
    }
} else {
    console.log("Ceci n'est pas un nombre valide");
}