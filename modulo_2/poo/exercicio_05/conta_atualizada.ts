class ContaAtualizada {
    numero: string;
    saldo: number;
    id: number;
    cliente: Cliente;

    constructor(numero: string, saldo: number, id: number, cliente: Cliente) {
        this.numero = numero;
        this.saldo = saldo;
        this.id = id;
        this.cliente = cliente;
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

    transferir(ContaAtualizadaDestino: ContaAtualizada, valor: number): void {
        this.sacar(valor);
        ContaAtualizadaDestino.depositar(valor);
    }
}

class Cliente {
    id: number;
    nome: String;
    cpf: String;
    dataNascimento: String;
    ContaAtualizadas: ContaAtualizada[];

    constructor(id: number, nome: String, cpf: String, dataNascimento: String) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.ContaAtualizadas = [];
    }
}

class Banco {
    ContaAtualizadas: ContaAtualizada[];
    clientes: Cliente[];

    constructor() {
        this.ContaAtualizadas = [];
        this.clientes = [];
    }

    inserirContaAtualizada(ContaAtualizada: ContaAtualizada): void {
        for (let ContaAtualizadaCadastrada of this.ContaAtualizadas) {
            if (ContaAtualizadaCadastrada.id == ContaAtualizada.id || ContaAtualizadaCadastrada.numero == ContaAtualizada.numero) {
                return;
            }
        }

        this.ContaAtualizadas.push(ContaAtualizada);
    }

    consultar(numero: String): ContaAtualizada {
        let ContaAtualizadaProcurada!: ContaAtualizada;

        for (let ContaAtualizada of this.ContaAtualizadas) {
            if (ContaAtualizada.numero == numero) {
                ContaAtualizadaProcurada = ContaAtualizada;
                return ContaAtualizadaProcurada;
            }
        }

        return ContaAtualizadaProcurada;
    }

    consultarIndice(numero: String): number {
        let indice: number = -1;

        for (let i: number = 0; i < this.ContaAtualizadas.length; i++) {
            if (this.ContaAtualizadas[i].numero == numero) {
                indice = i;
                return indice;
            }
        }

        return indice;
    }

    alterar(ContaAtualizada: ContaAtualizada): void {
        let ContaAtualizadaProcurada: ContaAtualizada = this.consultar(ContaAtualizada.numero);

        if (ContaAtualizadaProcurada) {
            ContaAtualizadaProcurada = ContaAtualizada;
        }
    }

    excluir(numero: String): void {
        let indice: number = this.consultarIndice(numero);

        if (indice != -1) {
            for (let i: number = indice; i < this.ContaAtualizadas.length - 1; i++) {
                this.ContaAtualizadas[i] = this.ContaAtualizadas[i + 1];
            }
            this.ContaAtualizadas.pop();
        }
    }

    depositar(numero: String, valor: number): void {
        let ContaAtualizadaProcurada: ContaAtualizada = this.consultar(numero);

        if (ContaAtualizadaProcurada) {
            ContaAtualizadaProcurada.depositar(valor);
        }
    }

    sacar(numero: String, valor: number): void {
        let ContaAtualizadaProcurada: ContaAtualizada = this.consultar(numero);

        if (ContaAtualizadaProcurada) {
            ContaAtualizadaProcurada.sacar(valor);
        }
    }

    consultarSaldo(numero: String): number {
        let saldo!: number;
        let ContaAtualizadaProcurada: ContaAtualizada = this.consultar(numero);

        if (ContaAtualizadaProcurada) {
            saldo = ContaAtualizadaProcurada.consultarSaldo();
        }

        return saldo;
    }

    transferir(numeroOrigem: String, numeroDestino: String, valor: number): void {
        let ContaAtualizadaOrigem: ContaAtualizada = this.consultar(numeroOrigem);
        let ContaAtualizadaDestino: ContaAtualizada = this.consultar(numeroDestino);

        if (ContaAtualizadaOrigem && ContaAtualizadaDestino) {
            this.sacar(numeroDestino, valor);
            this.depositar(numeroOrigem, valor);
        }
    }

    transferirParaContaAtualizadas(numerosDestino: String[], numeroOrigem: String, valor: number): void {
        for (let numeroDestino of numerosDestino) {
            let ContaAtualizadaOrigem: ContaAtualizada = this.consultar(numeroOrigem);
            let ContaAtualizadaDestino: ContaAtualizada = this.consultar(numeroDestino);

            if (ContaAtualizadaOrigem && ContaAtualizadaDestino) {
                this.sacar(numeroDestino, valor);
                this.depositar(numeroOrigem, valor);
            }
        }
    }

