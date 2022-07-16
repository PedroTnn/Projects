class Display{
    constructor(displayValueBefore,displayValueActualy){
        this.displayValueActualy = displayValueActualy;
        this.displayValueBefore = displayValueBefore;
        this.calculator = new Calculator();
        this.valueActualy='';
        this.valueBefore = '';
    }
    addNumber(numero){
        this.valueActualy = this.valueActualy + numero;
        this.printValue();
    }

    printValue(){
        this.displayValueActualy.textContent = this.valueActualy;
        this.displayValueBefore.textContent = this.valueBefore;
    }
}