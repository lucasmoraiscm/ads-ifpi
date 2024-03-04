import {question} from 'readline-sync'

function main(){
    console.log('>>> Verificar se o número é positivo ou negativo <<<')

    const numero = get_number('Número: ')

    const verificacao = verificar_positivo_negativo(numero)

    console.log(verificacao)
}

function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
}

function verificar_positivo_negativo(n){
    if (n > 0){
        return `O número ${n} é positivo`
    }else if (n < 0){
        return `O número ${n} é negativo`
    }else{
        return `O número ${n} não é positivo nem negativo`
    }
}

main()