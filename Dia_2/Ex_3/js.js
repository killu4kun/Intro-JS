let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var soma = 0;
for (let index = 0; index < numbers.length; index++) {
    soma += numbers[index];
    var media = soma/numbers.length;
}
console.log(media);