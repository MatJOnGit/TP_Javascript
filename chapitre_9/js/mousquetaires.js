var Mousquetaire = {
    // Initialise le mousquetaire
    init: function (nom) {
        this.nom = nom;
    },
    // Renvoie la description du film
    decrire: function () {
        return this.nom;
    }
};

var mousquetaire1 = Object.create(Mousquetaire);
mousquetaire1.init("Athos");

var mousquetaire2 = Object.create(Mousquetaire);
mousquetaire2.init("Porthos");

var mousquetaire3 = Object.create(Mousquetaire);
mousquetaire3.init("Aramis");

var mousquetaires = [];
mousquetaires.push(mousquetaire1);
mousquetaires.push(mousquetaire2);
mousquetaires.push(mousquetaire3);

console.log("Voici les trois mousquetaires :")
for (var i = 0; i < mousquetaires.length; i++) {
    console.log(mousquetaires[i].decrire());
}

var mousquetaire4 = Object.create(Mousquetaire);
mousquetaire4.init("D'Artagnan");
mousquetaires.push(mousquetaire4);

console.log("A présent, ils sont quatre !")
mousquetaires.forEach(function (nom) {
    console.log(nom.decrire());
});