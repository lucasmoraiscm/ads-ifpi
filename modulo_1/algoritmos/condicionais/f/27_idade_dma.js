import {question} from 'readline-sync'

function main(){
    console.log('>>> Determinar idade de uma pessoa em anos, meses e dias <<<')

    const dia_nascimento = get_number('Dia do nascimento: ')
    const mes_nascimento = get_number('Mês do nascimento: ')
    const ano_nascimento = get_number('Ano do nascimento: ')
    const dia_atual = get_number('Dia atual: ')
    const mes_atual = get_number('Mês atual: ')
    const ano_atual = get_number('Ano atual: ')

    const dias_nascimento = converter_dias(dia_nascimento, mes_nascimento, ano_nascimento)
    const dias_atual = converter_dias(dia_atual, mes_atual, ano_atual)
    const idade = calcular_idade(dias_nascimento, dias_atual)

    console.log(idade)
}

function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
}

function converter_dias(dia, mes, ano){
    if (mes >= 2){
        if (mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12){
            if (mes === 3){
                let dias = (ano * 365) + (mes * 30) + dia - 2 + 2
                const bissexto = Math.floor(ano / 4)
                dias = dias + bissexto
                return dias
            }else if (mes === 5){
                let dias = (ano * 365) + (mes * 30) + dia - 2 + 3
                const bissexto = Math.floor(ano / 4)
                dias = dias + bissexto
                return dias
            }else if (mes === 7){
                let dias = (ano * 365) + (mes * 30) + dia - 2 + 4
                const bissexto = Math.floor(ano / 4)
                dias = dias + bissexto
                return dias
            }else if (mes === 8){
                let dias = (ano * 365) + (mes * 30) + dia - 2 + 5
                const bissexto = Math.floor(ano / 4)
                dias = dias + bissexto
                return dias
            }else if (mes === 10){
                let dias = (ano * 365) + (mes * 30) + dia - 2 + 6
                const bissexto = Math.floor(ano / 4)
                dias = dias + bissexto
                return dias
            }else{
                let dias = (ano * 365) + (mes * 30) + dia - 2 + 7
                const bissexto = Math.floor(ano / 4)
                dias = dias + bissexto
                return dias
            }
        }else if (mes == 4 || mes === 6 || mes === 9 || mes === 11){
            let dias = (ano * 365) + (mes * 30) + dia - 2
            const bissexto = Math.floor(ano / 4)
            dias = dias + bissexto
            return dias
        }else{
            let dias = (ano * 365) + (mes * 30) + dia - 2 + 1
            const bissexto = Math.floor(ano / 4)
            dias = dias + bissexto
            return dias
        }
    }else{
        let dias = (ano * 365) + (mes * 30) + dia + 1
        const bissexto = Math.floor(ano / 4)
        dias = dias + bissexto
        return dias
    }
}

function calcular_idade(d_nasc, d_at){
    const dia_total_idade = d_at - d_nasc
    const ano_idade = Math.floor(dia_total_idade / 365)
    const resto_idade = dia_total_idade % 365
    const mes_idade = Math.floor(resto_idade / 30)
    const dia_idade = resto_idade % 30
    return `A idade é de ${ano_idade} anos, ${mes_idade} meses e ${dia_idade} dias`
}

main()