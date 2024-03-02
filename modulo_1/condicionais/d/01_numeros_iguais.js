import {question} from 'readline-sync'

function main(){
    print('>>> Verificar os números iguais <<<')

    const numero1 = get_number('Número 1: ')
    const numero2 = get_number('Número 2: ')
    const numero3 = get_number('Número 3: ')

    const iguais = verificar_iguais(numero1, numero2, numero3)

    print(`${iguais} números são iguais`)

}

function print(mensagem){
    console.log(mensagem)
}

function get_number(numero){
    const n = Number(question(numero))
    return n
}

function verificar_iguais(numero1, numero2, numero3){
    let quantidade_iguais = 0

    if (numero1 === numero2 && numero1 === numero3){
        quantidade_iguais = quantidade_iguais + 3
    }else if (numero1 === numero2){
        quantidade_iguais = quantidade_iguais + 2
    }else if (numero1 === numero3){
        quantidade_iguais = quantidade_iguais + 2
    }else if (numero2 === numero3){
        quantidade_iguais = quantidade_iguais + 2
    }
    return quantidade_iguais
}

main()