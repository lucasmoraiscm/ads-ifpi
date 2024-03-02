import {question} from 'readline-sync'

function main(){
    console.log('>>> Verificar o resto da divisão de duas variáveis e executar deteminada ação <<<')

    const numero1 = get_number('Número inteiro 1: ')
    const numero2 = get_number('Número inteiro 2: ')

    const resto = verificar_resto(numero1, numero2)

    if (resto === 1){
        const soma = calcular_soma(numero1, numero2, resto)
        console.log(`${numero1} + ${numero2} + ${resto} = ${soma}`)
    }else if (resto === 2){
        const par_impar1 = verificar_par(numero1)
        const par_impar2 = verificar_par(numero2)
        console.log(`${numero1} é ${par_impar1} e ${numero2} é ${par_impar2}`)
    }else if (resto === 3){
        const produto = calcular_produto(numero1, numero2)
        console.log(`(${numero1} + ${numero2}) x ${numero1} = ${produto}`)
    }else if (resto === 4){
        if (numero2 != 0){
            const divisao = calcular_divisao(numero1, numero2)
            console.log(`(${numero1} + ${numero2}) / ${numero2} = ${divisao}`)
        }else{
            console.log('Número 2 igual a 0')
        }
    }else{
        const numero1_quadrado = calcular_quadrado(numero1)
        const numero2_quadrado = calcular_quadrado(numero2)
        console.log(`${numero1}² = ${numero1_quadrado} e ${numero2}² = ${numero2_quadrado}`)
    }
}

function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
}

function verificar_resto(num1, num2){
    return num1 % num2
}

function calcular_soma(n1, n2, r){
    return n1 + n2 + r
}

function verificar_par(num){
    if (num % 2 === 0){
        return 'par'
    }else{
        return 'ímpar'
    }
}

function calcular_produto(n1, n2){
    return (n1 + n2) * n1
}

function calcular_divisao(n1, n2){
    return (n1 + n2) / n2
}

function calcular_quadrado(n){
    return n ** 2
}

main()