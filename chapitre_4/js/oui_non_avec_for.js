var text = prompt("Entrez un texte :");
for (; ((text != "oui") && (text != "non"));) {
    var text = prompt("Très bien ! Entrez un nouveau texte :");
}
console.log("Vous avez dit " + text + ". Vous avez perdu !");