// TODO : écrire la fonction calculer()
function calculer(x, operateur, y) {
    var resultat;
    switch (operateur) {
        case "+":
            resultat = x + y;
            break;
        case "-":
            resultat = x - y;
            break;
        case "*":
            resultat = x * y;
            break;
        case "/":
            resultat = x / y;
            break;
    }
    return resultat;
}

console.log(calculer(4, "+", 6)); // Doit afficher 10
console.log(calculer(4, "-", 6)); // Doit afficher -2
console.log(calculer(2, "*", 0)); // Doit afficher 0
console.log(calculer(12, "/", 0)); // Doit afficher Infinity