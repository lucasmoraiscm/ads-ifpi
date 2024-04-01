import {question} from 'readline-sync'

function main(){
    let id = get_natural_number('Nº de identificacao: ')
    let peso = get_positive_number('Peso: ')

    let id_mais_magro = id
    let mais_magro = peso
    let id_mais_gordo = id
    let mais_gordo = peso

    while (id !== 0){
        if (peso < mais_magro){
            id_mais_magro = id
            mais_magro = peso
        }else if (peso > mais_gordo){
            id_mais_gordo = id
            mais_gordo = peso
        }

        id = get_natural_number('Nº de identificacao: ')
        peso = get_positive_number('Peso: ')
    }

    const relatorio = `
Identificação do boi mais magro: ${id_mais_magro}
Peso do boi mais magro: ${mais_magro.toFixed(2)} kg

Identificação do boi mais gordo: ${id_mais_gordo}
Peso do boi mais gordo: ${mais_gordo.toFixed(2)} kg
`
    console.log(relatorio)
}

function get_natural_number(mensagem){
    let n = Number(question(mensagem))

    if (n >= 0){
        return n
    }else{
        while (n < 0){
            n = Number(question(mensagem))
        }
        return n
    }   
}

function get_positive_number(mensagem){
    let n = Number(question(mensagem))

    if (n > 0){
        return n
    }else{
        while (n <= 0){
            n = Number(question(mensagem))
        }
        return n
    }
}

main()