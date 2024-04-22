import {get_text, show} from '../utils/io_utils.js'
import { get_natural_number, get_positive_number } from '../utils/math_utils.js'

function main(){
    let itens = '----- PESQUISA DE PREÇOS -----'
    let valor_total = 0

    show(`
Menu Inicial
------------------------------
1 - Incluir item
2 - Imprimir lista
0 - Sair
------------------------------`)

    let opcao = get_natural_number('Digite o número da opção desejada: ')

    let counter = 0

    while (opcao != 0){
        counter ++

        if (opcao === 1){
            const descricao = get_text('Descrição: ')
            const especificacao = get_text('Especificação: ')
            const valor = get_positive_number('Valor: ')

            itens += formatar_item(counter, descricao, especificacao, valor)
            valor_total += valor

        }else if (opcao === 2){
            itens += `\n------------------------------`
            itens += `\nValor total: R$ ${valor_total.toFixed(2)}`

            show(itens)

            const parcelamento = verificar_parcelamento(valor_total)

            show(`
Opções de pagamento
------------------------------${parcelamento}`)
        }

        show(`
Menu Inicial
------------------------------
1 - Incluir item
2 - Imprimir lista
0 - Sair
------------------------------`)

        opcao = get_natural_number('Digite o número da opção desejada: ')
    }
}

function formatar_item(counter, descricao, especificacao, valor){
    const item = `\n${counter} - ${descricao} (${especificacao}) R$ ${valor.toFixed(2)}`
    return item
}

function verificar_parcelamento(valor_total){
    const parcela_com_juros = valor_total / 6

    if (valor_total <= 30){
        return `
Pagamento à vista
Parcelamento com juros: até 6x de ${parcela_com_juros.toFixed(2)} (+5% a.m)`
    }else if (valor_total <= 100){
        const parcela = valor_total / 3
        return `
Pagamento à vista
Parcelamento sem juros: até 3x de R$ ${parcela.toFixed(2)}
Parcelamento com juros: até 6x de R$ ${parcela_com_juros.toFixed(2)} (+5% a.m.)`
    }else if (valor_total > 100){
        const parcela = valor_total / 5
        return `
Pagamento à vista
Parcelamento sem juros: até 5x de R$ ${parcela.toFixed(2)}
Parcelamento com juros: até 6x de R$ ${parcela_com_juros.toFixed(2)} (+5% a.m.)`
    }
}

main()