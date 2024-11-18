class Equipamento {
    ligado: boolean;

    constructor(ligado: boolean) {
        this.ligado = ligado;
    }

    liga(): void {
        if (!this.estaLigado()){
           this.ligado = true; 
        }
    }

    desliga(): void {
        if (this.estaLigado()){
            this.ligado = false;
        }
    }

    inverte(): void {
        if (this.ligado == true){
            this.desliga();
        }
        else {
            this.liga();
        }
    }

    estaLigado(): boolean {
        return this.ligado;
    }
}

let e1: Equipamento = new Equipamento(true);

console.log(e1.estaLigado());
e1.desliga()
console.log(e1.estaLigado());
e1.liga()
console.log(e1.estaLigado());
e1.inverte()
console.log(e1.estaLigado());
