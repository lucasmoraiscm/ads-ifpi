import {question} from 'readline-sync'

function main(){
    console.log('>>> Verificar a classificação do triângulo <<<')

    const angulo1 = get_number('Lado 1: ')
    const angulo2 = get_number('Lado 2: ')
    const angulo3 = get_number('Lado 3: ')

    if (verificar_triangulo(angulo1, angulo2, angulo3)){
        console.log('Os lados correspondem corretamente a um triângulo')
        const classificacao_triangulo = verificar_classificacao(angulo1, angulo2, angulo3)
        const resultado = `
        Esse é um triângulo ${classificacao_triangulo}
        `
        console.log(resultado)
    }else{
        console.log('Os lados não correspondem corretamente a um triângulo')
    }
}

function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
}

function verificar_triangulo(l1, l2, l3){
    return l1 + l2 > l3 && l1 + l3 > l2 && l2 + l3 > l1 && l1 != 0 && l2 != 0 && l3 != 0
}

function verificar_classificacao(l1, l2, l3){
    if (l1 === l2 && l1 === l3 && l2 === l3){
        return 'equilátero'
    }else if (l1 != l2 && l1 != l3 && l2 != l3){
        return 'escaleno'
    }else{
        return 'isósceles'
    }
}

main()