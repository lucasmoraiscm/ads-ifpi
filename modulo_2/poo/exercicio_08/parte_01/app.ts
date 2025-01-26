import prompt from "prompt-sync";
import { Conta, Cliente, Banco, Poupanca, ContaImposto } from "./banco";
import * as fs from 'fs';

class App {
    private _caminhoArquivo: string;
    private _input: prompt.Prompt;
    private _banco: Banco;

    constructor(){
        this._banco = new Banco();
        this._input = prompt();
        this._caminhoArquivo = './contas.txt'
        this.recuperarContasDeArquivo();
    }

    public get banco(): Banco {
        return this._banco;
    }

    public get input(): prompt.Prompt {
        return this._input;
    }

    public get caminhoArquivo(): string {
        return this._caminhoArquivo;
    }

    public menu(): void {
        let opcao: string = '';

        do {
            try{
                console.log('\nBem vindo! Digite uma opção:');
                console.log('Contas:');
                console.log('1 - Inserir            2 - Consultar           3 - Sacar');
                console.log('4 - Depositar          5 - Excluir             6 - Transferir');
                console.log('7 - Totalizações       8 - Mudar titularidade  9 - Contas sem cliente');
                console.log('10 - Ordem bancária    11 - Render juros');
                console.log('Clientes:');
                console.log('21 - Inserir           22 - Consultar          23 - Associar');
                console.log('24 - Total aplicado    25 - Excluir');
                console.log("0 - Sair\n")
                opcao = this.input("Opção: ");

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
                        this.renderJuros();
                        break;
                    case "21":
                        this.inserirCliente();
                        break;
                    case "22":
                        this.consultarCliente();
                        break;
                    case "23":
                        this.associarContaCliente();
                        break;
                    case "24":
                        this.totalizarSaldoCliente();
                        break;
                    case "25":
                        this.excluirCliente();
                        break;
                    case "0":
                        console.log("Saindo...");
                        break;
                    default:
                        console.log("Opção inválida!");
                }
                this.input("Operação finalizada. Pressione <enter> para continuar.");
            
            } catch (e: any) {
                console.log(e.message);
            }
        } while (opcao != "0");

