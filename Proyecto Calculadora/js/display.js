class Display{
    constructor(displayValueBefore,displayValueActualy){
        this.displayValueActualy = displayValueActualy;
        this.displayValueBefore = displayValueBefore;
        this.calculator= new Calculator();
        this.typeOperation = undefined;
        this.valueActualy='';
        this.valueBefore = '';
        this.sings = {
            add: '+',
            split: '/',
            multiplicate:'x',
            subtract: '-'
        }
    }

   

   

    delete(){
        this.valueActualy = this.valueActualy.toString().slice(0,-1);
        this.printValue();
    }

    deleteDisplay(){
        this.valueActualy = '';
        this.valueBefore = '';
        this.typeOperation = undefined;
        this.printValue();
    }
    
    compute(type){
        this.typeOperation !== 'same' && this.calculate();
        this.typeOperation = type;
        this.valueBefore = this.valueActualy || this.valueBefore;
        this.valueActualy = '';
        this.printValue();
    }

    addNumber(number){
        if(number === '.' && this.valueActualy.includes('.'))  return
        this.valueActualy = this.valueActualy.toString() + number.toString();
        this.printValue();
    }

    printValue(){
        this.displayValueActualy.textContent = this.valueActualy;
        this.displayValueBefore.textContent = `${this.valueBefore} ${this.sings[this.typeOperation]|| ''} `;
    }

    calculate(){
        const valueActualy = parseFloat(this.valueBefore);
        const valueBefore = parseFloat(this.valueActualy);

        if( isNaN(valueActualy)  || isNaN(valueBefore) ) return
        this.valueActualy = this.calculator[this.typeOperation](valueBefore, valueActualy);
    }
  
} 