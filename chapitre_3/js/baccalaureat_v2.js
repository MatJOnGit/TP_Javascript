var moyenne = Number(prompt("Saisissez la moyenne du candidat"));
if (moyenne < 10) {
    console.log("Le candidat n'a pas obtenu la moyenne minimale : il est donc recalé");
} else if ((moyenne >= 10) && (moyenne < 12)) {
    console.log("Le candidat est reçu ... mais c'était juste !");
} else if (moyenne >= 12) {
    console.log("Le candidat est reçu, et avec mention !");
} else {
    console.log("Erreur de données saisies");
}