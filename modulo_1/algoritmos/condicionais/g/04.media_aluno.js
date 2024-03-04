import {question} from 'readline-sync'

function main(){
    console.log('>>> Verificar a média e a situação de aluno <<<')

    const nota1 = get_number('Nota 1: ')
    const nota2 = get_number('Nota 2: ')

    if (nota1 >= 0 && nota1 <= 10 && nota2 >= 0 && nota2 <= 10){
        const media = verificar_media(nota1, nota2)
        const situacao = verificar_situacao(media)

        console.log(situacao)
    }else{
        console.log('Nota inválida! Digite a nota de 0 a 10')
    }
}

function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
}

function verificar_media(n1, n2){
    return (n1 + n2) / 2
}

function verificar_situacao(m){
    if (m === 10){
        return `
        Média: ${m.toFixed(1)}
        Situação: Aprovado com distinção
        `
    }else if (m >= 7){
        return `
        Média: ${m.toFixed(1)}
        Situação: Aprovado
        `
    }else{
        return `
        Média: ${m.toFixed(1)}
        Situação: Reprovado
        `
    }
}

main()