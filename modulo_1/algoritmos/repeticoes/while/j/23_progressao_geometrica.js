import { question } from 'readline-sync'

function main(){
    const razao = get_number('Razão: ')
    const termo = get_positive_number('Primeiro termo: ')
    const n = get_positive_number('Quantidade de termos: ')

    let posição_termo = 1
    let resultado = ''

    let contador = 0

    while (contador != n){
        let pg = termo * razao ** (posição_termo - 1)

        resultado = resultado + pg.toString() + ' '

        posição_termo += 1
        contador += 1
    }

    console.log(resultado)
}

function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
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