        console.log("Aplicação encerrada");
        this.gravarContasEmArquivo();
    }

    public inserirConta(): void {
        console.log("\nCadastrar conta:");

        let id: number = parseInt(this.input('Digite o ID da conta: '))
        let numero: string = this.input('Digite o número da conta: ');
        let saldo: number = parseFloat(this.input("Digite o saldo inicial da conta: "));
        let tipoConta = this.input('Digite o tipo da conta (1 - Conta, 2 - Poupança, 3 - Imposto): ');
        
        let conta: Conta;

        switch (tipoConta) {
            case '1':
                conta = new Conta(id, numero, saldo);
                this.banco.inserirConta(conta);
                console.log("Conta cadastrada com sucesso!");
                break;
            case '2':
                let taxaJuros: number = parseFloat(this.input('Digite a taxa de juros da poupança: '))
                conta = new Poupanca(id, numero, saldo, taxaJuros);
                this.banco.inserirConta(conta);
                console.log("Conta cadastrada com sucesso!");
                break
            case '3':
                let taxaImposto: number = parseFloat(this.input('Digite a taxa do imposto: '));
                conta = new ContaImposto(id, numero, saldo, taxaImposto);
                this.banco.inserirConta(conta);
                console.log("Conta cadastrada com sucesso!");
                break;
            default:
                console.log("Opção inválida!");
        }
    }

    public consultarConta(): void {
        console.log("\nConsultar conta:");

        let numero: string = this.input('Digite o número da conta: ');
        this.exibirExtrato(numero);
    }

    public exibirExtrato(numero: string): void {
        const conta = this.banco.consultarConta(numero);
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
                console.log(`Data de Nascimento: ${cliente.dataNascimento.getDate() + 1}/${cliente.dataNascimento.getMonth() + 1}/${cliente.dataNascimento.getFullYear()}`);
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

        let numero: string = this.input('Digite o número da conta: ');
        let valor: number = parseFloat(this.input('Digite o valor do saque: '));
        let operacaoRealizada = this.banco.sacar(numero, valor);

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
    
        let numero: string = this.input('Digite o número da conta: ');
        let valor: number = parseFloat(this.input('Digite o valor do depósito: '));
        let operacaoRealizada = this.banco.depositar(numero, valor);

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

        let numeroOrigem: string = this.input('Digite o número da conta de origem: ');
        let numeroDestino: string = this.input('Digite o número da conta de destino: ');
        let valor: number = parseFloat(this.input('Digite o valor da transferência: '));
        let operacaoRealizada = this.banco.transferir(numeroOrigem, numeroDestino, valor);

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

        let numero: string = this.input('Digite o número da conta: ');
        let operacaoRealizada = this.banco.excluirConta(numero);

        if (operacaoRealizada) {
            console.log("Conta excluída com sucesso!");
        }
        else {
            console.log("Conta não encontrada!");
        }
    }

    public totalizacoes(): void {
        console.log("\nTotalizações:");

        console.log(`Quantidade de contas: ${this.banco.obterQuantidadeDeContas()}`);
        console.log(`Total depositado no banco: ${this.banco.obterTotalDinheiroDepositado()}`);
        console.log(`Média de saldo das contas: ${this.banco.calcularMediaSaldoContas()}`);
    }

    public mudarTitularidade(): void {
        console.log("\nMudança de titularidade:");

        let numero: string = this.input('Digite o número da conta: ');
        let cpf: string = this.input('Digite o CPF do cliente: ')
        let operacaoRealizada = this.banco.mudarTitularidade(numero, cpf);

        if (operacaoRealizada) {
            console.log('Mudança de titularidade realizada com sucesso!');
        }
        else {
            console.log('Dados incorretos! Mudança de titularidade não realizada');
        }
    }

    public listarContasSemCliente(): void {
        console.log('\nLista de contas sem clientes:');

        let contasSemCliente = this.banco.listarContasSemCliente();

        for (let conta of contasSemCliente) {
            this.exibirExtrato(conta.numero);

            let cpfCliente: string = this.input('Digite o CPF do cliente: ');
            let operacaoRealizada = this.banco.associarContaCliente(conta.numero, cpfCliente);

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

        let numeroOrigem: string = this.input('Digite o número da conta de origem: ');
        let valor: number = parseFloat(this.input('Digite o valor da transferência: '));
        let quantidadeContas: number = parseInt(this.input('Digite a quantidade de contas que receberá a tranferência: '))
        let numerosDestino: string[] = [];
        let numeroDestino: string;

        for (let i = 0; i < quantidadeContas; i++) {
            numeroDestino = this.input('Digite o número da conta de destino: ');
            numerosDestino.push(numeroDestino);
        }

        let operacaoRealizada = this.banco.transferirParaContas(numerosDestino, numeroOrigem, valor);

        if (operacaoRealizada) {
            console.log('Ordem bancária realizada com sucesso!')
        }
        else {
            console.log('Dados incorretos! Ordem bancária não realizada.')
        }
    }

    public renderJuros(): void {
        console.log("\nRender Juros:");

        let numero: string = this.input('Digite o número da conta: ');
        let operacaoRealizada = this.banco.renderJuros(numero);

        if (operacaoRealizada) {
            console.log("Os juros renderam com sucesso!")
        }
        else {
            console.log("Conta incorreta!");
        }
    }

    public recuperarContasDeArquivo(): void {
        const fileContent: string = fs.readFileSync(this.caminhoArquivo, 'utf-8');

        const lines: string[] = fileContent.split(/\r?\n/);

        console.log("Iniciando leitura de arquivo");

        for (let line of lines) {
            if (line != '') {
                let dadosLinha: string[] = line.split(';');
                let tipoConta: string = dadosLinha[0];
                let dataNascimento: string[];
                let conta: Conta;
                let cliente: Cliente;

                switch(tipoConta) {
                    case 'C':
                        conta = new Conta(parseInt(dadosLinha[1]), dadosLinha[2], parseFloat(dadosLinha[3]));
                        dataNascimento = dadosLinha[7].split('/');
                        cliente = new Cliente(parseInt(dadosLinha[4]), dadosLinha[5], dadosLinha[6], new Date(`${dataNascimento[2]}-${dataNascimento[1]}-${dataNascimento[0]}`));
                        this.banco.inserirConta(conta);
                        this.banco.inserirCliente(cliente);
                        this.banco.associarContaCliente(conta.numero, cliente.cpf);
                        console.log(`Conta ${conta.numero} carregada`);
                        break;
                    case 'CP':
                        conta = new Poupanca(parseInt(dadosLinha[1]), dadosLinha[2], parseFloat(dadosLinha[3]), parseFloat(dadosLinha[4]));
                        dataNascimento = dadosLinha[8].split('/');
                        cliente = new Cliente(parseInt(dadosLinha[5]), dadosLinha[6], dadosLinha[7], new Date(`${dataNascimento[2]}-${dataNascimento[1]}-${dataNascimento[0]}`));
                        this.banco.inserirConta(conta);
                        this.banco.inserirCliente(cliente);
                        this.banco.associarContaCliente(conta.numero, cliente.cpf);
                        console.log(`Conta ${conta.numero} carregada`);
                        
                        break;
                    case 'CI':
                        conta = new ContaImposto(parseInt(dadosLinha[1]), dadosLinha[2], parseFloat(dadosLinha[3]), parseFloat(dadosLinha[4]));
                        dataNascimento = dadosLinha[8].split('/');
                        cliente = new Cliente(parseInt(dadosLinha[5]), dadosLinha[6], dadosLinha[7], new Date(`${dataNascimento[2]}-${dataNascimento[1]}-${dataNascimento[0]}`));
                        this.banco.inserirConta(conta);
                        this.banco.inserirCliente(cliente);
                        this.banco.associarContaCliente(conta.numero, cliente.cpf);
                        console.log(`Conta ${conta.numero} carregada`);
                        
                        break;
                }
            }
            else {
                continue;
            }            
        }

        console.log("fim do arquivo");
    }

    public gravarContasEmArquivo(): void {
        console.log("Iniciando a gravação de contas em arquivo.");
        let contas = this.banco.listarCopiaContas();
        fs.writeFileSync(this.caminhoArquivo, '');

        for (let conta of contas){
            let dia: string = String(conta.cliente.dataNascimento.getDate() + 1).padStart(2, '0');
            let mes: string = String(conta.cliente.dataNascimento.getMonth() + 1).padStart(2, '0');
            let ano: string = String(conta.cliente.dataNascimento.getFullYear())
            let dataNascimento: string = `${dia}/${mes}/${ano}`;

            if (conta instanceof Poupanca) {
                let dadosConta: string = `CP;${conta.id};${conta.numero};${conta.saldo};${conta.taxaDeJuros};${conta.cliente.id};${conta.cliente.nome};${conta.cliente.cpf};${dataNascimento}\n`;
                fs.appendFileSync(this.caminhoArquivo, dadosConta);
            }
            else if (conta instanceof ContaImposto) {
                let dadosConta: string = `CI;${conta.id};${conta.numero};${conta.saldo};${conta.taxaDesconto};${conta.cliente.id};${conta.cliente.nome};${conta.cliente.cpf};${dataNascimento}\n`;
                fs.appendFileSync(this.caminhoArquivo, dadosConta);
            }
            else {
                let dadosConta: string = `C;${conta.id};${conta.numero};${conta.saldo};${conta.cliente.id};${conta.cliente.nome};${conta.cliente.cpf};${dataNascimento}\n`;
                fs.appendFileSync(this.caminhoArquivo, dadosConta);
            }
        }

        console.log("Contas salvas em arquivo.");
    }

    public inserirCliente(): void {
        console.log("\nCadastrar cliente:");

        let id: number = parseInt(this.input('Digite o nome do cliente: '));
        let nome: string = this.input('Digite o nome do cliente: ');
        let cpf: string = this.input('Digite o CPF do cliente: ');
        let dataNascimento: Date = new Date(this.input('Digite a data de nascimento (AAAA-MM-DD): '));
        let cliente: Cliente = new Cliente(id, nome, cpf, dataNascimento);

        if (cliente) {
            this.banco.inserirCliente(cliente);
            console.log('Cliente cadastrado com sucesso!');
        }
        else {
            console.log('Dados incorretos! Cliente não cadastrado')
        }
    }

    public consultarCliente(): void {
        console.log('\nConsultar cliente:');

        let cpf: string = this.input('Digite o CPF do cliente: ');
        let cliente = this.banco.consultarCliente(cpf);

        if (cliente) {
            console.log(`Cliente encontrado: ID: ${cliente.id}, Nome: ${cliente.nome}, CPF: ${cliente.cpf}`);
        }
        else {
            console.log("Cliente não encontrado.");
        }
    }

    public associarContaCliente(): void {
        console.log("\nAssociar conta a cliente:");
    
        let numeroConta: string = this.input('Digite o número da conta: ');
        let cpfCliente: string = this.input('Digite o CPF do cliente: ');
        let operacaoRealizada = this.banco.associarContaCliente(numeroConta, cpfCliente);

        if (operacaoRealizada) {
            console.log('Conta associada ao cliente com sucesso!');
        }
        else {
            console.log('Dados incorretos! Conta não associada ao cliente')
        }
    }

    public totalizarSaldoCliente(): void {
        console.log('\nTotalizar saldo por cliente:');
        
        let cpf: string = this.input('Digite o CPF do cliente: ');
        let cliente: Cliente = this.banco.consultarCliente(cpf);

        if (cliente) {
            let total = this.banco.totalizarSaldoCliente(cliente.cpf);
            console.log(`Total: ${total}`);
        }
        else {
            console.log('Cliente não encontrado!');
        }
    }

    public excluirCliente(): void {
        console.log('\nExcluir cliente:')

        let cpfCliente: string = this.input('Digite o CPF do cliente: ');
        let operacaoRealizada = this.banco.excluirCliente(cpfCliente);

        if (operacaoRealizada) {
            console.log('Cliente excluído com sucesso!');
        }
        else {
            console.log('Cliente não encontrado!');
        }
    }
}

let app: App = new App();

app.menu();

//let conta1: Conta = new Conta(1, '123-4', 100);
//let conta2: Conta = new Poupanca(2, '432-1', 200, 0.05);

//conta1.transferir(conta2, 1000);
