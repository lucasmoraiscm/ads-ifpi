import { Conta2, Banco2 } from "./banco";

let input = require('prompt-sync')();
export {}
let b: Banco2 = new Banco2();
let opcao: String = '';

do {
    console.log('\nBem vindo\nDigite uma opção: ');
    console.log('Contas:\n' +
                '1 - Inserir        2 - Consultar       3 - Sacar\n' +
                '4 - Depositar      5 - Excluir         6 - Transferir\n' +
                '7 – Totalizações');
    console.log("0 - Sair\n")
    opcao = input("Opção: ");

    switch (opcao) {
        case "1":
            inserir();
            break
        case "2":
            consultar();
            break
        case "3":
            sacar();
            break
        case "4":
            depositar();
            break
        case "5":
            excluir();
            break
        case "6":
            transferir();
            break
        case "7":
            totalizacoes();
            break
    }
    input("Operação finalizada. Digite <enter>");
} while (opcao != "0");
console.log("Aplicação encerrada");

function inserir(): void {
    console.log("\nCadastrar conta\n");
    let numero: string = input('Digite o número da conta:');

    let conta: Conta2;
    conta = new Conta2(numero, 0);

    b.inserirConta(conta);
}

function consultar(): void {
    console.log("\nConsultar conta\n");
    let numero: string = input('Digite o número da conta: ');

    console.log(b.consultar(numero))
}

function sacar(): void {
    console.log("\nSacar\n");
    let numero: string = input('Digite o número da conta: ');
    let valor: number = input('Digite o valor: ');

    b.sacar(numero, valor);
}

function depositar(): void {
    console.log("\nDepositar\n");
    
    let numero: string = input('Digite o número da conta: ');
    let valor: number = input('Digite o valor: ');

    b.depositar(numero, valor);
}

function excluir(): void {
    console.log("\nExcluir\n");

    let numero: string = input('Digite o número da conta: ');

    b.excluir(numero);
}

function transferir(): void {
    console.log("\nTransferir\n");

    let numeroOrigem: string = input('Digite o número da conta de origem: ');
    let numeroDestino: string = input('Digite o número da conta de destino: ');
    let valor: number = input('Digite o valor: ');

    b.transferir(numeroOrigem, numeroDestino, valor);
}

function totalizacoes(): void {
    console.log("\nTotalizações\n");

    console.log(`Quantidade de contas: ${b.quantidadeContas()}`);
    console.log(`Total depositado: ${b.totalDepositado()}`);
    console.log(`Média de saldo das contas: ${b.mediaSaldo()}`);
}
