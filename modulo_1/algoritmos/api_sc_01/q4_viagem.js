import { get_text, show } from '../utils/io_utils.js'
import { get_positive_number } from '../utils/math_utils.js'

function main(){
    const origem = get_text('Origem: ')
    const destino = get_text('Destino: ')
    const valor_reais = get_positive_number('Valor em R$ no site: ')
    const valor_milhas = get_positive_number('Valor em milhas no site: ')

    const valor_milhas_padrao = calcular_valor_milhas_padrao(valor_milhas)
    const porcentagem_milhas_padrao_reais = calcular_porcentagem_relacao(valor_reais, valor_milhas_padrao)
    const valor_milhas_baratas = calcular_valor_milhas_baratas(valor_milhas)
    const porcentagem_milhas_baratas_reais = calcular_porcentagem_relacao(valor_reais, valor_milhas_baratas)
    const melhor_forma = verificar_melhor_forma(valor_reais, valor_milhas_padrao, valor_milhas_baratas)

    const relatorio = `
Voo de ${origem} para ${destino}
--------------------------------------------
Valor em R$: R$ ${valor_reais.toFixed(2)}
Valor em milhas: ${valor_milhas}
Valor em milhas padrão: R$ ${valor_milhas_padrao.toFixed(2)}
As milhas padrão custam ${porcentagem_milhas_padrao_reais.toFixed(2)} % do valor em R$
Valor em milhas baratas: R$ ${valor_milhas_baratas.toFixed(2)}
As milhas baratas custam ${porcentagem_milhas_baratas_reais.toFixed(2)} % do valor em R$
--------------------------------------------
Melhor forma de compra: ${melhor_forma}`
    show(relatorio)
}

function calcular_valor_milhas_padrao(milhas){
    return (milhas / 1000) * 70
}

function calcular_valor_milhas_baratas(milhas){
    return (milhas / 1000) * 14.5
}

function calcular_porcentagem_relacao(reais, milhas){
    return (milhas * 100) / reais
}

function verificar_melhor_forma(reais, milhas_padrão, milhas_baratas){
    if (reais < milhas_padrão && reais < milhas_baratas){
        return `Reais (R$ ${reais.toFixed(2)})`
    }else if (milhas_padrão < reais && milhas_padrão < milhas_baratas){
        return `Milhas padrão (R$ ${milhas_padrão.toFixed(2)})`
    }else{
        return `Milhas baratas (R$ ${milhas_baratas.toFixed(2)})`
    }
}

main()