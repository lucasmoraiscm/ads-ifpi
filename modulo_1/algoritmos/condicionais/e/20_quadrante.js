import {question} from 'readline-sync'

function main(){
    console.log('>>> Verificar em qual quadrante o ângulo está localizado <<<')

    const angulo = get_number('Ângulo: ')

    if (angulo >= 0 && angulo <= 360){
        const quadrante = verificar_quadrante(angulo)
        const resultado = `
        O ângulo de ${angulo}° está localizado no ${quadrante}
        `
        console.log(resultado)
    }else{
        console.log('Ângulo inválido! Digite um ângulo de 0 a 360°')
    }
}

function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
}

function verificar_quadrante(angulo){
    if (angulo >= 0 && angulo < 90){
        return 'primeiro quadrante'
    }else if (angulo >= 90 && angulo < 180){
        return 'segundo quadrante'
    }else if (angulo >= 180 && angulo < 270){
        return 'terceiro quadrante'
    }else{
        return 'quarto quadrante'
    }
}

main()