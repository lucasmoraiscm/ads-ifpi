import {question} from 'readline-sync'

function main(){
    console.log('>>> Verificar a hipotenusa e os catetos do triângulo <<<')

    const lado1 = get_number('Lado 1: ')
    const lado2 = get_number('Lado 2: ')
    const lado3 = get_number('Lado 3: ')

    const hipotenusa_catetos = verificar_hipotenusa_catetos(lado1, lado2, lado3)
    
    console.log(hipotenusa_catetos)
}

function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
}

function verificar_hipotenusa_catetos(lado1, lado2, lado3){
    if (lado1 > lado2 && lado1 > lado3){
        return `A hipotenusa é ${lado1} e o catetos são ${lado2} e ${lado3}`
    }else if (lado2 > lado1 && lado2 > lado3){
        return `A hipotenusa é ${lado2} e o catetos são ${lado1} e ${lado3}`
    }else{
        return `A hipotenusa é ${lado3} e o catetos são ${lado1} e ${lado2}`
    }
}

main()