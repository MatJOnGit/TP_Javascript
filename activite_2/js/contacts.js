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

function ajouterContact() {
    var nomNouveauContact = prompt("Entrez le nom du nouveau contact :");
    var prenomNouveauContact = prompt("Entrez le prénom du nouveau contact :");
    var nouveauContact = Object.create(Contact);
    nouveauContact.init(nomNouveauContact, prenomNouveauContact);
    contacts.push(nouveauContact);
    console.log("Le nouveau contact a été ajouté");
}

var Contact = {
    // Initialise le contact
    init: function (nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    },
    // Renvoie les données du contact
    afficherContact: function () {
        return "Nom : " + this.nom + ", prénom : " + this.prenom;
    },
};

var contact1 = Object.create(Contact);
contact1.init("Lévisse", "Carole");

var contact2 = Object.create(Contact);
contact2.init("Nelsonne", "Mélodie");

var contacts = [];
contacts.push(contact1);
contacts.push(contact2);

// Gestion d'interaction avec l'utilisateur
console.log("Bienvenue dans le gestionnaire des contacts !");
var choixUtilisateur = initChoix();
while (choixUtilisateur !== 0) {
    if (choixUtilisateur === 1) { // affichage de tous les contacts enregistrés dans le tableau
        console.log("Voici la liste de tous vos contacts :");
        for (var i = 0; i < contacts.length; i++) {
            console.log(contacts[i].afficherContact());
        }
    } else if (choixUtilisateur === 2) { // Ajout de nouvelles données dans le tableau
        ajouterContact();
    } else { // Gestion d'entrée non valide dans le menu principal
        console.log("Entrée erronnée. Veuillez entrer une option valide : \n");
    }
    console.log("\n");
    var choixUtilisateur = initChoix();
}
console.log("\n Au revoir !");