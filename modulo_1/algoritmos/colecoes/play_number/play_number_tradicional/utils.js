import { question } from 'readline-sync'
import { readFileSync, writeFileSync } from 'fs'

export function show(conteudo){
    console.log(conteudo)
}

export function get_number(mensagem){
    return Number(question(mensagem))
}

export function get_positive_number(mensagem){
    const numero = Number(question(mensagem))

    if (numero <= 0){
        show('Valor inválido! Tente Novamente!')
        return get_positive_number(mensagem)
    }

    return numero
}

export function get_negative_number(mensagem){
    const numero = Number(question(mensagem))

    if (numero >= 0){
        show('Valor inválido! Tente novamente!')
        return get_negative_number(mensagem)
    }

    return numero
}

export function get_random_number(min, max){
    return Math.floor(Math.random() * ((max +1) - min)) + min
}

export function get_text(mensagem){
    return question(mensagem)
}

export function ler_arquivo(tamanho, min, max){
    const colecao = []
    const nome = get_text('Nome do arquivo: ')
    const dados = readFileSync(nome, "utf-8")
    const linhas = dados.split('\n')

    for (let linha of linhas){
        if (colecao.length < tamanho){
            if (Number(linha) >= min && Number(linha) <= max){
                colecao.push(Number(linha))
            }
        }
    }
    show('Arquivo carregado com sucesso!')

    return colecao
}

export function calcular_somatorio(colecao){
    let somatorio = 0

    for (let numero of colecao){
        somatorio += numero
    }

    return somatorio
}

export function calcular_media(colecao){
    return Number((calcular_somatorio(colecao) / colecao.length).toFixed(1))
}

export function enumerar(colecao){
    let cont = 1

    for (let n of colecao){
        show(`${cont} -> ${n}`)
        cont++
    }
}

export function salvar(colecao){
    for (let n of colecao){
        writeFileSync('valores.txt', `${n}\n`,{ 
            encoding: "utf8", 
            flag: "a+", 
            mode: 0o666 
            })
    }
}
