import {question} from 'readline-sync'

function main(){
    let nome = get_text('Nome: ')
    let altura = get_number('Altura: ')
    let peso = get_number('Peso: ')

    let nome_maior_altura = nome
    let maior_altura = altura

    let nome_menor_altura = nome
    let menor_altura = altura

    let nome_maior_peso = nome
    let maior_peso = peso

    let nome_menor_peso = nome
    let menor_peso = peso

    while (nome !== 'FIM'){

        if (altura > maior_altura){
            nome_maior_altura = nome
            maior_altura = altura
        }else if (altura < menor_altura){
            nome_menor_altura = nome
            menor_altura = altura
        }

        if (peso > maior_peso){
            nome_maior_peso = nome
            maior_peso = peso
        }else if (peso < menor_peso){
            nome_menor_peso = nome
            menor_peso = peso
        }

        nome = get_text('Nome: ')
        altura = get_number('Altura: ')
        peso = get_number('Peso: ')
    }

    const resultado = `
    >>> Candidata mais alta <<<
    Nome: ${nome_maior_altura}
    Altura ${maior_altura} m

    >>> Candidata mais baixa <<<
    Nome: ${nome_menor_altura}
    Altura: ${menor_altura} m

    >>> Candidata com maior peso <<<
    Nome: ${nome_maior_peso}
    Peso: ${maior_peso} kg

    >>> Candidata com menor peso <<<
    Nome: ${nome_menor_peso}
    Peso: ${menor_peso} kg
    `
    console.log(resultado)
}

function get_text(mensagem){
    const txt = question(mensagem)
    return txt
}

function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
}

main()