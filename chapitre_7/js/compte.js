var compte = {
    titulaire: "Alex",
    solde: 0,
    
    // Renvoie la valeur du compte après avoir été crédité
    crediter: function(x) {
        var soldeCompte = this.solde + x;
        return soldeCompte;
    },
    
    // Renvoie la valeur du compte après avoir été débité
    debiter: function (x) {
        var soldeCompte = this.solde - x;
        return soldeCompte;
    },
    
    // Renvoie la valeur de l'aire du cercle
    decrire: function () {
        var description = "Titulaire : " + this.titulaire + ", solde : " + this.solde + " euros";
        return description;
    }
};

// Affichage des données du compte avant opérations
console.log(compte.decrire());

// Saisie d'une valeur à créditer à l'utilisateur et appel de la fonction crediter
var valeurACrediter = Number(prompt("De combien souhaitez-vous créditer le compte de l'utilisateur (en euros) ?"));
compte.solde = compte.crediter(valeurACrediter);

// Saisie d'une valeur à débiter à l'utilisateur et appel de la fonction debiter
var valeurADebiter = Number(prompt("De combien souhaitez-vous débiter le compte de l'utilisateur (en euros) ?"));
compte.solde = compte.debiter(valeurADebiter);

// Affichage des données du compte après opérations
console.log(compte.decrire());