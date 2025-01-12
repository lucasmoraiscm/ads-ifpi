class Calculadora {
    private _operando1: number;
    private _operando2: number;

    constructor(operando1: number, operando2: number) {
        this._operando1 = operando1;
        this._operando2 = operando2;
    }

    public get operando1(): number {
        return this._operando1;
    }

    public set operando1(operando1) {
        this._operando1 = operando1;
    }

    public get operando2(): number {
        return this._operando2;
    }

    public set operando2(operando2) {
        this._operando2 = operando2;
    }

    public somar(): number {
        return this.operando1 + this.operando2;
    }
}

class CalculadoraCientifica extends Calculadora {
    constructor(operando1: number, operando2: number) {
        super(operando1, operando2);
    }

    public exponenciar(): number {
        return this.operando1 ** this.operando2;
    }

}

let calculadora01: Calculadora = new Calculadora(1, 2);
console.log(calculadora01.operando1);
console.log(calculadora01.operando2);
console.log(calculadora01.somar());

let calculadora02: CalculadoraCientifica = new CalculadoraCientifica(2, 3);
console.log(calculadora02.operando1);
console.log(calculadora02.operando2);
console.log(calculadora02.somar());
console.log(calculadora02.exponenciar());
