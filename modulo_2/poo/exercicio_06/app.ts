import prompt from "prompt-sync";
import { Conta, Cliente, Banco } from "./banco";

let input = prompt();

class App {
    private _b: Banco;

    constructor(){
        this._b = new Banco();
    }

    get b(): Banco {
        return this._b;
    }

    public menu(): void {
        let opcao: string = '';

        do {
            console.log('\nBem vindo! Digite uma opção:');
            console.log('Contas:');
            console.log('1 - Inserir            2 - Consultar           3 - Sacar');
            console.log('4 - Depositar          5 - Excluir             6 - Transferir');
            console.log('7 - Totalizações       8 - Mudar titularidade  9 - Contas sem cliente');
            console.log('10 - Ordem bancária')
            console.log('Clientes:');
            console.log('11 - Inserir           12 - Consultar          13 - Associar');
            console.log('14 - Total aplicado    15 - Excluir');
            console.log("0 - Sair\n")
            opcao = input("Opção: ");

            switch (opcao) {
                case "1":
                    this.inserirConta();
                    break;
                case "2":
                    this.consultarConta();
                    break;
                case "3":
                    this.sacar();
                    break;
                case "4":
                    this.depositar();
                    break;
                case "5":
                    this.excluirConta();
                    break;
                case "6":
                    this.transferir();
                    break;
                case "7":
                    this.totalizacoes();
                    break;
                case "8":
                    this.mudarTitularidade();
                    break;
                case "9":
                    this.listarContasSemCliente();
                    break;
                case "10":
                    this.ordemBancaria();
                    break;
                case "11":
                    this.inserirCliente();
                    break;
                case "12":
                    this.consultarCliente();
                    break;
                case "13":
                    this.associarContaCliente();
                    break;
                case "14":
                    this.totalizarSaldoCliente();
                    break;
                case "15":
                    this.excluirCliente();
                    break;
                case "0":
                    console.log("Saindo...");
                    break;
                default:
                    console.log("Opção inválida!");
            }
            input("Operação finalizada. Pressione <enter> para continuar.");
        } while (opcao != "0");

        console.log("Aplicação encerrada"); 
    }

    public inserirConta(): void {
        console.log("\nCadastrar conta:");

        let numero: string = input('Digite o número da conta: ');
        let saldo: number = parseFloat(input("Digite o saldo inicial da conta: "));
        let conta: Conta = new Conta(numero, saldo);
        this.b.inserirConta(conta);
        console.log("Conta cadastrada com sucesso!");
    }

    public consultarConta(): void {
        console.log("\nConsultar conta:");

        let numero: string = input('Digite o número da conta: ');
        this.exibirExtrato(numero);
    }

    public exibirExtrato(numero: string): void {
        const conta = this.b.consultarConta(numero);
        if (conta) {
            const cliente = conta.cliente;
            console.log("\n=== Extrato da Conta ===");
            console.log(`ID: ${conta.id}`);
            console.log(`Número da conta: ${conta.numero}`);
            console.log(`Saldo: ${conta.saldo}`);
            if (cliente) {
                console.log("\n=== Dados do Cliente ===");
                console.log(`ID: ${cliente.id}`);
                console.log(`Nome: ${cliente.nome}`);
                console.log(`CPF: ${cliente.cpf}`);
            } else {
                console.log("Cliente: Não associado.");
            }
            console.log("=========================\n");
        } else {
            console.log("Conta não encontrada para exibir extrato.");
        }
    }

    public sacar(): void {
        console.log("\nSaque:");

        let numero: string = input('Digite o número da conta: ');
        let valor: number = parseFloat(input('Digite o valor do saque: '));
        let operacaoRealizada = this.b.sacar(numero, valor);

        if (operacaoRealizada) {
            console.log("Saque realizado!");
        this.exibirExtrato(numero);
        }
        else {
            console.log("Dados incorretos! Saque não realizado");
        }
    }

