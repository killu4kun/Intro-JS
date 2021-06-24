var productCost = prompt("Valor de custo : ");
console.log(productCost);
var sellValue = prompt("Valor de Venda : ");
console.log(sellValue);
if (productCost <= 0 || sellValue <= 0) {
    console.log("erro");
} else {
    var tImpostValue = productCost*0.2;
    console.log(tImpostValue);
    var tCostValue = parseInt(productCost)+parseInt(tImpostValue);
    console.log(tCostValue); 
    var profit =  sellValue - tCostValue;
    console.log(profit);
}
