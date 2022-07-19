const displayValueBefore = document.getElementById("value-Before");
const displayValueActualy = document.getElementById("value-Actualy");
const buttonNumb = document.querySelectorAll('.number');
const buttonOperator = document.querySelectorAll('.operator');

const display = new Display(displayValueBefore, displayValueActualy);

buttonNumb.forEach(button =>{
    button.addEventListener('click',() => display.addNumber(button.innerHTML));
    });

   buttonOperator.forEach(button =>{
   button.addEventListener('click',() => display.compute(button.value))
   });