    inserirCliente(cliente: Cliente): void {
        for (let clienteCadastrado of this.clientes) {
            if (clienteCadastrado.id == cliente.id || clienteCadastrado.cpf == cliente.cpf) {
                return;
            }
        }

        this.clientes.push(cliente);
    }

    consultarCliente(cpf: String): Cliente {
        let clienteProcurado!: Cliente;

        for (let cliente of this.clientes) {
            if (cliente.cpf == cpf) {
                clienteProcurado = cliente;
                return clienteProcurado;
            }
        }

        return clienteProcurado;
    }

    associarContaAtualizadaCliente(numeroContaAtualizada: String, cpfCliente: String): void {
        let ContaAtualizada = this.consultar(numeroContaAtualizada);
        let cliente = this.consultarCliente(cpfCliente);

        if (ContaAtualizada != null && cliente != null) {
            ContaAtualizada.cliente = cliente;
            cliente.ContaAtualizadas.push(ContaAtualizada);
        }
    }

    listarContaAtualizadasCliente(cpf: String): ContaAtualizada[] {
        let ContaAtualizadasCliente: ContaAtualizada[] = [];
        let cliente: Cliente = this.consultarCliente(cpf);

        if (cliente != null) {
            for (let clienteCadastrado of this.clientes) {
                if (clienteCadastrado.cpf == cpf) {
                    for (let ContaAtualizada of clienteCadastrado.ContaAtualizadas) {
                        ContaAtualizadasCliente.push(ContaAtualizada);
                    }
                    return ContaAtualizadasCliente;
                }
            }
        }

        return ContaAtualizadasCliente;
    }

    totalizarSaldoCliente(cpf: String): number {
        let saldoCliente: number = 0;
        let cliente = this.consultarCliente(cpf);

        if (cliente != null) {
            for (let clienteCadastrado of this.clientes) {
                if (clienteCadastrado.cpf == cpf) {
                    for (let ContaAtualizada of clienteCadastrado.ContaAtualizadas) {
                        saldoCliente += ContaAtualizada.saldo;
                    }
                    return saldoCliente;
                }
            }
        }

        return saldoCliente;
    }

    quantidadeContaAtualizadas(): number {
        return this.ContaAtualizadas.length;
    }

    totalDepositado(): number {
        let total = 0;

        for (let ContaAtualizada of this.ContaAtualizadas) {
            total += ContaAtualizada.saldo;
        }

        return total;
    }

    mediaSaldo(): number {
        return this.totalDepositado() / this.quantidadeContaAtualizadas();
    }
}

let cliente1: Cliente = new Cliente(1, "Lucas", "12345678910", "11/05/2004");
let cliente2: Cliente = new Cliente(2, "Maria", "01987654321", "01/01/2001");
let cliente3: Cliente = new Cliente(3, "Ana", "11122233344", "01/01/1990");

let ContaAtualizada1: ContaAtualizada = new ContaAtualizada("12345", 1000, 1, cliente1);
let ContaAtualizada2: ContaAtualizada = new ContaAtualizada("54321", 500, 2, cliente1);
let ContaAtualizada3: ContaAtualizada = new ContaAtualizada("99999", 3000, 3, cliente2);
let ContaAtualizada4: ContaAtualizada = new ContaAtualizada("11111", 5000, 4, cliente3);

let banco1: Banco = new Banco();
let banco2: Banco = new Banco();

banco1.inserirCliente(cliente1);
banco1.inserirCliente(cliente2);
banco1.inserirContaAtualizada(ContaAtualizada1);
banco1.inserirContaAtualizada(ContaAtualizada2);
banco1.inserirContaAtualizada(ContaAtualizada3);
banco1.associarContaAtualizadaCliente("12345", "12345678910");
banco1.associarContaAtualizadaCliente("54321", "12345678910");
banco1.associarContaAtualizadaCliente("99999", "01987654321")
console.log(banco1.consultarCliente("12345678910"));
console.log(banco1.listarContaAtualizadasCliente("12345678910"));
console.log(banco1.totalizarSaldoCliente("12345678910"));

banco2.inserirCliente(cliente3);
banco2.inserirContaAtualizada(ContaAtualizada4);
banco2.associarContaAtualizadaCliente("11111", "11122233344")
console.log(banco2.consultarCliente("12345678910"));
console.log(banco2.listarContaAtualizadasCliente("11122233344"));
console.log(banco2.totalizarSaldoCliente("11122233344"));
