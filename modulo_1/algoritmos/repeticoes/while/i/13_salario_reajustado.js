import {question} from 'readline-sync'

function main(){
    let salario_atual = get_number('Salário atual: ')
    let soma_salario_atual = salario_atual
    let soma_novo_salario = 0
    let diferenca = 0

    while (salario_atual !== 0){
        const novo_salario = calcular_novo_salario(salario_atual)

        soma_novo_salario += novo_salario
        diferenca = soma_novo_salario - soma_salario_atual

        const relatorio = `
        Novo salário: R$ ${novo_salario.toFixed(2)}
        Soma dos salários atuais: R$ ${soma_salario_atual.toFixed(2)}
        Soma dos salários reajustados: R$ ${soma_novo_salario.toFixed(2)}
        Diferença entre as somas: R$ ${diferenca.toFixed(2)}
        `
        console.log(relatorio)

        salario_atual = get_number('Salário atual: ')
        soma_salario_atual += salario_atual
    }
}

function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
}

function calcular_novo_salario(salario){
    let novo_salario = salario

    if (salario < 3000){
        novo_salario += salario * 0.25
    }else if (salario < 6000){
        novo_salario += salario * 0.2
    }else if (salario < 10_000){
        novo_salario += salario * 0.15
    }else{
        novo_salario += salario * 0.1
    }
    
    return novo_salario
}

main()