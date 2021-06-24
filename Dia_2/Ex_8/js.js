var array = [];
var soma = 1;
for (var index = 48; array.length <= index; index--) {
    array[array.length] = soma;
    soma++;
}
console.log(array);
