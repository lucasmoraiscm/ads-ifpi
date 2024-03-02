import {question} from 'readline-sync'

function main(){
    console.log('>>> Verificar se o número obedece a característica <<<')

    const numero = get_number('Número de 4 digitos: ')

    const dezena1 = calcular_dezena1(numero)
    const dezena2 = calcular_dezena2(numero)
    const quadrado_soma = calcular_quadrado_soma(dezena1, dezena2)
    const verificacao = verificar_caracteristica(numero, dezena1, dezena2, quadrado_soma)

    console.log(verificacao)
}

function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
}

function calcular_dezena1(num){
    const n1 = Math.floor(num / 1000)
    const resto = num % 1000
    const n2 = Math.floor(resto / 100)
    return n1*10 + n2
}

function calcular_dezena2(num){
    const n3 = num % 100
    return n3
}

function calcular_quadrado_soma(d1, d2){
    return (d1 + d2)**2
}

function verificar_caracteristica(num, d1, d2, quad_soma){
    if (num === quad_soma){
        return `
        O número atende a característica
        ${num} => (${d1} + ${d2})² => ${quad_soma}
        `
    }else{
        return 'O número não atende a característica'
    }
}

main()