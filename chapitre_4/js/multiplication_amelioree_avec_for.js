var nombre = Number(prompt("Indiquez la table de multiplication, entre 2 et 9, que vous souhaitez afficher :"));
var resultat;
if ((nombre / nombre === 1) && (nombre >= 2) && (nombre <= 9)) {
    console.log("Voici la table de multiplication de " + nombre);
    for (var i = 1; i <= 10; i++) {
        resultat = nombre * i;
        console.log(nombre + " x " + i + " = " + resultat);
    }
} else if ((nombre / nombre === 1) || (nombre === 0)){
    console.log("Vous n'avez pas entré un chiffre entre 2 et 9");
} else {
    console.log("Vous n'avez pas saisie un nombre");
}