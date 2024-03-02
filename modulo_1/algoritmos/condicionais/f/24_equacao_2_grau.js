import {question} from 'readline-sync'

function main(){
    console.log('>>> Calcular a equação do 2º grau <<<')

    const a = get_number('A: ')
    const b = get_number('B: ')
    const c = get_number('C: ')

    if (a != 0){
        const delta = calcular_delta(a, b, c)
        if (delta > 0){
            const bhaskara1 = calcular_bhaskara1(delta, a, b)
            const bhaskara2 = calcular_bhaskara2(delta, a, b)
            console.log(`As raízes da equação são ${bhaskara1} e ${bhaskara2}`)
        }else if (delta === 0){
            const bhaskara1 = calcular_bhaskara1(delta, a)
            console.log(`A raiz da equção é ${bhaskara1}`)
        }else{
            console.log('A equação não possui raízes reais')
        }
    }else{
        console.log('A inválido! Digite um valor diferente de 0')
    }
}

function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
}

function calcular_delta(a, b, c){
    return (b**2) - (4 * a * c)
}

function calcular_bhaskara1(d, a, b){
    return ((b*-1) + Math.sqrt(d)) / (2 * a)
}

function calcular_bhaskara2(d, a, b){
    return ((b*-1) - Math.sqrt(d)) / (2 * a)
}

main()