import {question} from 'readline-sync'

function main(){
    console.log('>>> Verificar o dia da semana <<<')

    const numero = get_number('Número: ')

    if (numero >= 1 && numero <= 7){
        const dia_semana = verificar_dia(numero)

        console.log(dia_semana)
    }else{
        console.log('Número inválido! Digite um número de 1 a 7')
    }
}

function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
}

function verificar_dia(n){
    if (n === 1){
        return ('Domingo')
    }else if (n === 2){
        return ('Segunda-feira')
    }else if (n === 3){
        return ('Terça-feira')
    }else if (n === 4){
        return ('Quarta-feira')
    }else if (n === 5){
        return ('Quinta-feira')
    }else if (n === 6){
        return ('Sexta-feira')
    }else{
        return ('Sábado')
    }
}

main()