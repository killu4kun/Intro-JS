var xadrez = "Insira aqui :".toLowerCase(); 

switch (xadrez) {
    case "bishop":
        console.log("movimento x");
        break;
    case "knight":
        console.log("movimento y");
    case "pawn":
        console.log("movimento z");
    case "tower":
        console.log("movimento a");
    case "rook":
        console.log("movimento b");
    case "queen":
        console.log("movimento c");
    case "king":
        console.log("movimento v");
    default:
        break;
}