class ContaNova {
    numero: String;
    saldo: number;

    constructor(numero: String, saldo: number) {
    this.numero = numero;
    this.saldo = saldo;
    }

    sacar(valor: number): boolean {
        if (this.saldo - valor >= 0){
           this.saldo = this.saldo - valor;
           return true;
        }
        else {
            return false;
        }
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferir(contaDestino: Conta, valor: number): boolean {
        if (this.saldo - valor >= 0) {
            this.sacar(valor);
            contaDestino.depositar(valor);
            return true;
        }
        else {
            return false;
        }
    }
}

let cn1: ContaNova = new ContaNova("1", 100);
let cn2: ContaNova = new ContaNova("2", 500);

console.log(cn1.sacar(1000));
console.log(cn1.consultarSaldo());
console.log(cn1.sacar(10));
console.log(cn1.consultarSaldo());
console.log(cn1.transferir(cn2, 1000));
console.log(cn1.consultarSaldo());
console.log(cn1.transferir(cn2, 10));
console.log(cn1.consultarSaldo());
console.log(cn2.consultarSaldo())
