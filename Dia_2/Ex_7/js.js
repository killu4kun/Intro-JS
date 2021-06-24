let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var soma = 0;
var menorNumero = 10000;
for (let index = 0; index < numbers.length; index++) {
    var base = numbers[index];
    if (base < menorNumero ) {
        menorNumero = base;
    }
} 
console.log(menorNumero);
