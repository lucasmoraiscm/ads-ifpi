class Conta {
    id: number;
    numero: string;
    saldo: number;
    cliente!: Cliente;

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

    transferir(ContaDestino: Conta, valor: number): void {
        this.sacar(valor);
        ContaDestino.depositar(valor);
    }
}

class Cliente {
    id: number;
    nome: string;
    cpf: string;
    dataNascimento: Date;
    contas: Conta[];

    constructor(nome: string, cpf: string, dataNascimento: Date) {
        this.id = 0;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.contas = [];
    }
}

class Banco {
    contas: Conta[];
    clientes: Cliente[];
    idClienteAtual: number;
    idContaAtual: number;

    constructor() {
        this.contas = [];
        this.clientes = [];
        this.idClienteAtual = 0;
        this.idContaAtual = 0;
    }

    inserirConta(conta: Conta): void {
        conta.id = this.idContaAtual++;
        this.contas.push(conta);
    }

    consultarConta(numero: string): Conta {
        let contaProcurada!: Conta;

        for (let conta of this.contas) {
            if (conta.numero == numero) {
                contaProcurada = conta;
                return contaProcurada;
            }
        }

        return contaProcurada;
    }

    consultarContaPorIndice(numero: string): number {
        let indiceProcurado: number = -1;

        for (let i: number = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indiceProcurado = i;
                return indiceProcurado;
            }
        }

        return indiceProcurado;
    }

    alterar(conta: Conta): void {
        let contaProcurada: Conta = this.consultarConta(conta.numero);

        if (contaProcurada) {
            contaProcurada = conta;
        }
    }

    excluirConta(numero: string): void {
        let indiceProcurado: number = this.consultarContaPorIndice(numero);

        if (indiceProcurado != -1) {
            for (let i: number = indiceProcurado; i < this.contas.length - 1; i++) {
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
        }
    }

    inserirCliente(cliente: Cliente): void {
        cliente.id = this.idClienteAtual++;
        this.clientes.push(cliente);
    }

    consultarCliente(cpf: string): Cliente {
        let clienteProcurado!: Cliente;

        for (let cliente of this.clientes) {
            if (cliente.cpf == cpf) {
                clienteProcurado = cliente;
            }
        }

        return clienteProcurado;
    }

    consultarClientePorIndice(cpf: string): number {
        let indiceProcurado: number = -1;

        for (let i: number = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].cpf == cpf) {
                indiceProcurado = i;
                return indiceProcurado;
            }
        }

        return indiceProcurado;
    }

    excluirCliente(cpf: string): void {
        let clienteProcurado: Cliente = this.consultarCliente(cpf);
        let indiceProcurado: number = this.consultarClientePorIndice(cpf);

        if (clienteProcurado && indiceProcurado != -1) {
            for (let i: number = indiceProcurado; i < this.clientes.length - 1; i++) {
                this.clientes[i] = this.clientes[i + 1];
            }

            this.clientes.pop();

            for (let indiceConta: number = 0; indiceConta < this.contas.length; indiceConta++) {
                if (this.contas[indiceConta].cliente.cpf == clienteProcurado.cpf) {
                    this.contas.splice(indiceConta, 1);
                    indiceConta--;
                }
            }
        }
    }

    sacar(numero: string, valor: number): void {
        let contaProcurada: Conta = this.consultarConta(numero);

        if (contaProcurada) {
            contaProcurada.sacar(valor);
        }
    }

    depositar(numero: string, valor: number): void {
        let contaProcurada: Conta = this.consultarConta(numero);

        if (contaProcurada) {
            contaProcurada.depositar(valor);
        }
    }

    consultarSaldo(numero: string): number {
        let saldo!: number;
        let contaProcurada: Conta = this.consultarConta(numero);

        if (contaProcurada) {
            saldo = contaProcurada.consultarSaldo();
        }

        return saldo;
    }

    transferir(numeroOrigem: string, numeroDestino: string, valor: number): void {
        let contaOrigem: Conta = this.consultarConta(numeroOrigem);
        let contaDestino: Conta = this.consultarConta(numeroDestino);

        if (contaOrigem && contaDestino) {
            contaOrigem.transferir(contaDestino, valor);
        }
    }

    transferirParaContas(numerosDestino: string[], numeroOrigem: string, valor: number): void {
        let contaOrigem: Conta = this.consultarConta(numeroOrigem);

        if (contaOrigem) {
            if ((valor * numerosDestino.length) <= contaOrigem.saldo) {
                for (let numeroDestino of numerosDestino) {
                    let contaDestino: Conta = this.consultarConta(numeroDestino);

                    if (contaDestino) {
                        contaOrigem.transferir(contaDestino, valor);
                    }
                }
            }
        }
    }

    associarContaCliente(numeroConta: string, cpfCliente: string): void {
        let contaProcurada: Conta = this.consultarConta(numeroConta);
        let clienteProcurado: Cliente = this.consultarCliente(cpfCliente);

        if (contaProcurada && clienteProcurado) {
            contaProcurada.cliente = clienteProcurado;
            clienteProcurado.contas.push(contaProcurada);
        }
    }

    jaExisteContaParaCliente(cliente: Cliente, conta: Conta): boolean {
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

    listarContasCliente(cpf: string): Conta[] {
        let clienteProcurado: Cliente = this.consultarCliente(cpf);
        let contas: Conta[] = [];

        if (clienteProcurado) {
            contas = clienteProcurado.contas;
        }

        return contas;
    }

    listarContasSemCliente(): Conta[] {
        let contasSemClientes: Conta[] = [];

        for (let conta of this.contas) {
            if (conta.cliente == null) {
                contasSemClientes.push(conta);
            }
        }

        return contasSemClientes;
    }

    mudarTitularidade(numeroConta: string, cpfClienteNovo: string): void {
        let contaProcurada: Conta = this.consultarConta(numeroConta);
        let clienteNovo: Cliente = this.consultarCliente(cpfClienteNovo);

        if (contaProcurada && clienteNovo) {
            if (contaProcurada.cliente) {
                let clienteAntigo: Cliente = contaProcurada.cliente;
                
                for (let indiceConta: number = 0; indiceConta < clienteAntigo.contas.length; indiceConta++) {
                    if (clienteAntigo.contas[indiceConta].numero == contaProcurada.numero) {
                        clienteAntigo.contas.splice(indiceConta, 1);
                        contaProcurada.cliente = clienteNovo;
                        clienteNovo.contas.push(contaProcurada);
                        break;
                    }
                }
            }
        }
    }

    obterQuantidadeDeContas(): number {
        return this.contas.length;
    }

    totalizarSaldoCliente(cpf: string): number {
        let clienteProcurado: Cliente = this.consultarCliente(cpf);
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

export {Conta, Cliente, Banco};
