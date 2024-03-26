import {question} from 'readline-sync'

function main(){
    let qtd_alunos = 0
    let qtd_aprovados = 0
    let qtd_reprovados = 0

    let matricula = get_number('Matrícula do aluno: ')
    let nota1 = 0
    let nota2 = 0
    let nota3 = 0

    while (matricula != 0){
        nota1 = get_number('Primeira nota: ')
        nota2 = get_number('Segunda nota: ')
        nota3 = get_number('Terceira nota: ')

        let media = calcular_media(nota1, nota2, nota3)
        let situacacao = verificar_situacao(media)
        qtd_aprovados = qtd_aprovados + situacacao

        qtd_alunos++

        matricula = get_number('Matrícula do aluno: ')
    }

    qtd_reprovados = qtd_alunos - qtd_aprovados

    const relatorio = `
    Total de alunos da turma  : ${qtd_alunos}
    Total de alunos aprovados : ${qtd_aprovados}
    Total de alunos reprovados: ${qtd_reprovados}
    `
    console.log(relatorio)
}

function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
}

function calcular_media(n1, n2, n3){
    const media = (2*n1 + 3*n2 + 5*n3) / 10
    return media
}

function verificar_situacao(m){
    if (m >= 7){
        return 1
    }else{
        return 0
    }
}

main()