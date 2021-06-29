// Buscar dentro de um array o maior valor e mostrar na tela.
function verificaIndexMaior(string) {
    maior = 0;
    for (let index = 0; index < string.length; index++) {
    if (string[index] > maior) {
        maior = index;
    }
}
return maior;
}

console.log(verificaIndexMaior([2,3,6,7,10,-1]));