import {question} from 'readline-sync'

function main(){
    console.log('>>> Mostrar o número de acordo com a opção solicitada <<<')

    const opcao = get_number('Número da opção desejada: ')
    const numero1 = get_number('Número 1: ')
    const numero2 = get_number('Número 2: ')
    const numero3 = get_number('Número 3: ')

    if (opcao >= 1 && opcao <= 3){
        const valor = valor_solicitado(opcao, numero1, numero2, numero3)

        const resultado = `
        O número da opção solicitada é ${valor}
        `
        console.log(resultado)
    }else{
        console.log('Opção inválida! Digite uma opção de 1 a 3')
    }
}

function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
}

function valor_solicitado(op, num1, num2, num3){
    if (op === 1){
        return num1
    }else if (op === 2){
        return num2
    }else{
        return num3
    }
}

main()