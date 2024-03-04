import {question} from 'readline-sync'

function main(){
    console.log('>>> Calcular o preço dos combustíveis com desconto <<<')

    const litros = get_number('Quantidade de litros do combustível: ')
    const combustivel = get_text('Tipo de combustível: ')

    if (litros > 0){
        if (combustivel === 'A' || combustivel === 'G'){
            const preco_total = calcular_preco_total(litros, combustivel)
            const desconto = calcular_desconto(litros, combustivel, preco_total)
            const preco_descontado = calcular_preco_descontado(preco_total, desconto)

            const resultado = `
            Quantidade de combustível    : ${litros} l
            Tipo de combustível          : ${combustivel}
            ---------------------------------------------------
            Valor do combustível         : R$ ${preco_total.toFixed(2)}
            Desconto                     : - R$ ${desconto.toFixed(2)}
            ---------------------------------------------------
            Valor a ser pago             : R$ ${preco_descontado.toFixed(2)}
            `
            console.log(resultado)
        }else{
            console.log('Tipo de combustível inválido! Digite A ou G')
        }
    }else{
        console.log('Quantidade de litros do combustível inválida! Digite um valor acima de 0')
    }
}

function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
}

function get_text(mensagem){
    const t = question(mensagem)
    return t.toUpperCase()
}

function calcular_preco_total(l, c){
    if (c === 'A'){
        return l * 1.9
    }else{
        return l * 2.5
    }
}

function calcular_desconto(l, c, p){
    if (c === 'A'){
        if (l <= 20){
            return p * 0.03
        }else{
            return p * 0.05
        }
    }else{
        if (l <= 20){
            return p * 0.04
        }else{
            return p * 0.06
        }
    }
}

function calcular_preco_descontado(p, d){
    return p - d
}

main()