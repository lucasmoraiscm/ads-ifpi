class Conta {
    private _id: number;
    private _numero: string;
    private _saldo: number;
    private _cliente!: Cliente;

    constructor(id: number, numero: string, saldo: number) {
        this._id = id;
        this._numero = numero;
        this._saldo = saldo;
        this.validaValor(this._saldo);
    }

    public get id(): number {
        return this._id;
    }

    public get numero(): string {
        return this._numero;
    }

    public get saldo(): number {
        return this._saldo;
    }

    public get cliente(): Cliente {
        return this._cliente;
    }

    public set cliente(cliente: Cliente) {
        this._cliente = cliente;
    }

    public validaValor(valor: any): void {
        if (typeof valor != 'number' || isNaN(valor) || valor <= 0) {
            throw new Error('Valor inválido: ' + valor);
        }
    }

    public sacar(valor: number): void {
        if (this._saldo < valor) {
            throw new Error('Saldo insuficiente: ' + this._saldo);
        }

        this.validaValor(valor);
        this._saldo = this._saldo - valor;
    }

    public depositar(valor: number): void {
        this.validaValor(valor);
        this._saldo = this._saldo + valor;
    }

    public consultarSaldo(): number {
        return this._saldo
    }

    public transferir(ContaDestino: Conta, valor: number): void {
        this.sacar(valor);
        ContaDestino.depositar(valor);
    }
}

class Poupanca extends Conta {
    private _taxaDeJuros: number;

    constructor(id: number, numero: string, saldo: number, taxaDeJuros: number) {
        super(id, numero, saldo);
        this._taxaDeJuros = taxaDeJuros;
    }

    public get taxaDeJuros(): number {
        return this._taxaDeJuros;
    }
    
    public renderJuros() {
        let juros: number = this.saldo * this.taxaDeJuros;
        this.depositar(juros);
    }
}

class ContaImposto extends Conta {
    private _taxaDesconto: number;

    constructor(id: number, numero: string, saldo: number, taxaDesconto: number) {
        super(id, numero, saldo);
        this._taxaDesconto = taxaDesconto;
    }

    public get taxaDesconto(): number {
        return this._taxaDesconto;
    }

    public sacar(valor: number): void {
        let total = valor + valor * this.taxaDesconto;
        super.sacar(total);
    }
}

class Cliente {
    private _id: number;
    private _nome: string;
    private _cpf: string;
    private _dataNascimento: Date;
    private _contas: Conta[];

    constructor(id: number, nome: string, cpf: string, dataNascimento: Date) {
        this._id = id;
        this._nome = nome;
        this._cpf = cpf;
        this._dataNascimento = dataNascimento;
        this._contas = [];
    }

    public get id(): number {
        return this._id;
    }

    public get nome(): string {
        return this._nome;
    }

    public get cpf(): string {
        return this._cpf;
    }

    public get dataNascimento(): Date {
        return this._dataNascimento;
    }

    public get contas(): Conta[] {
        return this._contas;
    }

    public adicionarConta(contaProcurada: Conta) {
        this._contas.push(contaProcurada);
    }

    public listarCopiaContas(): Conta[] {
        let copiaContas: Conta[] = []

        for (let conta of this._contas) {
            if (conta instanceof Poupanca) {
                let contaCopiada = new Poupanca(conta.id, conta.numero, conta.saldo, conta.taxaDeJuros);
                contaCopiada.cliente = conta.cliente;
                copiaContas.push(contaCopiada);
            }
            else if (conta instanceof ContaImposto) {
                let contaCopiada = new ContaImposto(conta.id, conta.numero, conta.saldo, conta.taxaDesconto);
                contaCopiada.cliente = conta.cliente;
                copiaContas.push(contaCopiada);
            }
            else {
                let contaCopiada = new Conta(conta.id, conta.numero, conta.saldo);
                contaCopiada.cliente = conta.cliente;
                copiaContas.push(contaCopiada);
            }
        }

        return copiaContas;
    }
}

class Banco {
    private _contas: Conta[];
    private _clientes: Cliente[];

    constructor() {
        this._contas = [];
        this._clientes = [];
    }

