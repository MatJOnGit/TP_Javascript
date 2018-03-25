var Chien = {
    // initialise le chien
    init: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
        this.aboiement = "";
    },
    // Renvoie l'aboiement du chien
    aboyer: function () {
        var aboiement = "Whoua ! Whoua !";
        if (this.taille < 25) {
            aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboiement = "Grrr ! Grrr !";
        };
        this.aboiement = aboiement;
    },
    // Renvoie une description du chien
    decrire: function () {
        this.aboyer();
        return this.nom + " est un " + this.race + " mesurant " + this.taille + " cm. Il aboie : " + this.aboiement;
    }
};

var chien1 = Object.create(Chien);
chien1.init("Crokdur", "mâtin de Nâples", 75);

var chien2 = Object.create(Chien);
chien2.init("Pupuce", "bichon", 22);

var chien3 = Object.create(Chien);
chien3.init("Médor", "labrador", 58);

var chenil = [];
chenil.push(chien1);
chenil.push(chien2);
chenil.push(chien3);

console.log("Le chenil héberge " + chenil.length + " chien(s) :");

chenil.forEach(function (chien) {
    console.log(chien.decrire());
});