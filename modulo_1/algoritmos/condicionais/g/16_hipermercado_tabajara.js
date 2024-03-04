import {question} from 'readline-sync'

function main(){
    console.log('>>> Hipermercado Tabajara <<<')

    const carne_tipo = get_text('Tipo de carne: ')
    const carne_kg = get_number('Quantidade em Kg: ')
    const cartao = get_text('A compra vai ser paga com o Cartão Tabajara? (S/N): ')

    if (carne_tipo === 'F' || carne_tipo === 'A' || carne_tipo === 'P'){
        if (carne_kg > 0){
            if (cartao === 'S'){
                const nome_carne = verificar_nome_carne(carne_tipo)
                const preco_carne = calcular_preco_carne(carne_tipo, carne_kg)
                const desconto = calcular_desconto(preco_carne)
                const preco_desconto = preco_carne - desconto

                const resultado = `
                Hipermercado Tabajara - Cupom fiscal
                ---------------------------------------------
                Tipo de carne      : ${nome_carne}
                Quantidade de carne: ${carne_kg} Kg
                ---------------------------------------------
                Valor da carne     : R$ ${preco_carne.toFixed(2)}
                Desconto           : - R$ ${desconto.toFixed(2)}
                Valor total a pagar: R$ ${preco_desconto.toFixed(2)}
                `
                console.log(resultado)
            }else{
                const nome_carne = verificar_nome_carne(carne_tipo)
                const preco_carne = calcular_preco_carne(carne_tipo, carne_kg)

                const resultado = `
                Hipermercado Tabajara - Cupom fiscal
                ---------------------------------------------
                Tipo de carne      : ${nome_carne}
                Quantidade de carne: ${carne_kg} Kg
                ---------------------------------------------
                Valor da carne     : R$ ${preco_carne.toFixed(2)}
                Desconto           : - R$ 0.00
                Valor total a pagar: R$ ${preco_carne.toFixed(2)}
                `
                console.log(resultado)
            }
        }else{
            console.log('Quantidade em Kg inválida! Digite um valor maior que 0')
        }
    }else{
        console.log('Tipo de carne inválido! Digite F, A ou P')
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

function verificar_nome_carne(carne_tipo){
    if (carne_tipo === 'F'){
        return 'Filé'
    }else if (carne_tipo === 'A'){
        return 'Alcatra'
    }else{
        return 'Picanha'
    }
}

function calcular_preco_carne(carne_tipo, carne_kg){
    if (carne_tipo === 'F'){
        if (carne_kg <= 5){
            return carne_kg * 4.9
        }else{
            return carne_kg * 5.8
        }
    }else if (carne_tipo === 'A'){
        if (carne_kg <= 5){
            return carne_kg * 5.9
        }else{
            return carne_kg * 6.8
        }
    }else{
        if (carne_kg <= 5){
            return carne_kg * 6.9
        }else{
            return carne_kg * 7.8
        }
    }
}

function calcular_desconto(preco_carne){
    return preco_carne * 0.05
}

main()