/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

// Propose les options à l'utilisateur et le retourne
function initChoix() {
    console.log("1 : Lister les contacts");
    console.log("2 : Ajouter un contact");
    console.log("0 : Quitter");
    choixUtilisateur = Number(prompt("Choisissez une option :"));
    return choixUtilisateur;
}

console.log("Bienvenue dans les gestionnaire des contacts !");
var choixUtilisateur = initChoix();
while (choixUtilisateur !== 0) {
    if (choixUtilisateur === 1) {
        console.log("Liste de contacts \n \n");
    } else if (choixUtilisateur === 2) {
        console.log ("Ajout de contact \n \n");
    } else {
        console.log("Entrée erronnée, veuillez entrer une option valable : \n \n");
    }
    var choixUtilisateur = initChoix();
}
console.log("\n Au revoir !");