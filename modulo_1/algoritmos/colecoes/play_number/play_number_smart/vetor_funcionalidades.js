import { get_number, get_text, get_random_number, get_positive_number, show } from '../play_number_smart/utils.js'

export function menu(){
    const valor = get_number(`
##### Play Numbers #####
1 - Inicializar
2 - Mostrar Valores
3 - Resetar
4 - Ver Quantidade de Itens
5 - Ver Menor e Maior Valores e Suas Posições
6 - Somátorio dos Valores
7 - Média dos Valores
8 - Mostrar Valores Positivos
9 - Mostrar Valores Negativos
10 - Atualizar Valores
11 - Adicionar Novos Valores
12 - Remover Itens por Valor Exato
13 - Remover por Posição
14 - Editar Valor Especifíco por Posição
15 - Salvar valores em arquivo
0 - Sair
>>> `)
    return valor
}

export function inicializar(){
    const opcao = get_number(`
##### Inicializar #####
1 - Dados Automáticos
2 - Informar Valores
3 - Carregar Arquivo
0 - Voltar
>>> `)

    return opcao
}

export function mostrar_valores(acumulado, valor_atual){
    return acumulado += `${valor_atual}\n`
}

export function qtd_itens(acumulado, valor_atual){
    return acumulado + 1
}

export function maior(acumulado, valor_inicial){
    if (valor_inicial > acumulado){
        return valor_inicial
    }else{
        return acumulado
    }
}

export function menor(acumulado, valor_inicial){
    if (valor_inicial < acumulado){
        return valor_inicial
    }else{
        return acumulado
    }
}

export function somatorio(acumulado, valor_atual){
    return acumulado + valor_atual
}

export function valores_positivos(valor){
    if (valor > 0){
        return valor
    }
}

export function valores_negativos(valor){
    if (valor < 0){
        return valor
    }
}

export function atualizar(){
    const opcao = get_number(`
##### Atualizar #####
1 - Multiplicar por um Valor
2 - Elevar a um Valor
3 - Reduzir a uma Fração
4 - Substituir Valores Negativos por um Número Aleatório de uma Faixa
5 - Ordenar Valores
6 - Embaralhar Valores
0 - Voltar
>>> `)

    return opcao
}

export function multiplicar_por_valor(valor){
    show(`Valor: ${valor}`)
    const valor_mutiplicador = get_number('Multiplicar por: ')
    return (valor * valor_mutiplicador)
}

export function elevar_a_valor(valor){
    show(`Valor: ${valor}`)
    const valor_expoente = get_number('Elevar a: ')
    return (valor ** valor_expoente)
}

export function reduzir_a_fracao(valor){
    show(`Valor: ${valor}`)
    const get_fracao = get_text('Reduzir a fraçao (ex. 1/2): ')
    const partes_fracao = get_fracao.split('/')
    const fracao = Number(partes_fracao[0]) / Number(partes_fracao[1])
    return ((valor * fracao).toFixed(1))
}


export function substituir_negativos(valor){
    if (valor < 0){
        show(`Valor: ${valor}`)
        show('Intervalo do número')
        const min = get_positive_number('Número mínimo: ')
        const max = get_positive_number('Número máximo: ')
        return get_random_number(min, max)
    }else{
        return valor
    }
}

export function ordenar(){
    let opcao = get_number(`
##### Ordenar #####
1 - Ordem crescente
2 - Ordem decrescente
0 - Voltar
>>> `)
    
    return opcao
}
