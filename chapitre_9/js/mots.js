var mots = [];
var motAAjouter = "";
while (motAAjouter != "stop") {
    motAAjouter = prompt("Entrez le mot à ajouter dans le tableau. stop pour arrêter.");
    if (motAAjouter != "stop") {
        mots.push(motAAjouter);
        console.log(motAAjouter + " a été ajouté au tableau.");
    }
}

console.log("Voici l'historique des mots ajouté au tableau");
mots.forEach(function(element) {
    console.log(element);
});