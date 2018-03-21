for (var i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) { // cas divisible par 3 et par 5 à la fois (tous les multiples de 3) => affiche "FizzBuzz"
        console.log("FizzBuzz");
    } else if ((i % 3 === 0) && (i % 5 != 0)) { // cas divisible par 3 et non divisible par 5 (tous les multiples de 3) => affiche "Fizz"
        console.log("Fizz");
    } else if ((i % 3 != 0) && (i % 5 === 0)) { // cas divisible par 3 et non divisible par 5 (tous les multiples de 3) => affiche "Buzz"
        console.log("Buzz");
    } else { // tous les autres cas => affiche i
        console.log(i);
    }
}