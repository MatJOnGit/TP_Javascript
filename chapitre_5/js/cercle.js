//Fonction pour calculer le périmetre  d'un cercle dont le rayon est saisi par l'utilisateur
function calculerPerimetre(rayon) {
    var perimetre = Math.PI * 2 * rayon;
    return perimetre;    
}

//Fonction pour calculer l'aire d'un cercle dont le rayon est saisi par l'utilisateur
function calculerAire(rayon) {
    var aire = Math.PI * rayon * rayon;
    return aire;
}

//Demande du rayon à l'utilisateur et affichage
var rayon = Number(prompt("Entrez le rayon du cercle :"));
console.log("Le périmètre d'un cercle de rayon de " + rayon + " cm est de " + calculerPerimetre(rayon) + " cm.");
console.log("L'aire d'un cercle de rayon de " + rayon + " cm est de " + calculerAire(rayon) + " cm².");