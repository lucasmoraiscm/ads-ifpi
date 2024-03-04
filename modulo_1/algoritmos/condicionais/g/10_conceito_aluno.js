import {question} from 'readline-sync'

function main(){
    console.log('>>> Verificar a média, conceito e situação do aluno <<<')

    const nota1 = get_number('Nota 1: ')
    const nota2 = get_number('Nota 2: ')

    if (nota1 >= 0 && nota1 <= 10 && nota2 >= 0 && nota2 <= 10){
        const media = calcular_media(nota1, nota2)
        const conceito = verificar_conceito(media)
        const situacao = verificar_situacao(conceito)

        const resultado = `
        Notas   : ${nota1} e ${nota2}
        Média   : ${media.toFixed(1)}
        Conceito: ${conceito}
        Situação: ${situacao}
        `
        console.log(resultado)
    }else{
        console.log('Nota inválida! Digite uma nota de 0 a 10')
    }
}

function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
}

function calcular_media(n1, n2){
    return (n1 + n2) / 2
}

function verificar_conceito(m){
    if (m < 4){
        return 'E'
    }else if (m < 6){
        return 'D'
    }else if (m < 7.5){
        return 'C'
    }else if (m < 9){
        return 'B'
    }else{
        return 'A'
    }
}

function verificar_situacao(c){
    if (c === 'A' || c === 'B' || c === 'C'){
        return 'Aprovado'
    }else{
        return 'Reprovado'
    }
}

main()