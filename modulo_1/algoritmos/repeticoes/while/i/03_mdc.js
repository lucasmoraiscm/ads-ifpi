import {question} from 'readline-sync'

function main(){
    const numero1 = get_number('Digite o primeiro número: ')
    const numero2 = get_number('Digite o segundo número: ')

    const mdc = calcular_mdc(numero1, numero2)

    const resultado = `
    O MDC de ${numero1} e ${numero2} é ${mdc}
    `
    console.log(resultado)
}

function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
}

function calcular_mdc(n1, n2){
    if (n1 > n2){
        let dividendo = n1
        let divisor = n2
        let quociente = Math.floor(dividendo / divisor)
        let resto = dividendo % divisor

        dividendo = n2
        divisor = resto

        while (resto != 0){
            quociente = Math.floor(dividendo / divisor)
            resto = dividendo % divisor
            dividendo = divisor
            divisor = resto
        }

        return dividendo
    }else{
        let dividendo = n2
        let divisor = n1
        let quociente = Math.floor(dividendo / divisor)
        let resto = dividendo % divisor

        dividendo = n1
        divisor = resto

        while (resto != 0){
            quociente = Math.floor(dividendo / divisor)
            resto = dividendo % divisor
            dividendo = divisor
            divisor = resto
        }

        return dividendo
    }
}

main()