    public depositar(): void {
        console.log("\nDepósito:");
    
        let numero: string = input('Digite o número da conta: ');
        let valor: number = parseFloat(input('Digite o valor do depósito: '));
        let operacaoRealizada = this.b.depositar(numero, valor);

        if (operacaoRealizada) {
            console.log("Depósoto realizado!");
            this.exibirExtrato(numero);
        }
        else {
            console.log("Conta não encontrada!");
        }
    }

    public transferir(): void {
        console.log("\nTransferência:");

        let numeroOrigem: string = input('Digite o número da conta de origem: ');
        let numeroDestino: string = input('Digite o número da conta de destino: ');
        let valor: number = parseFloat(input('Digite o valor da transferência: '));
        let operacaoRealizada = this.b.transferir(numeroOrigem, numeroDestino, valor);

        if (operacaoRealizada) {
            console.log("Transferência realizada!");
            console.log("\nExtrato da conta de origem:");
            this.exibirExtrato(numeroOrigem);
            console.log("\nExtrato da conta de destino:");
            this.exibirExtrato(numeroDestino);
        }
        else {
            console.log("Dados incorretos! Transferência não realizada");
        }
    }

    public excluirConta(): void {
        console.log("\nExcluir conta:");

        let numero: string = input('Digite o número da conta: ');
        let operacaoRealizada = this.b.excluirConta(numero);

        if (operacaoRealizada) {
            console.log("Conta excluída com sucesso!");
        }
        else {
            console.log("Conta não encontrada!");
        }
    }

    public totalizacoes(): void {
        console.log("\nTotalizações:");

        console.log(`Quantidade de contas: ${this.b.obterQuantidadeDeContas()}`);
        console.log(`Total depositado no banco: ${this.b.obterTotalDinheiroDepositado()}`);
        console.log(`Média de saldo das contas: ${this.b.calcularMediaSaldoContas()}`);
    }

    public mudarTitularidade(): void {
        console.log("\nMudança de titularidade:");

        let numero: string = input('Digite o número da conta: ');
        let cpf: string = input('Digite o CPF do cliente: ')
        let operacaoRealizada = this.b.mudarTitularidade(numero, cpf);

        if (operacaoRealizada) {
            console.log('Mudança de titularidade realizada com sucesso!');
        }
        else {
            console.log('Dados incorretos! Mudança de titularidade não realizada');
        }
    }

    public listarContasSemCliente(): void {
        console.log('\nLista de contas sem clientes:');

        let contasSemCliente = this.b.listarContasSemCliente();

        for (let conta of contasSemCliente) {
            this.exibirExtrato(conta.numero);

            let cpfCliente: string = input('Digite o CPF do cliente: ');
            let operacaoRealizada = this.b.associarContaCliente(conta.numero, cpfCliente);

            if (operacaoRealizada) {
                console.log('Conta associada ao cliente com sucesso!');
            }
            else {
                console.log('Cliente não encontrado!')
            }
        }
    }

    public ordemBancaria(): void {
        console.log('\nOrdem Bancária:')

        let numeroOrigem: string = input('Digite o número da conta de origem: ');
        let valor: number = parseFloat(input('Digite o valor da transferência: '));
        let quantidadeContas: number = parseInt(input('Digite a quantidade de contas que receberá a tranferência: '))
        let numerosDestino: string[] = [];
        let numeroDestino: string;

        for (let i = 0; i < quantidadeContas; i++) {
            numeroDestino = input('Digite o número da conta de destino: ');
            numerosDestino.push(numeroDestino);
        }

        let operacaoRealizada = this.b.transferirParaContas(numerosDestino, numeroOrigem, valor);

        if (operacaoRealizada) {
            console.log('Ordem bancária realizada com sucesso!')
        }
        else {
            console.log('Dados incorretos! Ordem bancária não realizada.')
        }
    }

    public inserirCliente(): void {
        console.log("\nCadastrar cliente:");

        let nome: string = input('Digite o nome do cliente: ');
        let cpf: string = input('Digite o CPF do cliente: ');
        let dataNascimento: Date = new Date(input('Digite a data de nascimento (AAAA-MM-DD): '));
        let cliente: Cliente = new Cliente(nome, cpf, dataNascimento);

        if (cliente) {
            this.b.inserirCliente(cliente);
            console.log('Cliente cadastrado com sucesso!');
        }
        else {
            console.log('Dados incorretos! Cliente não cadastrado')
        }
    }

