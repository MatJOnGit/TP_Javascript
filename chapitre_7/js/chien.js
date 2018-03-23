var chien = {
    nom: "Crockdur",
    race: "mâtin de Naples",
    taille: "75 cm",
    son: "Grrr !",

    // Renvoie la description du personnage
    aboyer: function () {
        var aboiement = " " + this.son + " " + this.son;
        return aboiement;
    }
};

// TODO : ajoutez ici la définition de l'objet chien

console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");
console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboyer());