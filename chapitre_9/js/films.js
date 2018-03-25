var Film = {
    // Initialise le film
    init: function (titre, annee, realisateur) {
        this.titre = titre;
        this.annee = annee;
        this.realisateur = realisateur;
    },
    // Renvoie la description du film
    decrire: function () {
        return description = this.titre + " (" + this.annee + ", par " + this.realisateur + ")";
    }
};

var film1 = Object.create(Film);
film1.init("Avenger : Infinity War", 2018, "Anthony et Joe Russo");

var film2 = Object.create(Film);
film2.init("Blade Runner", 2017, "Ryan Coogler");

var film3 = Object.create(Film);
film3.init("Star War : Rogue one", 2016, "Gareth Edwards");

var films = [];
films.push(film1);
films.push(film2);
films.push(film3);

films.forEach(function (film) {
    console.log(film.decrire());
});