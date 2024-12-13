class Conta2 {
    id: number;
    numero: string;
    saldo: number;
    cliente!: Cliente2;

    constructor(numero: string, saldo: number) {
        this.id = 0;
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

class Cliente2 {
    id: number;
    nome: string;
    cpf: string;
    dataNascimento: Date;
    contas: Conta2[];

    constructor(nome: string, cpf: string, dataNascimento: Date) {
        this.id = 0;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.contas = [];
    }
}

class Banco2 {
    contas: Conta2[];
    clientes: Cliente2[];
    idClienteAtual: number;
    idContaAtual: number;

    constructor() {
        this.contas = [];
        this.clientes = [];
        this.idClienteAtual = 0;
        this.idContaAtual = 0;
    }

    inserirConta(conta: Conta2): void {
        conta.id = this.idContaAtual++;
        this.contas.push(conta);
    }

    consultarConta(numero: String): Conta2 {
        let contaProcurada!: Conta2;

        for (let conta of this.contas) {
            if (conta.numero == numero) {
                contaProcurada = conta;
                return contaProcurada;
            }
        }

        return contaProcurada;
    }

    consultarContaPorIndice(numero: String): number {
        let indiceProcurado: number = -1;

        for (let i: number = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indiceProcurado = i;
                return indiceProcurado;
            }
        }

        return indiceProcurado;
    }

    alterar(conta: Conta2): void {
        let contaProcurada: Conta2 = this.consultarConta(conta.numero);

        if (contaProcurada) {
            contaProcurada = conta;
        }
    }

    excluir(numero: String): void {
        let indiceProcurado: number = this.consultarContaPorIndice(numero);

        if (indiceProcurado != -1) {
            for (let i: number = indiceProcurado; i < this.contas.length - 1; i++) {
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
        }
    }

    inserirCliente(cliente: Cliente2): void {
        cliente.id = this.idClienteAtual++;
        this.clientes.push(cliente);
    }

    consultarCliente(cpf: string): Cliente2 {
        let clienteProcurado!: Cliente2;

        for (let cliente of this.clientes) {
            if (cliente.cpf == cpf) {
                clienteProcurado = cliente;
            }
        }

        return clienteProcurado;
    }

    sacar(numero: String, valor: number): void {
        let contaProcurada: Conta2 = this.consultarConta(numero);

        if (contaProcurada) {
            contaProcurada.sacar(valor);
        }
    }

    depositar(numero: String, valor: number): void {
        let contaProcurada: Conta2 = this.consultarConta(numero);

        if (contaProcurada) {
            contaProcurada.depositar(valor);
        }
    }

    consultarSaldo(numero: String): number {
        let saldo!: number;
        let contaProcurada: Conta2 = this.consultarConta(numero);

        if (contaProcurada) {
            saldo = contaProcurada.consultarSaldo();
        }

        return saldo;
    }

    transferir(numeroOrigem: String, numeroDestino: String, valor: number): void {
        let contaOrigem: Conta2 = this.consultarConta(numeroOrigem);
        let contaDestino: Conta2 = this.consultarConta(numeroDestino);

        if (contaOrigem && contaDestino) {
            contaOrigem.transferir(contaDestino, valor);
        }
    }

    transferirParaContas(numerosDestino: String[], numeroOrigem: String, valor: number): void {
        for (let numeroDestino of numerosDestino) {
            let contaOrigem: Conta2 = this.consultarConta(numeroOrigem);
            let contaDestino: Conta2 = this.consultarConta(numeroDestino);

            if (contaOrigem && contaDestino) {
                contaOrigem.transferir(contaDestino, valor);
            }
        }
    }

    associarContaCliente(numeroConta: string, cpfCliente: string): void {
        let contaProcurada: Conta2 = this.consultarConta(numeroConta);
        let clienteProcurado: Cliente2 = this.consultarCliente(cpfCliente);

        if (contaProcurada && clienteProcurado) {
            contaProcurada.cliente = clienteProcurado;
            clienteProcurado.contas.push(contaProcurada);
        }
    }

    jaExisteContaParaCliente(cliente: Cliente2, conta: Conta2): boolean {
        let jaExiste: boolean = false;

        if (conta.cliente != null) {
            if (conta.cliente.cpf == cliente.cpf) {
                jaExiste = true;
            } 
            else {
                for (let contaAssociada of cliente.contas) {
                    if (contaAssociada.numero == conta.numero) {
                        jaExiste = true;
                    }
                }
            }
        }

        return jaExiste;
    }

    listarContasCliente(cpf: string): Conta2[] {
        let clienteProcurado: Cliente2 = this.consultarCliente(cpf);
        let contas: Conta2[] = [];

        if (clienteProcurado) {
            contas = clienteProcurado.contas;
        }

        return contas;
    }

    obterQuantidadeDeContas(): number {
        return this.contas.length;
    }

    totalizarSaldoCliente(cpf: string): number {
        let clienteProcurado: Cliente2 = this.consultarCliente(cpf);
        let total: number = 0;

        if (clienteProcurado){
            for (let conta of clienteProcurado.contas) {
                total += conta.saldo;
            }
        }

        return total;
    }

    obterTotalDinheiroDepositado(): number {
        let total: number = 0;

        for (let conta of this.contas) {
            total += conta.saldo;
        }

        return total;
    }

    calcularMediaSaldoContas(): number {
        return this.obterTotalDinheiroDepositado() / this.obterQuantidadeDeContas();
    }
}


export {Conta2, Cliente2, Banco2};