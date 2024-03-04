import {question} from 'readline-sync'

function main(){
    console.log('>>> Calcular o preço de acordo com o Kg de frutas <<<')

    const morangos_kg = get_number('Quantidade em Kg de morangos: ')
    const macas_kg = get_number('Quantidade em Kg de maçãs: ')

    if(morangos_kg > 0 && macas_kg > 0){
        const preco_morangos = calcular_preco_morangos(morangos_kg)
        const preco_macas = calcular_preco_macas(macas_kg)
        let preco_total = calcular_preco_total(preco_morangos, preco_macas)

        if (morangos_kg + macas_kg > 8 || preco_total > 25){
            const descontos = preco_total * 0.1
            preco_total = preco_total - descontos

            const resultado = `
            Kg de morangos     : ${morangos_kg} Kg
            Kg de maçãs        : ${macas_kg} Kg
            --------------------------------------------
            Preço dos morangos : R$ ${preco_morangos.toFixed(2)}
            Preço das maçãs    : R$ ${preco_macas.toFixed(2)}
            Descontos          : - R$ ${descontos.toFixed(2)}
            --------------------------------------------
            Preço total a pagar: R$ ${preco_total.toFixed(2)}
            `
            console.log(resultado)
        }else{
            const resultado = `
            Kg de morangos     : ${morangos_kg} Kg
            Kg de maçãs        : ${macas_kg} Kg
            --------------------------------------------
            Preço dos morangos : R$ ${preco_morangos.toFixed(2)}
            Preço das maçãs    : R$ ${preco_macas.toFixed(2)}
            --------------------------------------------
            Preço total a pagar: R$ ${preco_total.toFixed(2)}
            `
            console.log(resultado)
        }
    }else{
        console.log('Quantidade inválida! Digite uma quantidade maior que 0')
    }
}

function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
}

function calcular_preco_morangos(mor_kg){
    if (mor_kg <= 5){
        return mor_kg * 2.5
    }else{
        return mor_kg * 2.2
    }
}

function calcular_preco_macas(mac_kg){
    if (mac_kg <= 5){
        return mac_kg * 1.8
    }else{
        return mac_kg * 1.5
    }
}

function calcular_preco_total(p_mor, p_mac){
    return p_mor + p_mac
}

main()