// TODO : ajoutez ici la définition des objets nécessaires
var Compte = {
    // Initialise le personnage
    initCompte: function (titulaire, solde) {
        this.titulaire = titulaire;
        this.solde = solde;
    },
    // Débite le compte et retourne le solde
    debiter: function (montantADebiter) {
        this.solde = this.solde - montantADebiter;
    },
    // Crédite le compte et retourne le solde
    crediter: function (montantACrediter) {
        this.solde = this.solde + montantACrediter;
    }
};
// Affiche une description du compte
Compte.decrire = function () {
    console.log("Titulaire : " + this.titulaire + ", solde : " + this.solde + " euros");
};


var CompteBancaire = Object.create(Compte);
// Initialise le compte bancaire
CompteBancaire.initCB = function (titulaire, solde) {
    this.initCompte(titulaire, solde);
};


var CompteEpargne = Object.create(Compte);
// Initialise le compte épargne
CompteEpargne.initCE = function (titulaire, solde, interets) {
    this.initCompte(titulaire, solde);
    this.interets = interets;
};
// Calcule le solde après ajout des intérêts
CompteEpargne.ajouterInterets = function (interets) {
    this.solde = this.solde * (1 + this.interets);
};



var compte1 = Object.create(CompteBancaire);
compte1.initCB("Alex", 100);
var compte2 = Object.create(CompteEpargne);
compte2.initCE("Marco", 50, 0.05);

console.log("Voici l'état initial des comptes :");
console.log(compte1.decrire());
console.log(compte2.decrire());

var montant = Number(prompt("Entrez le montant à transférer entre les comptes :"));
compte1.debiter(montant);
compte2.crediter(montant);

// Calcule et ajoute les intérêts au solde du compte
compte2.ajouterInterets();

console.log("Voici l'état final des comptes après transfert et calcul des intérêts :");
console.log(compte1.decrire());
console.log(compte2.decrire());