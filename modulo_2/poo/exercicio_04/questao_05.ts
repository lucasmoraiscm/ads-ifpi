class Conta {
    numero: String;
    saldo: number;

    constructor(numero: String, saldo: number) {
    this.numero = numero;
    this.saldo = saldo;
    }

    sacar(valor: number): void {
        this.saldo = this.saldo - valor;
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferir(contaDestino: Conta, valor: number): void {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}

let c1: Conta = new Conta("1",100);
let c2: Conta = new Conta("2",100);
let c3: Conta;
c1 = c2;
c3 = c1;
c1.sacar(10);
c1.transferir(c2,50);
console.log(c1.consultarSaldo());
console.log(c2.consultarSaldo());
console.log(c3.consultarSaldo());
