var nombre = Number(prompt("Indiquez la table de multiplication que vous souhaitez afficher :"));
var resultat;
if ((nombre / nombre === 1) || (nombre === 0)) {
    console.log("Voici la table de multiplication de " + nombre);
    for (var i = 1; i <= 10; i++) {
        resultat = nombre * i;
        console.log(nombre + " x " + i + " = " + resultat);
    }
} else {
    console.log("Vous n'avez pas saisie un nombre");
}