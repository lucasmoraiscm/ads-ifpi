import {question} from 'readline-sync'

function main(){
    let numero = 1

    while (numero != 0){
        numero = get_number('Digite um número: ');

        const divisores = calcular_divisores(numero);
    }
}

function get_number(mensagem){
    const n = Number(question(mensagem));
    return n;
}

function calcular_divisores(n){
    let divisor = 1;

    while (divisor <= n){
        const resto_divisao = n % divisor;

        if (resto_divisao == 0){
            console.log(divisor);
        }

        divisor++;
    }
}

main()