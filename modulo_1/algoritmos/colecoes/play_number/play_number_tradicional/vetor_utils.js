import { get_number, get_random_number, show, enumerar } from '../play_number_tradicional/utils.js'
import { mostrar_valores } from './vetor_funcionalidades.js'

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

export function resertar(colecao){
    const numero_padrao = get_number('Valor número padrão: ')

    for (let i = 0; i < colecao.length; i++){
        colecao.shift()
        colecao.push(numero_padrao)
    }
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
    for (let i in colecao){
        if (colecao[i] === numero){
            return i
        }
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
    const valores = mostrar_valores(colecao)
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
