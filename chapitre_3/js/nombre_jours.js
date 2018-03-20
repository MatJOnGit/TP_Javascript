var month = Number(prompt("Entrez le numéro d'un mois de l'année entre 1 et 12"));
if ((month === 1) || (month === 3 ) || (month === 5) || (month === 7) || (month === 8) || (month === 10) || (month === 12)) {
    console.log("Ce mois comporte 31 jours");
}
else {
    if  ((month === 4) || (month === 6) || (month === 9) || (month === 11)) {
        console.log("Ce mois comporte 30 jours");
    } else if (month === 2) {
        console.log("Ce mois comporte 29 jours");
    } else
        console.log("Ce numéro n'est pas valable")
}