import {question} from 'readline-sync'

function main(){
    console.log('>>> Verificar se o número é inteiro ou decimal <<<')

    const numero = get_number('Número: ')

    if (numero <= 0 || numero > 0){
        const inteiro = verificar_inteiro(numero)
        if (inteiro === true){
            console.log(`${numero} é um número inteiro`)
        }else{
            console.log(`${numero} é um número decimal`)
        }
    }else{
        console.log('Valor inválido! Digite um número')
    }
}

function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
}

function verificar_inteiro(n){
    return Number.isInteger(n)
}

main()