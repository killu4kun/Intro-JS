function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

function createDays() {
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  let dayList = document.querySelector("#days");
  for (let i = 0; i < dezDaysList.length; i++) {
    let list = dezDaysList[i];
    let daysLists = document.createElement("li");
    daysLists.classList.add("day");
    if (list === 25) {
      daysLists.classList.add("friday");
    }
    daysLists.innerHTML = list;
    dayList.appendChild(daysLists);
    if (list === 24 || list === 25 || list === 31) {
      daysLists.classList.add("holiday");
      daysLists.innerHTML = list;
      dayList.appendChild(daysLists);
    } else if (list === 4 || list === 11 || list === 18 || list === 25) {
      daysLists.classList.add("friday");
      daysLists.innerHTML = list;
      dayList.appendChild(daysLists);
    }
  }
}
createDays();

const botaoFeriado = document.getElementById("btn-holiday");
botaoFeriado.addEventListener("click", function () {
  const feriados = document.querySelectorAll(".holiday");
  for (i = 0; i < feriados.length; i++) {
    if (feriados[i].style.backgroundColor === "white") {
      feriados[i].style.backgroundColor = "brown";
    } else {
      feriados[i].style.backgroundColor = "white";
    }
  }
});

const sextaFeiras = [4, 11, 18, 25];
const botaoSexta = document.getElementById("btn-friday");
botaoSexta.addEventListener("click", function () {
  const sextas = document.getElementsByClassName("friday");
  for (i = 0; i < sextas.length; i++) {
    if (sextas[i].innerHTML !== "Sextou!") {
      sextas[i].innerHTML = "Sextou!";
    } else {
      sextas[i].innerHTML = sextaFeiras[i];
    }
  }
});
//glauco-sama me ajudou aqui
const zoom = document.getElementById("days");
zoom.addEventListener("mouseover", function (darZoom) {
  darZoom.target.style.fontSize = "50px";
});

const normalZoom = document.getElementById("days");
zoom.addEventListener("mouseout", function (darZoom) {
  darZoom.target.style.fontSize = "20px";
});
function recebeTarefa(tarefa) {
  let desgraça = document.querySelector(".my-tasks");
  let criaSpan = document.createElement("span");
  criaSpan.innerText = tarefa;
  desgraça.appendChild(criaSpan);
}
recebeTarefa("texto");

function recebeCor(cor) {
  let caralho = document.querySelector(".my-tasks");
  let criaDiv = document.createElement("div");
  criaDiv.className = "task";
  criaDiv.style.backgroundColor = cor;
  caralho.appendChild(criaDiv);
}
recebeCor("black");

let selectDivColor = document.getElementsByClassName("task selected");
let mySelect = document.querySelector(".task");
mySelect.addEventListener("click", function (selected) {
  if (selectDivColor.length === 0) {
    selected.target.className = "task selected";
  } else {
    selected.target.className = "task";
  }
});

let selectCalendarColor = document.getElementsByClassName("task selected");
let selectDay = document.querySelector("#days");
let taskDiv = document.querySelector(".task");
let taskColor = taskDiv.style.backgroundColor;
selectDay.addEventListener("click", function (corFundo) {
  let corFundinho = corFundo.target.style.color;
  if (selectCalendarColor.length > 0 && corFundinho !== taskColor) {
    let corzinha = selectCalendarColor[0].style.backgroundColor;
    corFundo.target.style.color = "black";
  } else if (corFundinho === taskColor && selectCalendarColor.length != 0) {
    corFundo.target.style.color = "rgb(119,119,119)";
  }
});
