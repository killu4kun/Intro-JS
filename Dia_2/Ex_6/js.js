let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var soma = 0;
var maiorNumero = 0;
for (let index = 0; index < numbers.length; index++) {
    var base = numbers[index];
    if (base % 2 != 0 ) {
        soma++;
    } else if (soma === 0) {
        console.log("nenhum valor impar encontrado");
    }
} 
console.log(soma);
