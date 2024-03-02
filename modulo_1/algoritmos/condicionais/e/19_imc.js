import {question} from 'readline-sync'

function main(){
    console.log('>>> Calcular IMC e verificar a classificação <<<')

    const altura = get_number('Altura(m): ')
    const peso = get_number('Peso(Kg): ')

    const imc = calcular_imc(altura, peso)

    const classificacao_imc = classificar_imc(imc)

    const resultado = `
    IMC: ${imc.toFixed(2)}
    Classificação: ${classificacao_imc}
    `
    console.log(resultado)
}

function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
}

function calcular_imc(altura, peso){
    return peso / (altura ** 2)
}

function classificar_imc(imc){
    if (imc < 25){
        return 'Normal'
    }else if (imc >= 25 && imc <= 30){
        return 'Obeso'
    }else{
        return 'Obesidade mórbida'
    }
}

main()