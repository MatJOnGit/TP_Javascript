var tourMax = Number(prompt("Indiquez un nombre de tour de manège à effectuer :"));
if (tourMax > 0) {
    var i = 1;
    while (i <= tourMax) {
        console.log("C'est le tour numéro " + i);
        i++;
    }
} else {
    console.log("Ceci n'est pas un nombre valide");
}