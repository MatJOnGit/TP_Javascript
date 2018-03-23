var sport = "Tennis-ballon"; // 13 caractères
console.log(sport.charAt(0)); // Affiche "T"
console.log(sport[0]); // Affiche "T"
console.log(sport.charAt(6)); // Affiche "-"
console.log(sport[6]); // Affiche "-"

var longueurSport = sport.length;
console.log(sport[longueurSport - 1]); // Affiche "n", dernière lettre du mot Tennis-ballon
console.log(sport[longueurSport]); // Affiche undefined : longueur dépassée !