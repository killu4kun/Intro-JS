function verifyEndWord(palavra,fim) {
    let aocontrario = palavra.split("").reverse("").join("");
    let fimAoContrario = fim.split("").reverse("").join("");
    let resultado;
    for (let index = 0; index < fimAoContrario.length; index++) {
        if(aocontrario[index] !== fimAoContrario[index]) {
            resultado = false;
            break;
        } else {
            resultado = true;
        }   
    }
    return resultado;
}
console.log(verifyEndWord("trybe","ben"));