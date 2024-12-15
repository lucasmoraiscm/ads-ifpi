import prompt from "prompt-sync";
import { Conta, Cliente, Banco } from "./banco";

let input = prompt();

class App {
    b: Banco;

    constructor(){
        this.b = new Banco();
    }

    menu(): void {
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

    inserirConta(): void {
        console.log("\nCadastrar conta:");

        let numero: string = input('Digite o número da conta: ');
        let saldo: number = parseFloat(input("Digite o saldo inicial da conta: "));
        let conta: Conta = new Conta(numero, saldo);
        this.b.inserirConta(conta);
        console.log("Conta cadastrada com sucesso!");
    }

    consultarConta(): void {
        console.log("\nConsultar conta:");

        let numero: string = input('Digite o número da conta: ');
        this.exibirExtrato(numero);
    }

    exibirExtrato(numero: string): void {
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

    sacar(): void {
        console.log("\nSaque:");

        let numero: string = input('Digite o número da conta: ');
        let valor: number = parseFloat(input('Digite o valor do saque: '));
        this.b.sacar(numero, valor);
        console.log("Saque realizado!");
        this.exibirExtrato(numero);
    }

    depositar(): void {
        console.log("\nDepósito:");
    
        let numero: string = input('Digite o número da conta: ');
        let valor: number = parseFloat(input('Digite o valor do depósito: '));
        this.b.depositar(numero, valor);
        console.log("Depósoto realizado!");
        this.exibirExtrato(numero);
    }

    transferir(): void {
        console.log("\nTransferência:");

        let numeroOrigem: string = input('Digite o número da conta de origem: ');
        let numeroDestino: string = input('Digite o número da conta de destino: ');
        let valor: number = parseFloat(input('Digite o valor da transferência: '));
        this.b.transferir(numeroOrigem, numeroDestino, valor);
        console.log("Transferência realizada!");
        console.log("\nExtrato da conta de origem:");
        this.exibirExtrato(numeroOrigem);
        console.log("\nExtrato da conta de destino:");
        this.exibirExtrato(numeroDestino);
    }

    excluirConta(): void {
        console.log("\nExcluir conta:");

        let numero: string = input('Digite o número da conta: ');
        this.b.excluirConta(numero);
        console.log("Conta excluída com sucesso!");
    }

    totalizacoes(): void {
        console.log("\nTotalizações:");

        console.log(`Quantidade de contas: ${this.b.obterQuantidadeDeContas()}`);
        console.log(`Total depositado no banco: ${this.b.obterTotalDinheiroDepositado()}`);
        console.log(`Média de saldo das contas: ${this.b.calcularMediaSaldoContas()}`);
    }

    mudarTitularidade(): void {
        console.log("\nMudança de titularidade:");

        let numero: string = input('Digite o número da conta: ');
        let cpf: string = input('Digite o CPF do cliente: ')
        this.b.mudarTitularidade(numero, cpf);
        console.log('Mudança de titularidade realizada com sucesso!')
    }

    listarContasSemCliente(): void {
        console.log('\nLista de contas sem clientes:');

        let contasSemCliente = this.b.listarContasSemCliente();

        for (let conta of contasSemCliente) {
            this.exibirExtrato(conta.numero);

            let cpfCliente: string = input('Digite o CPF do cliente: ');
            this.b.associarContaCliente(conta.numero, cpfCliente);
            console.log('Conta associada ao cliente com sucesso!');
        }
    }

    ordemBancaria() {
        console.log('\nOrdem Bancária:')

        let numeroOrigem: string = input('Digite o número da conta de origem: ');
        let numerosDestino: string[] = [];
        let numeroDestino: string;
        let valor: number = parseFloat(input('Digite o valor da transferência: '));

        do {
            numeroDestino = input('Digite o número da conta de destino ou 0 para finalizar: ');
            numerosDestino.push(numeroDestino);
        } while (numeroDestino != '0') {
            numerosDestino.pop();
        }

        this.b.transferirParaContas(numerosDestino, numeroOrigem, valor);

        console.log('Ordem bancária realizada com sucesso!')
    }

    inserirCliente(): void {
        console.log("\nCadastrar cliente:");

        let nome: string = input('Digite o nome do cliente: ');
        let cpf: string = input('Digite o CPF do cliente: ');
        let dataNascimento: Date = new Date(input('Digite a data de nascimento (AAAA-MM-DD): '));
        let cliente: Cliente = new Cliente(nome, cpf, dataNascimento);
        this.b.inserirCliente(cliente);
        console.log('Cliente cadastrado com sucesso!');
    }

    consultarCliente(): void {
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

    associarContaCliente(): void {
        console.log("\nAssociar conta a cliente:");
    
        let numeroConta: string = input('Digite o número da conta: ');
        let cpfCliente: string = input('Digite o CPF do cliente: ');
        this.b.associarContaCliente(numeroConta, cpfCliente);
        console.log('Conta associada ao cliente com sucesso!');
    }

    totalizarSaldoCliente(): void {
        console.log('\nTotalizar saldo por cliente:');
        
        let cpfCliente: string = input('Digite o CPF do cliente: ');
        let total = this.b.totalizarSaldoCliente(cpfCliente);
        console.log(`Total: ${total}`);
    }

    excluirCliente(): void {
        console.log('\nExcluir cliente:')

        let cpfCliente: string = input('Digite o CPF do cliente: ');
        this.b.excluirCliente(cpfCliente);
        console.log('Cliente excluído com sucesso!')
    }
}

let app = new App();

app.menu();
