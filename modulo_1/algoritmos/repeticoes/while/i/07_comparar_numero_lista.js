import {question} from 'readline-sync'

function main(){
    const numero = get_number('Digite o número correto: ');

    const verificacao = verificar_igual(numero);

    console.log(verificacao);
}

function get_number(mensagem){
    const n = Number(question(mensagem));
    return n;
}

function verificar_igual(n){
    let novo_numero = get_number('Digite um número: ');

    while (novo_numero != n){
        novo_numero = get_number('Digite outro número: ');
    }
    
    return `O número digitado é igual ao número correto: ${n}`
}

main()