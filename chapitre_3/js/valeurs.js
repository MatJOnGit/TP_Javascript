var nb1 = Number(prompt("Entrez nb1 :"));
var nb2 = Number(prompt("Entrez nb2 :"));
var nb3 = Number(prompt("Entrez nb3 :"));

if (nb1 > nb2) {
    nb1 = nb3 * 2; // si nb1 est strictement sup. à nb2, nb1 prends la valeur du double de nb3
} else { 
    nb1++; // sinon, nb1 est incrémenté de 1
    if (nb2 > nb3) {
        nb1 = nb1 + nb3 * 3; // si nb2 est strictement sup. à nb3, nb1 prends la valeur de la somme de nb1 et de 3 fois nb3
    } else {
        nb1 = 0; // sinon, nb1 est remis à 0 ...
        nb3 = nb3 * 2 + nb2; // et nb3 prends la valeur de la somme du double de sa valeur initiale et de nb2
    }
}

// Test 1 : nb1=nb2=nb3=4
// On doit avoir nb1=0, nb2=4 et nb3=12
// Résultats : OK

// Test 2 : nb1=4, nb2=3, nb3=2
// On doit avoir nb1=4, nb2=3 et nb3=2
// Résultats : OK

// Test 3 : nb1=2, nb2=4, nb3=0
// On doit avoir nb1=3, nb2=4 et nb3=0
// Résultats : OK