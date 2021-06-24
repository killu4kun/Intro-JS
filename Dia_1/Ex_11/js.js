var sal_bruto = prompt("Insira o salario bruto : ");
console.log(sal_bruto);
var IR = 0;
var sal_liq = 0;
/*if (sal_base<= 1903.98) {
    INSS = 0;
} else if (sal_base >= 1903.99 && sal_bruto <= 2826.65) {
    var IR = (sal_base * 0.075) - 142.80;
}*/

if(sal_bruto <= 1556.94) {
    var INSS = parseInt(sal_bruto)*0.08;
    console.log(INSS);
    var sal_base = sal_bruto - INSS;
    console.log(sal_base);
    var sal_liq = sal_base;
    console.log(sal_liq);
} else if (sal_bruto >= 1556,95 && sal_bruto <= 2594.92) {
    INSS = sal_bruto*0.09;
    console.log(INSS);
    sal_base = sal_bruto - INSS;
    console.log(sal_base);
} else if (sal_bruto >= 2594.93 && sal_bruto <= 5189.82) {
    INSS = sal_bruto * 0.11;
    sal_base = sal_bruto - INSS;
    console.log(sal_base);
} else if (sal_bruto > 5189.82) {
    INSS = 570.88;
    sal_base = sal_bruto - INSS;
    console.log(sal_base);
}

if (sal_base <= 1903.98) {
    IR = 0;
    console.log(sal_base);
} else if (sal_base >= 1903.99 && sal_base <= 2826.65) {
    IR = sal_base*0.075;
    sal_liq = (sal_base - (IR - 142.80));
    console.log(sal_liq);
} else if (sal_base >= 2826.66 && sal_base <= 3751.05) {
    IR = sal_base*0.15;
    sal_liq = (sal_base - (IR - 354.80));
    console.log(sal_liq);
} else if (sal_base >= 3751.06 && sal_base <= 4664.68) {
    IR = sal_base*0.225;
    sal_liq = (sal_base - (IR - 636.13));
    console.log(sal_liq);
} else if (sal_base > 4664.68) {
    IR = sal_base*0.275;
    sal_liq = (sal_base - (IR - 869.36));
    console.log(sal_liq);
}