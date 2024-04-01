import { question } from 'readline-sync'

function main(){
    const numero1 = get_number('Primeiro número: ')
    const numero2 = get_number('Segundo número: ')

    let v1 = numero1
    let v2 = numero2

    if (numero1 > 0  && numero2 < 0){
        v1 = numero1 * -1
        v2 = Math.abs(numero2)
    }else if (numero1 < 0 && numero2 < 0){
        v1 = Math.abs(numero1)
        v2 = Math.abs(numero2)
    }
    
    let resultado = 0
    let contador = 0

    while (contador != v2){
        resultado += v1

        contador += 1
    }

    console.log(`${numero1} x ${numero2} = ${resultado}`)
}

function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
}

main()