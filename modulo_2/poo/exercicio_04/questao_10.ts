class Jogador {
    forca: number;
    nivel: number;
    pontosAtuais: number;

    constructor(forca: number, nivel: number, pontosAtuais: number) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontosAtuais = pontosAtuais;
    }

    calcularAtaque(): number {
        return this.forca * this.nivel;
    }

    atacar(jogadorAtacado: Jogador): void {
        if (jogadorAtacado.estaVivo()){
            jogadorAtacado.pontosAtuais -= this.calcularAtaque();
        }
    }

    estaVivo(): boolean {
        if (this.pontosAtuais > 0) {
            return true;
        }
        else {
            return false;
        }
    }

    toString(): String {
        return `Força: ${this.forca} \nNível: ${this.nivel} \nPontos atuais: ${this.pontosAtuais}`
    }

}

let j1: Jogador = new Jogador(10, 1, 500);
let j2: Jogador = new Jogador(20, 2, 1000);

console.log(j1.estaVivo());
console.log(j2.estaVivo());
console.log(j1.calcularAtaque());
console.log(j2.calcularAtaque());
j1.atacar(j2);
j2.atacar(j1);
console.log(j1.toString());
console.log(j2.toString());
