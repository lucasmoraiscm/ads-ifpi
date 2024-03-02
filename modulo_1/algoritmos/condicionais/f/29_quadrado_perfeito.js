import {question} from 'readline-sync'

function main(){
    console.log('>>> Verificar se o número é um quadrado perfeito <<<')

    const numero = get_number('Número de 4 digitos: ')

    const dezena1 = calcular_dezena1(numero)
    const dezena2 = calcular_dezena2(numero)
    const quadrado_perfeito = verificar_quadrado_perfeito(numero, dezena1, dezena2)

    console.log(quadrado_perfeito)
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

function verificar_quadrado_perfeito(num, d1, d2){
    const raiz_num = Math.sqrt(num)
    const soma_d = d1 + d2
    if (raiz_num === soma_d){
        return `${num} é um quadrado perfeito (${raiz_num} = ${d1} + ${d2})`
    }else{
        return `${num} não é um quadrado perfeito`
    }
}

main()