var l1 = -10;
var l2 = 30;
var l3 = 30;
var soma_lados = l1+l2+l3;

if (l1 <=0 || l2 <= 0 || l3<=0 ) {
    console.log("lado invalido");
} else if (soma_lados != 180) {
    console.log("não é triangulo");
}