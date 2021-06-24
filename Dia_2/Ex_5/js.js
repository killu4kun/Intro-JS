let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var soma = 0;
var maiorNumero = 0;
for (let index = 0; index < numbers.length; index++) {
    var base = numbers[index];
    if (base > maiorNumero ) {
        maiorNumero = base;
    }
} 
console.log(maiorNumero);
