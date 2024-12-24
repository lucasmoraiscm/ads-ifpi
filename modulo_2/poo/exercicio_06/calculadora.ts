class Calculadora {
    private _operando1: number;
    private _operando2: number;

    constructor (operando1: number, operando2: number) {
        this._operando1 = operando1;
        this._operando2 = operando2;
    }

    public soma(): number {
        return this._operando1 + this._operando2;
    }

    public subtracao(): number {
        return this._operando1 - this._operando2;
    }
}

let calc1 = new Calculadora(10, 20);

console.log(calc1.soma());
console.log(calc1.subtracao());

//console.log(calc1._operando1) Property '_operando1' is private and only accessible within class 'Calculadora'
//console.log(calc1._operando2) Property '_operando2' is private and only accessible within class 'Calculadora'
