import {question} from 'readline-sync'

function main(){
    console.log('>>> Verificar o maior e o menor entre 5 números <<<')

    const numero1 = get_number('Número 1: ')
    const numero2 = get_number('Número 2: ')
    const numero3 = get_number('Número 3: ')
    const numero4 = get_number('Número 4: ')
    const numero5 = get_number('Número 5: ')

    if (Number.isInteger(numero1) && Number.isInteger(numero2) && Number.isInteger(numero3) 
    && Number.isInteger(numero4) && Number.isInteger(numero5)){
        if (numero1 != numero2 && numero1 != numero3 && numero1 != numero4 && numero1 != numero5
            && numero2 != numero3 && numero2 != numero4 && numero2 != numero5 && numero3 != numero4
            && numero3 != numero5 && numero4 != numero5){
                const maior = verificar_maior(numero1, numero2, numero3, numero4, numero5)
                const menor = verificar_menor(numero1, numero2, numero3, numero4, numero5)

                const resultado = `
                O maior número é ${maior} e o menor é ${menor}
                `
                console.log(resultado)
            }else{
                console.log('Número inválido! Digite apenas números diferentes')
            }
    }else{
        console.log('Número inválido! Digite apenas números inteiros')
    }
}

function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
}

function verificar_maior(num1, num2, num3, num4, num5){
    if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5){
        return num1
    }else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5){
        return num2
    }else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5){
        return num3
    }else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5){
        return num4
    }else{
        return num5
    }
}

function verificar_menor(num1, num2, num3, num4, num5){
    if (num1 < num2 && num1 < num3 && num1 < num4 && num1 < num5){
        return num1
    }else if (num2 < num1 && num2 < num3 && num2 < num4 && num2 < num5){
        return num2
    }else if (num3 < num1 && num3 < num2 && num3 < num4 && num3 < num5){
        return num3
    }else if (num4 < num1 && num4 < num2 && num4 < num3 && num4 < num5){
        return num4
    }else{
        return num5
    }
}

main()