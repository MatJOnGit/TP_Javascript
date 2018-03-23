var r = Number(prompt("Entrez le rayon d'un cercle (en cm):"));

// TODO : ajoutez ici la définition de l'objet cercle
var cercle = {
    // Renvoie la valeur du périmètre du cercle
    perimetre: function () {
        var perimetreCercle = Math.PI * 2 * r;
        return perimetreCercle;
    },
    
    // Renvoie la valeur de l'aire du cercle
    aire: function () {
        var aireCercle = Math.PI * r * r;
        return aireCercle;
    }
};

console.log("Son périmètre vaut " + cercle.perimetre() + " cm");
console.log("Son aire vaut " + cercle.aire() + " cm²");