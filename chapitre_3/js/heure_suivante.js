var hour = Number(prompt("Entrez une heure H ?"));
var minute = Number(prompt("Entrez une minute M ?"));
var second = Number(prompt("Entrez une seconde S ?"));
if ((second >= 0) && (second < 60) && (minute >= 0) && (minute < 60) && (hour >= 0) && (hour < 24)) { // Test de validité des valeurs entrées par l'utilisateur
    // Gestion de l'heure
    if (second != 59) { // Test pour savoir s'il faut RAZ les secondes
        second++;
    } else {
        second = 0;
        if (minute != 59) { // Test pour savoir s'il faut RAZ les minutes
            minute++;
        } else {
            minute = 0;
            if (hour != 23) { // Test pour savoir s'il faut RAZ les heures
                hour++;
            } else {
                hour = 0;
            }
        }
    }
    console.log ("A la seconde suivante, il sera " + hour + "h" + minute + "m" + second + "s");
} else {
    // Gestion d'erreur
    console.log("Les entrées ne correspondent pas à une heure valable.")
}