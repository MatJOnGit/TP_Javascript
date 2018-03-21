var nombre = Number(prompt("Indiquez un chiffre compris entre 50 et 100 :"));
for (; !((nombre >= 50) && (nombre <= 100)) ;) {
    if ((nombre / nombre === 1) || (nombre === 0)) {
        nombre = Number(prompt(nombre + " n'est pas compris dans l'intervalle [50;100]. Veuillez saisir, une nouvelle fois, un chiffre compris entre 50 et 100 :"));
    } else {
        nombre = Number(prompt("Entrée non valide. Veuillez saisir, une nouvelle fois, un chiffre compris entre 50 et 100 :"));
    }
}
console.log(nombre + " est bien un chiffre compris entre 50 et 100");