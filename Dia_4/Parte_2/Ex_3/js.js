// Buscar dentro de um array o maior valor e mostrar na tela.
function verificaIndexMenor(string) {
    menor = 0;
    for (let index = 0; index < string.length; index++) {
    if (string[index] <= menor) {
        menor = index;
    }
}
return menor;
}

console.log(verificaIndexMenor([2, 4, 6, 7, 10, 0,-3]));