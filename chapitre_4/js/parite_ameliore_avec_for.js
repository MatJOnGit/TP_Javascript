var valeurInit = Number(prompt("Indiquez un chiffre dont la parité et celle des 9 chiffres suivants sera affichée :"));
for (var i = valeurInit; i <= valeurInit + 9; i++) {
    if (i % 2 === 0) {
        console.log(i + " est pair");
    } else if (i % 2 === 1) {
        console.log(i + " est impair")
    }
}