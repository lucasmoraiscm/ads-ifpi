import {question} from 'readline-sync'

function main(){
    console.log('>>> Verificar a quantidade de centenas, dezenas e unidades <<<')

    const numero = get_number('Número inteiro: ')

    if (Number.isInteger(numero) && numero >= 0 && numero < 1000){
        if (numero >= 100){
            const centenas = calcular_centenas(numero)
            const dezenas = calcular_dezenas(numero)
            const unidades = calcular_unidades(numero)

            console.log(`${numero} = ${centenas}, ${dezenas} e ${unidades}`)
        }else if (numero >= 10){
            const dezenas = calcular_dezenas(numero)
            const unidades = calcular_unidades(numero)

            console.log(`${numero} = ${dezenas} e ${unidades}`)
        }else if (numero >= 1){
            const unidades = calcular_unidades(numero)

            console.log(`${numero} = ${unidades}`)
        }else{
            console.log(`${numero} = 0 centenas, 0 dezenas e 0 unidades`)
        }
    }else{
        console.log('Número inválido! Digite um número inteiro de 0 a 999')
    }

}

function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
}

function calcular_centenas(n){
    const c = Math.floor(n / 100)
    if (c > 1){
        return `${c} centenas`
    }else{
        return `${c} centena`
    }
}

function calcular_dezenas(n){
    const resto = n % 100
    const d = Math.floor(resto / 10)
    if (d > 1){
        return `${d} dezenas`
    }else{
        return `${d} dezena`
    }
}

function calcular_unidades(n){
    const u = n % 10
    if (u > 1){
        return `${u} unidades`
    }else{
        return `${u} unidade`
    }
}

main()