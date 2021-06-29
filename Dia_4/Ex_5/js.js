let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: "sim",
  };
  
let info1 = {
    personagem: 'Tio Patinhas',
    origem: "Christimas on Bear Mountain,Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: "sim",
  };
  
  for (const key in info) {
      console.log(info[key]+" e "+info1[key]);
  }
  