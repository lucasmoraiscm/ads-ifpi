import {question} from 'readline-sync'

function main(){
    console.log('>>> Verificar classificação do triângulo <<<')

    const angulo1 = get_number('Ângulo 1: ')
    const angulo2 = get_number('Ângulo 2: ')
    const angulo3 = get_number('Ângulo 3: ')

    if (verificar_triangulo(angulo1, angulo2, angulo3)){
        console.log('Os ângulos correspondem corretamente a um triângulo')
        const classificacao_triangulo = verificar_classificacao(angulo1, angulo2, angulo3)
        const resultado = `
        Esse é um triângulo ${classificacao_triangulo}
        `
        console.log(resultado)
    }else{
        console.log('Os ângulos não correspondem corretamente a um triângulo')
    }
}

function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
}

function verificar_triangulo(a1, a2, a3){
    return a1 + a2 + a3 === 180
}

function verificar_classificacao(a1, a2, a3){
    if (a1 < 90 && a2 < 90 && a3 < 90){
        return 'acutângulo'
    }else if (a1 === 90 || a2 === 90 || a3 === 90){
        return 'retângulo'
    }else{
        return 'obtusângulo'
    }
}

main()