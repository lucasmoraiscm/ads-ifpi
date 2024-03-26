import {question} from 'readline-sync'

function main(){
    const x = get_number('Digite o valor de X: ');
    const n = get_number('Digite o valor de N: ');

    const divisao = calcular_divisao_x_n(x, n);4

    console.log(divisao)
}

function get_number(mensagem){
    const n = Number(question(mensagem));
    return n;
}

function calcular_divisao_x_n(x, n){
    let valor_x = x;
    let valor_n = n;
    let resultado = 0;

    while (valor_n != 2){
        resultado = valor_x / valor_n;

        const calculo = `
        X = ${valor_x.toFixed(0)}
        N = ${valor_n.toFixed(0)}
        ${valor_x.toFixed(0)} / ${valor_n.toFixed(0)} = ${resultado.toFixed(0)}
        `
        console.log(calculo);

        valor_x = resultado;
        valor_n--;   
    }

    return `N = ${valor_n.toFixed(0)}`;
}

main()