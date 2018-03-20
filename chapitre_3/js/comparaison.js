var nombre1 = Number(prompt("Saisissez un premier nombre entier"));
var nombre2 = Number(prompt("Saisissez un deuxième nombre entier"));
if (nombre1 > nombre2) {
    console.log(nombre1 + " est supérieur à " + nombre2);
} else if (nombre1 === nombre2) {
    console.log(nombre1 + " est égal à " + nombre2);
} else if (nombre1 < nombre2) {
    console.log(nombre1 + " est inférieur à " + nombre2);
} else {
    console.log("Erreur de données saisies");
}