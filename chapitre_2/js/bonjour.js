var prenom = prompt("Entrez votre prénom :");
var age = prompt("Entrez votre âge :");
age = Number(age)
var Nextage;
console.log("Bonjour " + prenom + ", et félicitations pour vos " + age + " ans ! <3" );
Nextage = age ++;
console.log("L'an prochain, vous aurez " + Nextage + " ans")