    public consultarCliente(): void {
        console.log('\nConsultar cliente:');

        let cpf: string = input('Digite o CPF do cliente: ');
        let cliente = this.b.consultarCliente(cpf);

        if (cliente) {
            console.log(`Cliente encontrado: ID: ${cliente.id}, Nome: ${cliente.nome}, CPF: ${cliente.cpf}`);
        }
        else {
            console.log("Cliente não encontrado.");
        }
    }

    public associarContaCliente(): void {
        console.log("\nAssociar conta a cliente:");
    
        let numeroConta: string = input('Digite o número da conta: ');
        let cpfCliente: string = input('Digite o CPF do cliente: ');
        let operacaoRealizada = this.b.associarContaCliente(numeroConta, cpfCliente);

        if (operacaoRealizada) {
            console.log('Conta associada ao cliente com sucesso!');
        }
        else {
            console.log('Dados incorretos! Conta não associada ao cliente')
        }
    }

    public totalizarSaldoCliente(): void {
        console.log('\nTotalizar saldo por cliente:');
        
        let cpf: string = input('Digite o CPF do cliente: ');
        let cliente: Cliente = this.b.consultarCliente(cpf);

        if (cliente) {
            let total = this.b.totalizarSaldoCliente(cliente.cpf);
            console.log(`Total: ${total}`);
        }
        else {
            console.log('Cliente não encontrado!');
        }
    }

    public excluirCliente(): void {
        console.log('\nExcluir cliente:')

        let cpfCliente: string = input('Digite o CPF do cliente: ');
        let operacaoRealizada = this.b.excluirCliente(cpfCliente);

        if (operacaoRealizada) {
            console.log('Cliente excluído com sucesso!');
        }
        else {
            console.log('Cliente não encontrado!');
        }
    }
}

let contaTeste = new Conta('123-4', 100);
//console.log(contaTeste._id) Property '_id' is private and only accessible within class 'Conta'
console.log(contaTeste.id);
//console.log(contaTeste._numero) Property '_numero' is private and only accessible within class 'Conta'
console.log(contaTeste.numero);
//console.log(contaTeste._saldo) Property '_saldo' is private and only accessible within class 'Conta'
console.log(contaTeste.saldo);
//console.log(contaTeste._cliente) Property '_cliente' is private and only accessible within class 'Conta'
console.log(contaTeste.cliente);

let clienteTeste = new Cliente('Lucas', '12345678910', new Date('2004-05-11'));
//console.log(clienteTeste._id) Property '_id' is private and only accessible within class 'Conta'
console.log(clienteTeste.id);
//console.log(clienteTeste._nome) Property '_nome' is private and only accessible within class 'Conta'
console.log(clienteTeste.nome);
//console.log(clienteTeste._cpf) Property '_cpf' is private and only accessible within class 'Cliente'
console.log(clienteTeste.cpf);
//console.log(clienteTeste._dataNascimento) Property '_dataNascimento' is private and only accessible within class 'Cliente'
console.log(clienteTeste.dataNascimento);
//console.log(clienteTeste._contas) Property '_contas' is private and only accessible within class 'Cliente'
console.log(clienteTeste.contas);

let bancoTeste = new Banco();
//console.log(bancoTeste._contas) Property '_contas' is private and only accessible within class 'Banco'
console.log(bancoTeste.contas)
//console.log(bancoTeste._clientes) Property '_clientes' is private and only accessible within class 'Banco'
console.log(bancoTeste.clientes)
//console.log(bancoTeste._idClienteAtual) Property '_idClienteAtual' is private and only accessible within class 'Banco'
console.log(bancoTeste.idClienteAtual)
//console.log(bancoTeste._idContaAtual) Property '_idContaAtual' is private and only accessible within class 'Banco'
console.log(bancoTeste.idContaAtual)

let app = new App();

app.menu();
