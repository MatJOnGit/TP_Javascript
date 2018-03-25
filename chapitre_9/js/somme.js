var valeurs = [11, 3, 7, 2, 9, 10];

var somme = 0;
for (var i = 0; i < valeurs.length; i++) {
    somme += valeurs[i];
}
console.log("(boucle for) La somme des éléments vaut " + somme);

var somme = 0;

valeurs.forEach(function(element) {
    somme += element;
});

console.log("(boucle forEach) La somme des éléments vaut " + somme)