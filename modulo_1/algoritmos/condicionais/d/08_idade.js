import {question} from 'readline-sync'

function main(){
    console.log('>>> Verificar a idade exata <<<')

    const dia_atual = get_number('Dia atual: ')
    const mes_atual = get_number('Mês atual: ')
    const ano_atual = get_number('Ano atual: ')
    const dia_nascimento = get_number('Dia do nascimento: ')
    const mes_nascimento = get_number('Mês do nascimento: ')
    const ano_nascimento = get_number('Ano do nascimento: ')

    const idade = verificar_idade(dia_atual, mes_atual, ano_atual, dia_nascimento, mes_nascimento, ano_nascimento)

    const resultado = `
    Sua idade é ${idade} anos
    `
    console.log(resultado)
}

function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
}

function verificar_idade(dia_at, mes_at, ano_at, dia_nasc, mes_nasc, ano_nasc){
    const ano_idade = ano_at - ano_nasc
    if (mes_at >= mes_nasc){
        if (dia_at >= dia_nasc){
            return ano_idade
        }return ano_idade - 1
    }return ano_idade - 1
}

main()