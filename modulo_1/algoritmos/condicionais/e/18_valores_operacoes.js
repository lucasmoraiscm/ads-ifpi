import {question} from 'readline-sync'

function main(){
    console.log('>>> Verificar a operação solicitada para os 2 números <<<')

    const numero1 = get_number('Número 1: ')
    const numero2 = get_number('Número 2: ')
    const operacao = get_number('Operação: ')

    if (operacao === 1){
        const adicao = calcular_adicao(numero1, numero2)
        console.log(`${numero1} + ${numero2} = ${adicao}`)
    }else if (operacao === 2){
        const subtracao = calcular_subtracao(numero1, numero2)
        console.log(`${numero1} - ${numero2} = ${subtracao}`)
    }else if (operacao === 3){
        const multiplicacao = calcular_multiplicacao(numero1, numero2)
        console.log(`${numero1} x ${numero2} = ${multiplicacao}`)
    }else if (operacao === 4){
        if (numero2 != 0 ){
            const divisao = calcular_divisao(numero1, numero2)
            console.log(`${numero1} / ${numero2} = ${divisao}`)
        }else{
            console.log('Divisão impossível! Divisor igual a 0')
        }
    }else{
        console.log('Operação inválida! Digite uma operação de 1 a 4')
    }
}

function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
}

function calcular_adicao(num1, num2){
    return num1 + num2
}

function calcular_subtracao(num1, num2){
    return num1 - num2
}

function calcular_multiplicacao(num1, num2){
    return num1 * num2
}

function calcular_divisao(num1, num2){
    return num1 / num2
}

main()