var array = [];
var soma = 1;
var divisão = 0;
for (var index = 48; array.length <= index; index--) {
    array[array.length] = soma;
    soma++;
}
console.log(array);

for (let index = 0; index < array.length; index++) {
    let agregador = array[index];
    let divisor = agregador/2;
    console.log(divisor);
}