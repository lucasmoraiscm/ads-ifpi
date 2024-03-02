import {question} from 'readline-sync'

function main(){
    console.log('>>> Verificar a média e os maiores que a média entre 5 números <<<')

    const numero1 = get_number('Número 1: ')
    const numero2 = get_number('Número 2: ')
    const numero3 = get_number('Número 3: ')
    const numero4 = get_number('Número 4: ')
    const numero5 = get_number('Número 5: ')

    if (Number.isInteger(numero1) && Number.isInteger(numero2) && Number.isInteger(numero3) 
    && Number.isInteger(numero4) && Number.isInteger(numero5)){
            const media = verificar_media(numero1, numero2, numero3, numero4, numero5)
            const maiores = verificar_maiores(media, numero1, numero2, numero3, numero4, numero5)

            const resultado = `
            A média dos número é ${media} e os maiores que a média são: ${maiores}
            `
            console.log(resultado)
    }else{
        console.log('Número inválido! Digite apenas números inteiros')
    }
}

function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
}

function verificar_media(num1, num2, num3, num4, num5){
    return (num1 + num2 + num3 + num4 + num5) / 5
}

function verificar_maiores(media, num1, num2, num3, num4, num5){
    let maiores_media = ``
    if (num1 > media){
        maiores_media = `${num1}`
    }
    if (num2 > media){
        maiores_media = maiores_media + ` ${num2}`
    }
    if (num3 > media){
        maiores_media = maiores_media + ` ${num3}`
    }
    if (num4 > media){
        maiores_media = maiores_media + ` ${num4}`
    }
    if (num5 > media){
        maiores_media = maiores_media + ` ${num5}`
    }
    return maiores_media
}

main()