    public inserirConta(conta: Conta): void {
        this._contas.push(conta);
    }

    public listarCopiaContas(): Conta[] {
        let copiaContas: Conta[] = []

        for (let conta of this._contas) {
            if (conta instanceof Poupanca) {
                let contaCopiada = new Poupanca(conta.id, conta.numero, conta.saldo, conta.taxaDeJuros);
                contaCopiada.cliente = conta.cliente;
                copiaContas.push(contaCopiada);
            }
            else if (conta instanceof ContaImposto) {
                let contaCopiada = new ContaImposto(conta.id, conta.numero, conta.saldo, conta.taxaDesconto);
                contaCopiada.cliente = conta.cliente;
                copiaContas.push(contaCopiada);
            }
            else {
                let contaCopiada = new Conta(conta.id, conta.numero, conta.saldo);
                contaCopiada.cliente = conta.cliente;
                copiaContas.push(contaCopiada);
            }
        }

        return copiaContas;
    }

    public consultarConta(numero: string): Conta {
        let contaProcurada!: Conta;

        for (let conta of this._contas) {
            if (conta.numero == numero) {
                contaProcurada = conta;
                break;
            }
        }

        return contaProcurada;
    }

    private consultarContaPorIndice(numero: string): number {
        let indiceProcurado: number = -1;

        for (let i: number = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                indiceProcurado = i;
                break;
            }
        }

