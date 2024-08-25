import { get_number, get_random_number, show } from '../play_number_smart/utils.js'
import { mostrar_valores } from '../play_number_smart/vetor_funcionalidades.js'

export function mapear(colecao, transformadora){
    const nova_lista = []

    for (let item of colecao){
        nova_lista.push(transformadora(item))
    }

    return nova_lista
}

export function filtrar(colecao, criterio){
    const nova_lista = []

    for (let n of colecao){
        if (criterio(n)){
            nova_lista.push(n)
        }
    }

    return nova_lista
}

export function reduzir(colecao, funcao, valor_inicial){
    let acumulado = valor_inicial

    for (let i = 0; i < colecao.length; i++){
        acumulado = funcao(acumulado, colecao[i])
    }

    return acumulado
}

export function gerar_vetor_random(tamanho, min, max){
    const vetor = []

    for (let i = 0; i < tamanho; i++){
        vetor.push(get_random_number(min, max))
    }
    show('Números gerados com sucesso!')

    return vetor
}

export function gerar_vetor_manual(tamanho, min, max){
    const vetor = []

    for (let i = 0; i < tamanho; i++){
        let numero = get_number('Número: ')
        
        if (numero >= min && numero <= max){
            vetor.push(numero)
        }else{
            show('Valor inválido! Tente novamente!')
            i--
        }
    }
    show('Números gerados com sucesso!')
    
    return vetor
}

export function resertar(valor){
    show(`Valor: ${valor}`)
    const valor_padrao = get_number('Valor número padrão: ')
    valor = valor_padrao
    return valor
}

function mode_crescente(a, b){
    return (a - b)
}

function mode_decrescente(a, b){
    return (b - a)
}

export function ordenar_crescente(colecao){
    return colecao.sort(mode_crescente)
}

export function ordenar_decrescente(colecao){
    return colecao.sort(mode_decrescente)
}

export function verificar_posicao(colecao, numero){
    let posicoes = []

    for (let i in colecao){
        if (colecao[i] === numero){
            posicoes.push(i)
        }
    }

    return posicoes.join(', ')
}

export function enumerar(colecao){
    let cont = 1
    show(`Posição -> Valor`)

    for (let n of colecao){
        show(`${cont} -> ${n}`)
        cont++
    }
}

export function embaralhar(colecao){
    let embaralhados = []

    for (let i = 0; i < colecao.length; i++){
        const index_aleatorio = get_random_number(0, (colecao.length - 1))
        embaralhados.splice(index_aleatorio, 0, colecao[i])
    }

    for (let n of embaralhados){
        colecao.shift()
        colecao.push(n)
    }
}

export function adicionar(colecao){
    const novo_valor = get_number('Valor: ')
    colecao.push(novo_valor)
}

export function remover_por_valor(colecao){
    const valores = reduzir(colecao, mostrar_valores, 'Valores:\n')
    show(valores)
    const valor = get_number('Valor que deseja remover: ')
    
    for (let i = 0; i < colecao.length; i++){
        if (colecao[i] === valor){
            colecao.splice(i, 1)
            i--
        }
    }
}

export function remover_por_posicao(colecao){
    enumerar(colecao)
    const posicao = get_number('Posição do valor que deseja remover: ')

    for (let i = 0; i < colecao.length; i++){
        if ((i + 1) === posicao){
            colecao.splice(i, 1)
        }
    }
}

export function editar_por_posicao(colecao){
    enumerar(colecao)
    const posicao = get_number('Posição do valor que deseja editar: ')
    const novo_valor = get_number('Novo valor que desejar adicionar: ')

    for (let i = 0; i < colecao.length; i++){
        if ((i + 1) === posicao){
            colecao.splice(i, 1)
            colecao.splice(i, 0, novo_valor)
        }
    }
}
