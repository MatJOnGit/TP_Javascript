var nombre = Number(prompt("Indiquez un chiffre inférieur ou égal à 100 :"));
for (; !(nombre <= 100);) {
    if ((nombre / nombre === 1) || (nombre === 0)) {
        nombre = Number(prompt(nombre + " est strictement supérieur à 100. Veuillez saisir, une nouvelle fois, un chiffre inférieur ou égal à 100 :"));
    } else {
        nombre = Number(prompt("Entrée non valide. Veuillez saisir, une nouvelle fois, un chiffre inférieur ou égal à 100 :"));
    }
}
console.log(nombre + " est bien un chiffre inférieur ou égal à 100");