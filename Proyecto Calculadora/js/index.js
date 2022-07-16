const displayValueBefore = document.getElementById("value-before");
const displayValueActualy = document.getElementById("value-Actualy");
const buttonNumb = document.querySelectorAll('.number');
const botonesOperadores = document.querySelectorAll('.operator');

const display = new Display(displayValueBefore, displayValueActualy);

buttonNumb.forEach(boton =>{
    boton.addEventListener('click',() => display.addNumber(boton.innerHTML))
    });