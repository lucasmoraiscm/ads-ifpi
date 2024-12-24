class Hora {
    private _hora: number;
    private _minutos: number;
    private _segundos: number;

    constructor (hora: number, minutos: number, segundos: number) {
        this._hora = hora;
        this._minutos = minutos;
        this._segundos = segundos;
    }

    public lerHora() {
        return this._hora;
    }

    public lerMinutos() {
        return this._minutos;
    }

    public lerSegundos() {
        return this._segundos;
    }

    public lerHorario() {
        return `${this._hora.toString().padStart(2, '0')}:${this._minutos.toString().padStart(2, '0')}:${this._segundos.toString().padStart(2, '0')}`
    }

}

let h1 = new Hora(11, 28, 7);

console.log(h1.lerHora());
console.log(h1.lerMinutos());
console.log(h1.lerSegundos());
console.log(h1.lerHorario());
