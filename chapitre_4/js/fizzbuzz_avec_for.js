for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");   // Si i est divisible par 3, affiche Fizz à la place du nombre
    } else if (i % 5 === 0) {
        console.log("Buzz");   // Si i est divisible par 5 et non par 3, affiche Buzz à la place du nombre
    } else {
        console.log(i);
    }
}