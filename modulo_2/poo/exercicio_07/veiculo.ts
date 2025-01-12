class Veiculo {
    private _placa: String;
    private _ano: number;

    constructor(placa: String, ano: number) {
        this._placa = placa;
        this._ano = ano;
    }

    public get placa(): String {
        return this._placa;
    }

    public set placa(placa: String) {
        this._placa = placa;
    }

    public get ano(): number {
        return this._ano;
    }

    public set ano(ano: number) {
        this._ano = ano;
    }
}

class Carro extends Veiculo {
    private _modelo: String;

    constructor(placa: String, ano: number, modelo: String) {
        super(placa, ano);
        this._modelo = modelo;
    }

    public get modelo(): String {
        return this._modelo;
    }

    public set modelo(modelo: String) {
        this._modelo = modelo;
    }
}

class CarroEletrico extends Carro {
    private _autonomiaBateria: number;

    constructor(placa: String, ano: number, modelo: String, autonomiaBateria: number) {
        super(placa, ano, modelo);
        this._autonomiaBateria = autonomiaBateria;
    }
    
    public get autonomiaBateria(): number {
        return this._autonomiaBateria;
    }

    public set autonomiaBateria(autonomiaBateria: number) {
        this._autonomiaBateria = autonomiaBateria;
    }
}


let veiculo01: Veiculo = new Veiculo('ABC0D123', 2025);
console.log(veiculo01.placa);
console.log(veiculo01.ano);
veiculo01.placa = 'RHW2K86';
veiculo01.ano = 2024;
console.log(veiculo01.placa);
console.log(veiculo01.ano);

let carro01: Carro = new Carro('JKW1N23', 2020, 'Ferrari');
console.log(carro01.placa);
console.log(carro01.ano);
console.log(carro01.modelo);
carro01.placa = 'ZWL1S23'
carro01.ano = 2000;
carro01.modelo = 'Corolla';
console.log(carro01.placa);
console.log(carro01.ano);
console.log(carro01.modelo);

let carro02: CarroEletrico = new CarroEletrico('PDB1W23', 2024, 'BYD Dolphin', 300);
console.log(carro02.placa);
console.log(carro02.ano);
console.log(carro02.modelo);
console.log(carro02.autonomiaBateria);
carro02.placa = 'GVT1O23';
carro02.ano = 2022;
carro02.modelo = 'Audi e-Tron';
carro02.autonomiaBateria = 430;
console.log(carro02.placa);
console.log(carro02.ano);
console.log(carro02.modelo);
console.log(carro02.autonomiaBateria);
