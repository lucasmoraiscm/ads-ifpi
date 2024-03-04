import {question} from 'readline-sync'

function main(){
    console.log('>>> Verificar qual produto é mais barato <<<')

    const produto1 = get_number('Preço do produto 1: ')
    const produto2 = get_number('Preço do produto 2: ')
    const produto3 = get_number('Preço do produto 3: ')

    if (produto1 > 0 && produto2 > 0 && produto3 > 0){
        const mais_barato = verificar_barato(produto1, produto2, produto3)

        console.log(mais_barato)
    }else{
        console.log('Preço inválido! Digite um preço maior que 0')
    }
}

function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
}

function verificar_barato(p1, p2, p3){
    if (p1 < p2 && p1 < p3){
        return `O produto 1 deve ser comprado (R$ ${p1.toFixed(2)})`
    }else if (p2 < p1 && p2 < p3){
        return `O produto 2 deve ser comprado (R$ ${p2.toFixed(2)})`
    }else if (p3 < p1 && p3 < p2){
        return `O produto 3 deve ser comprado (R$ ${p3.toFixed(2)})`
    }else{
        return 'Qualquer um dos produtos pode ser comprado, pois custam o mesmo preço'
    }
}

main()