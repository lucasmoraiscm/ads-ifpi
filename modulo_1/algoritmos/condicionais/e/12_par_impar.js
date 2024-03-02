import {question} from 'readline-sync'

function main(){
    console.log('>>> Verificar se um número inteiro é par ou ímpar <<<')

    const numero = get_number('Número inteiro: ')

    if (Number.isInteger(numero)){
        const par_impar = verificar_par_impar(numero)

        const resultado = `
        O número ${numero} é ${par_impar}
        `
        console.log(resultado)
    }else{
        console.log('Digite um número inteiro!')
    }
}

function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
}

function verificar_par_impar(num){
    if (num % 2 === 0){
        return 'par'
    }else{
        return 'ímpar'
    }
}

main()