        return indiceProcurado;
    }

    public alterar(conta: Conta): void {
        let contaProcurada: Conta = this.consultarConta(conta.numero);

        if (contaProcurada) {
            contaProcurada = conta;
        }
    }

    public excluirConta(numero: string): boolean {
        let indiceProcurado: number = this.consultarContaPorIndice(numero);

        if (indiceProcurado != -1) {
            for (let i: number = indiceProcurado; i < this._contas.length - 1; i++) {
                this._contas[i] = this._contas[i + 1];
            }
            this._contas.pop();
            return true;
        }
        return false;
    }

    public inserirCliente(cliente: Cliente): void {
        this._clientes.push(cliente);
    }

    public consultarCliente(cpf: string): Cliente {
        let clienteProcurado!: Cliente;

        for (let cliente of this._clientes) {
            if (cliente.cpf == cpf) {
                clienteProcurado = cliente;
            }
        }

        return clienteProcurado;
    }

    public consultarClientePorIndice(cpf: string): number {
        let indiceProcurado: number = -1;

        for (let i: number = 0; i < this._clientes.length; i++) {
            if (this._clientes[i].cpf == cpf) {
                indiceProcurado = i;
                return indiceProcurado;
            }
        }

        return indiceProcurado;
    }

    public excluirCliente(cpf: string): boolean {
        let clienteProcurado: Cliente = this.consultarCliente(cpf);
        let indiceProcurado: number = this.consultarClientePorIndice(cpf);

        if (clienteProcurado && indiceProcurado != -1) {
            for (let i = 0; i < this._contas.length; i++) {
                if (this._contas[i].cliente) {
                    if (clienteProcurado.cpf == this._contas[i].cliente.cpf) {
                        this.excluirConta(this._contas[i].numero);
                        i--;
                    }
                }
            }

            for (let i: number = indiceProcurado; i < this._clientes.length - 1; i++) {
                this._clientes[i] = this._clientes[i + 1];
            }
            this._clientes.pop();
            return true;
        }
        return false;
    }

    public sacar(numero: string, valor: number): boolean {
        let contaProcurada: Conta = this.consultarConta(numero);

        if (contaProcurada) {
            contaProcurada.sacar(valor);
            return true;
        }
        return false;
    }

    public depositar(numero: string, valor: number): boolean {
        let contaProcurada: Conta = this.consultarConta(numero);

        if (contaProcurada) {
            contaProcurada.depositar(valor);
            return true;
        }
        return false;
    }

    public consultarSaldo(numero: string): number {
        let saldo!: number;
        let contaProcurada: Conta = this.consultarConta(numero);

        if (contaProcurada) {
            saldo = contaProcurada.consultarSaldo();
        }

        return saldo;
    }

    public transferir(numeroOrigem: string, numeroDestino: string, valor: number): boolean {
        let contaOrigem: Conta = this.consultarConta(numeroOrigem);
        let contaDestino: Conta = this.consultarConta(numeroDestino);

        if (contaOrigem && contaDestino) {
            contaOrigem.transferir(contaDestino, valor);
            return true;
        }
        return false;
    }

    public transferirParaContas(numerosDestino: string[], numeroOrigem: string, valor: number): boolean {
        let contaOrigem: Conta = this.consultarConta(numeroOrigem);

        if (contaOrigem) {
            if ((valor * numerosDestino.length) <= contaOrigem.saldo) {
                for (let numeroDestino of numerosDestino) {
                    let contaDestino: Conta = this.consultarConta(numeroDestino);

                    if (contaDestino) {
                        contaOrigem.transferir(contaDestino, valor);
                    }
                    else {
                        return false;
                    }
                }
                return true;
            }
            return false;
        } 
        return false;
    }

    public associarContaCliente(numeroConta: string, cpfCliente: string): boolean {
        let contaProcurada: Conta = this.consultarConta(numeroConta);
        let clienteProcurado: Cliente = this.consultarCliente(cpfCliente);

        if (contaProcurada && clienteProcurado) {
            contaProcurada.cliente = clienteProcurado;
            clienteProcurado.adicionarConta(contaProcurada);
            return true;
        }
        return false;
    }

    public desassociarContaCliente(numeroConta: string): boolean {
        let contaProcurada: Conta = this.consultarConta(numeroConta);
        let clienteAntigo: Cliente = contaProcurada.cliente;

        if (contaProcurada && clienteAntigo) {
            let indiceProcurado: number = this.consultarContaPorIndice(contaProcurada.numero);

            for (let i: number = indiceProcurado; i < clienteAntigo.contas.length - 1; i++) {
                clienteAntigo.contas[i] = clienteAntigo.contas[i + 1];
            }
            clienteAntigo.contas.pop();
            return true;
        }
        return false;
    }

    public jaExisteContaParaCliente(cliente: Cliente, conta: Conta): boolean {
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

    public listarContasCliente(cpf: string): Conta[] {
        let clienteProcurado: Cliente = this.consultarCliente(cpf);
        let contas: Conta[] = [];

        if (clienteProcurado) {
            contas = clienteProcurado.listarCopiaContas();
        }

        return contas;
    }

    public listarContasSemCliente(): Conta[] {
        let contasSemClientes: Conta[] = [];

        for (let conta of this._contas) {
            if (conta.cliente == null) {
                contasSemClientes.push(conta);
            }
        }

        return contasSemClientes;
    }

    public mudarTitularidade(numeroConta: string, cpfClienteNovo: string): boolean {
        let contaProcurada: Conta = this.consultarConta(numeroConta);
        let clienteNovo: Cliente = this.consultarCliente(cpfClienteNovo);

        if (contaProcurada && clienteNovo) {
            let operacaoRealizada = this.desassociarContaCliente(numeroConta);

            if (operacaoRealizada) {
                this.associarContaCliente(numeroConta, cpfClienteNovo);
                return true;
            }
            return false;
        }
        return false
    }

    public obterQuantidadeDeContas(): number {
        return this._contas.length;
    }

    public renderJuros(numero: string): boolean {
        let contaProcurada:Conta = this.consultarConta(numero);
        if (contaProcurada instanceof Poupanca) {
            contaProcurada.renderJuros();
            return true;
        }
        return false;
    }

    public totalizarSaldoCliente(cpf: string): number {
        let clienteProcurado: Cliente = this.consultarCliente(cpf);
        let total: number = 0;

        if (clienteProcurado){
            for (let conta of clienteProcurado.contas) {
                total += conta.saldo;
            }
        }

        return total;
    }

    public obterTotalDinheiroDepositado(): number {
        let total: number = 0;

        for (let conta of this._contas) {
            total += conta.saldo;
        }

        return total;
    }

    public calcularMediaSaldoContas(): number {
        return this.obterTotalDinheiroDepositado() / this.obterQuantidadeDeContas();
    }
}

export {Conta, Poupanca, ContaImposto, Cliente, Banco};
