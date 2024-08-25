import { get_number, get_text, get_random_number, get_positive_number } from '../play_number_tradicional/utils.js'

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

export function mostrar_valores(colecao){
    let numeros = ''

    for (let i in colecao){
        if (i < (colecao.length - 1)){
            numeros += `${colecao[i]}, `
        }else{
            numeros += `${colecao[i]}`
        }
    }

    return `Valores: ${numeros}`
}

export function verificar_qtd_itens(colecao){
    if (colecao.length > 1){
        return `O vetor tem ${colecao.length} itens`
    }else{
        return `O vetor tem ${colecao.length} item`
    }
}

export function verificar_maior(colecao){
    let maior = colecao[0]

    for (let numero of colecao){
        if (numero > maior){
            maior = numero
        }
    }

    return maior
}

export function verificar_menor(colecao){
    let menor = colecao[0]

    for (let numero of colecao){
        if (numero < menor){
            menor = numero
        }
    }
    
    return menor
}

export function verificar_valores_positivos(colecao){
    let valores = []

    for (let numero of colecao){
        if (numero > 0){
            valores.push(numero)
        }
    }

    return valores
}

export function verificar_valores_negativos(colecao){
    let valores = []

    for (let numero of colecao){
        if (numero < 0){
            valores.push(numero)
        }
    }

    return valores
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

export function multiplicar_por_valor(colecao){
    let multiplicados = []
    const valor = get_number('Valor: ')

    for (let numero of colecao){
        multiplicados.push(numero * valor)
    }

    return multiplicados
}

export function elevar_a_valor(colecao){
    let elevados = []
    const valor = get_number('Valor: ')

    for (let numero of colecao){
        elevados.push(numero ** valor)
    }

    return elevados
}

export function reduzir_a_fracao(colecao){
    let fracionados = []
    const get_fracao = get_text('Fraçao (ex. 1/2): ')
    const partes_fracao = get_fracao.split('/')
    const fracao = Number(partes_fracao[0]) / Number(partes_fracao[1])

    for (let numero of colecao){
        fracionados.push((numero * fracao).toFixed(1))
    }

    return fracionados
}

export function substituir_negativos(colecao){
    const sem_negativos = []
    const min = get_positive_number('Número mínimo: ')
    const max = get_positive_number('Número máximo: ')

    for (let numero of colecao){
        if (numero < 0){
            sem_negativos.push(get_random_number(min, max))
        }else{
            sem_negativos.push(numero)
        }
    }

    return sem_negativos
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
