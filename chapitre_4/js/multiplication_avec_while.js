var nombre = Number(prompt("Indiquez la table de multiplication que vous souhaitez afficher :"));
var resultat;
if ((nombre / nombre === 1) || (nombre === 0)) {
    console.log("Voici la table de multiplication de " + nombre);
    var i = 1;
    while (i <= 10) {
        resultat = nombre * i;
        console.log(nombre + " x " + i + " = " + resultat);
        i++;
    }
} else {
    console.log("Vous n'avez pas saisie un nombre");
}