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

    transferir(ContaDestino: ContaAtualizada, valor: number): void {
        this.sacar(valor);
        ContaDestino.depositar(valor);
    }
}

class Cliente {
    id: number;
    nome: String;
    cpf: String;
    dataNascimento: String;
    contas: ContaAtualizada[];

    constructor(id: number, nome: String, cpf: String, dataNascimento: String) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.contas = [];
    }
}

class Banco {
    contas: ContaAtualizada[];
    clientes: Cliente[];

    constructor() {
        this.contas = [];
        this.clientes = [];
    }

    inserirConta(conta: ContaAtualizada): void {
        for (let contaCadastrada of this.contas) {
            if (contaCadastrada.id == conta.id || contaCadastrada.numero == conta.numero) {
                return;
            }
        }

        this.contas.push(conta);
    }

    consultar(numero: String): ContaAtualizada {
        let contaProcurada!: ContaAtualizada;

        for (let conta of this.contas) {
            if (conta.numero == numero) {
                contaProcurada = conta;
                break;
            }
        }

        return contaProcurada;
    }

    consultarIndice(numero: String): number {
        let indice: number = -1;

        for (let i: number = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indice = i;
                break;
            }
        }

        return indice;
    }

    alterar(conta: ContaAtualizada): void {
        let indice = this.consultarIndice(conta.numero);

        if (indice != -1) {
            this.contas[indice] = conta;
        }
    }

    excluir(numero: String): void {
        let indice: number = this.consultarIndice(numero);

        if (indice != -1) {
            for (let i: number = indice; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
        }
    }

    depositar(numero: String, valor: number): void {
        let conta: ContaAtualizada = this.consultar(numero);

        if (conta != null) {
            conta.depositar(valor);
        }
    }

    sacar(numero: String, valor: number): void {
        let conta: ContaAtualizada = this.consultar(numero);

        if (conta != null) {
            conta.sacar(valor);
        }
    }

    consultarSaldo(numero: String): number {
        let saldo!: number;
        let conta: ContaAtualizada = this.consultar(numero);

        if (conta != null) {
            saldo = conta.consultarSaldo();
        }

        return saldo;
    }

    transferir(numeroCredito: String, numeroDebito: String, valor: number): void {
        let contaCredito: ContaAtualizada = this.consultar(numeroCredito);
        let contaDebito: ContaAtualizada = this.consultar(numeroDebito);

        if (contaCredito != null && contaDebito != null) {
            this.sacar(numeroDebito, valor);
            this.depositar(numeroCredito, valor);
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
                break;
            }
        }

        return clienteProcurado;
    }

    associarContaCliente(numeroConta: String, cpfCliente: String): void {
        let conta = this.consultar(numeroConta);
        let cliente = this.consultarCliente(cpfCliente);

        if (conta != null && cliente != null) {
            conta.cliente = cliente;
            cliente.contas.push(conta);
        }
    }

    listarContasCliente(cpf: String): ContaAtualizada[] {
        let contasCliente: ContaAtualizada[] = [];
        let cliente: Cliente = this.consultarCliente(cpf);

        if (cliente != null) {
            for (let clienteCadastrado of this.clientes) {
                if (clienteCadastrado.cpf == cpf) {
                    for (let conta of clienteCadastrado.contas) {
                        contasCliente.push(conta);
                    }
                    return contasCliente;
                }
            }
        }

        return contasCliente;
    }

    totalizarSaldoCliente(cpf: String): number {
        let saldoCliente: number = 0;
        let cliente = this.consultarCliente(cpf);

        if (cliente != null) {
            for (let clienteCadastrado of this.clientes) {
                if (clienteCadastrado.cpf == cpf) {
                    for (let conta of clienteCadastrado.contas) {
                        saldoCliente += conta.saldo;
                    }
                    return saldoCliente;
                }
            }
        }

        return saldoCliente;
    }
}

let cliente1 = new Cliente(1, "Lucas", "12345678910", "11/05/2004");
let cliente2 = new Cliente(2, "Maria", "01987654321", "01/01/2001");
let cliente3 = new Cliente(3, "Ana", "11122233344", "01/01/1990");

let conta1 = new ContaAtualizada("12345", 1000, 1, cliente1);
let conta2 = new ContaAtualizada("54321", 500, 2, cliente1);
let conta3 = new ContaAtualizada("99999", 3000, 3, cliente2);
let conta4 = new ContaAtualizada("11111", 5000, 1, cliente3);

let banco1 = new Banco();
let banco2 = new Banco();

banco1.inserirCliente(cliente1);
banco1.inserirCliente(cliente2);
banco1.inserirConta(conta1);
banco1.inserirConta(conta2);
banco1.inserirConta(conta3);
banco1.associarContaCliente("12345", "12345678910");
banco1.associarContaCliente("54321", "12345678910");
banco1.associarContaCliente("99999", "01987654321")
console.log(banco1.consultarCliente("12345678910"));
console.log(banco1.listarContasCliente("12345678910"));
console.log(banco1.totalizarSaldoCliente("12345678910"));

banco2.inserirCliente(cliente3);
banco2.inserirConta(conta4);
banco2.associarContaCliente("11111", "11122233344")
console.log(banco2.consultarCliente("12345678910"));
console.log(banco2.listarContasCliente("11122233344"));
console.log(banco2.totalizarSaldoCliente("11122233344"));
