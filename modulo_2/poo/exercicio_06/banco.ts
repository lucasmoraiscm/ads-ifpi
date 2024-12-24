class Conta {
    private _id: number;
    private _numero: string;
    private _saldo: number;
    private _cliente!: Cliente;

    constructor(numero: string, saldo: number) {
        this._id = 0;
        this._numero = numero;
        this._saldo = saldo;
    }

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get numero(): string {
        return this._numero;
    }

    get saldo(): number {
        return this._saldo;
    }

    get cliente(): Cliente {
        return this._cliente;
    }

    set cliente(cliente: Cliente) {
        this._cliente = cliente;
    }

    sacar(valor: number): void {
        this._saldo = this._saldo - valor;
    }

    depositar(valor: number): void {
        this._saldo = this._saldo + valor;
    }

    consultarSaldo(): number {
        return this._saldo
    }

    transferir(ContaDestino: Conta, valor: number): void {
        this.sacar(valor);
        ContaDestino.depositar(valor);
    }
}

class Cliente {
    private _id: number;
    private _nome: string;
    private _cpf: string;
    private _dataNascimento: Date;
    private _contas: Conta[];

    constructor(nome: string, cpf: string, dataNascimento: Date) {
        this._id = 0;
        this._nome = nome;
        this._cpf = cpf;
        this._dataNascimento = dataNascimento;
        this._contas = [];
    }

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get nome(): string {
        return this._nome;
    }

    get cpf(): string {
        return this._cpf;
    }

    get dataNascimento(): Date {
        return this._dataNascimento;
    }

    get contas(): Conta[] {
        return this._contas;
    }
}

class Banco {
    private _contas: Conta[];
    private _clientes: Cliente[];
    private _idClienteAtual: number;
    private _idContaAtual: number;

    constructor() {
        this._contas = [];
        this._clientes = [];
        this._idClienteAtual = 0;
        this._idContaAtual = 0;
    }

    get contas(): Conta[] {
        return this._contas;
    }

    get clientes(): Cliente[] {
        return this._clientes;
    }

    get idClienteAtual(): number {
        return this._idClienteAtual;
    }

    get idContaAtual(): number {
        return this._idContaAtual;
    }

    public inserirConta(conta: Conta): void {
        conta.id = this._idContaAtual++;
        this._contas.push(conta);
    }

    public consultarConta(numero: string): Conta {
        let contaProcurada!: Conta;

        for (let conta of this._contas) {
            if (conta.numero == numero) {
                contaProcurada = conta;
                return contaProcurada;
            }
        }

        return contaProcurada;
    }

    private consultarContaPorIndice(numero: string): number {
        let indiceProcurado: number = -1;

        for (let i: number = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                indiceProcurado = i;
                return indiceProcurado;
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
        cliente.id = this._idClienteAtual++;
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
            for (let i: number = indiceProcurado; i < this._clientes.length - 1; i++) {
                this._clientes[i] = this._clientes[i + 1];
            }
            this._clientes.pop();

            for (let i = 0; i < this._contas.length; i++) {
                if (this._contas[i].cliente) {
                    if (clienteProcurado.cpf == this._contas[i].cliente.cpf) {
                        for (let indiceConta = i; indiceConta < this._contas.length - 1; indiceConta++) {
                            this._contas[indiceConta] = this._contas[i + 1];
                        }
                        this._contas.pop()
                        i--;
                    }
                }
            }
            return true;
        }
        return false;
    }

    public sacar(numero: string, valor: number): boolean {
        let contaProcurada: Conta = this.consultarConta(numero);

        if (contaProcurada) {
            if (valor <= contaProcurada.saldo){
                contaProcurada.sacar(valor);
                return true;
            }
            return false;
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
            if (valor <= contaOrigem.saldo) {
                contaOrigem.transferir(contaDestino, valor);
                return true;
            }
            return false;
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
            clienteProcurado.contas.push(contaProcurada);
            return true;
        }
        return false;
    }

    public desassociarContaCliente(numeroConta: string): boolean {
        let contaProcurada: Conta = this.consultarConta(numeroConta);
        let clienteAntigo: Cliente = contaProcurada.cliente;

        if (contaProcurada && clienteAntigo) {
            let indiceConta: number = 0;

            for (let conta of clienteAntigo.contas) {
                if (numeroConta == conta.numero) {
                    break;
                }
                indiceConta++;
            }

            for (let i: number = indiceConta; i < clienteAntigo.contas.length - 1; i++) {
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
            contas = clienteProcurado.contas;
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

export {Conta, Cliente, Banco};
