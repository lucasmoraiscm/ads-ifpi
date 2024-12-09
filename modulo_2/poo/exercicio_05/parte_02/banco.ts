export class Conta2 {
    numero: string;
    saldo: number;

    constructor(numero: string, saldo: number) {
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
        return this.saldo
    }

    transferir(ContaDestino: Conta2, valor: number): void {
        this.sacar(valor);
        ContaDestino.depositar(valor);
    }
}

export class Banco2 {
    contas: Conta2[];

    constructor() {
        this.contas = [];
    }

    inserirConta(conta: Conta2): void {
        this.contas.push(conta);
    }

    consultar(numero: String): Conta2 {
        let contaProcurada!: Conta2;

        for (let conta of this.contas) {
            if (conta.numero == numero) {
                contaProcurada = conta;
                return contaProcurada;
            }
        }

        return contaProcurada;
    }

    consultarIndice(numero: String): number {
        let indice: number = -1;

        for (let i: number = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indice = i;
                return indice;
            }
        }

        return indice;
    }

    alterar(conta: Conta2): void {
        let contaProcurada: Conta2 = this.consultar(conta.numero);

        if (contaProcurada) {
            contaProcurada = conta;
        }
    }

    excluir(numero: String): void {
        let indice: number = this.consultarIndice(numero);

        if (indice != -1) {
            for (let i: number = indice; i < this.contas.length - 1; i++) {
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
        }
    }

    depositar(numero: String, valor: number): void {
        let contaProcurada: Conta2 = this.consultar(numero);

        if (contaProcurada) {
            contaProcurada.depositar(valor);
        }
    }

    sacar(numero: String, valor: number): void {
        let contaProcurada: Conta2 = this.consultar(numero);

        if (contaProcurada) {
            contaProcurada.sacar(valor);
        }
    }

    consultarSaldo(numero: String): number {
        let saldo!: number;
        let contaProcurada: Conta2 = this.consultar(numero);

        if (contaProcurada) {
            saldo = contaProcurada.consultarSaldo();
        }

        return saldo;
    }

    transferir(numeroOrigem: String, numeroDestino: String, valor: number): void {
        let contaOrigem: Conta2 = this.consultar(numeroOrigem);
        let contaDestino: Conta2 = this.consultar(numeroDestino);

        if (contaOrigem && contaDestino) {
            this.sacar(numeroDestino, valor);
            this.depositar(numeroOrigem, valor);
        }
    }

    transferirParaContas(numerosDestino: String[], numeroOrigem: String, valor: number): void {
        for (let numeroDestino of numerosDestino) {
            let contaOrigem: Conta2 = this.consultar(numeroOrigem);
            let contaDestino: Conta2 = this.consultar(numeroDestino);

            if (contaOrigem && contaDestino) {
                this.sacar(numeroDestino, valor);
                this.depositar(numeroOrigem, valor);
            }
        }
    }

    quantidadeContas(): number {
        return this.contas.length;
    }

    totalDepositado(): number {
        let total = 0;

        for (let conta of this.contas) {
            total += conta.saldo;
        }

        return total;
    }

    mediaSaldo(): number {
        return this.totalDepositado() / this.quantidadeContas();
    }
}
