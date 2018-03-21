/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

var nombreTentative = 1;

while (nombreTentative <= 6) {
    var suggestionJoueur = Number(prompt("Devinez le chiffre, compris entre 1 et 100, auquel je pense :"));
    if (suggestionJoueur === solution) {
        console.log("Bravo ! La solution était " + solution + "\nVous avez trouvé en " + nombreTentative + " essai(s)");
        nombreTentative = 7;
    } else {
        if (suggestionJoueur > solution) {
            console.log(suggestionJoueur + " est trop grand");
        }
        else {
            console.log(suggestionJoueur + " est trop petit");
        }
        nombreTentative++;
        if (nombreTentative === 7) {
            console.log("Perdu ... la solution était " + solution);
        }
    }
}
