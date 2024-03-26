import {question} from 'readline-sync'

function main(){
    let numero = get_number('Digite um número de 0 a 255: ')

    while (numero >= 0 && numero <= 255){
        const binario = calcular_binario(numero)
        const hexadecimal = calcular_hexadecimal(numero)

        const resultado = `
        Número decimal: ${numero}
        Em binário: ${binario}
        Em hexadecimal: ${hexadecimal}
        `
        console.log(resultado)

        numero = get_number('Digite um número de 0 a 255: ')
    }
}

function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
}

function calcular_binario(n){
    let binario = ''
    let dividendo = n

    while (dividendo != 0){
        const quociente = Math.floor(dividendo / 2)
        const resto = dividendo % 2
        dividendo = quociente
        binario = resto.toString() + binario // javascript
    }

    if (binario === ''){
        binario = 0
    }

    return binario
}

function calcular_hexadecimal(n){
    let hexadecimal = ''
    let dividendo = n

    while (dividendo != 0){
        const quociente = Math.floor(dividendo / 16)
        const resto = dividendo % 16
        dividendo = quociente
        
        if (resto === 10){
            hexadecimal = 'A' + hexadecimal
        }else if (resto === 11){
            hexadecimal = 'B' + hexadecimal
        }else if (resto === 12){
            hexadecimal = 'C' + hexadecimal
        }else if (resto === 13){
            hexadecimal = 'D' + hexadecimal
        }else if (resto === 14){
            hexadecimal = 'E' + hexadecimal
        }else if (resto === 15){
            hexadecimal = 'F' + hexadecimal
        }else{
            hexadecimal = resto.toString() + hexadecimal
        }
    }

    if (hexadecimal === ''){
        hexadecimal = 0
    }

    return hexadecimal
}

main()