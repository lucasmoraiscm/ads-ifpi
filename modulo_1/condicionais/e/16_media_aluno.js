import {question} from 'readline-sync'

function main(){
    console.log('>>> Verificar a média das notas e a situação do aluno <<<')

    const nota1 = get_number('Nota 1: ')
    const nota2 = get_number('Nota 2: ')

    const media = verificar_media(nota1, nota2)

    if (media >= 7){
        console.log('Aprovado')
    }else{
        const nota_exame_final = get_number('Nota do exame final: ')
        const media_final = verificar_media_final(nota1, nota2, nota_exame_final)
        if (media_final >= 5){
            console.log('Aprovado')
        }else{
            console.log('Reprovado')
        }
    }
}

function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
}

function verificar_media(n1,n2){
    return (n1 + n2) / 2
}

function verificar_media_final(n1,n2,nef){
    return (n1 + n2 + nef) / 3
}

main()