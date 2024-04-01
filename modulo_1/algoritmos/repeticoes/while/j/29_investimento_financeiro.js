import { question } from 'readline-sync'

function main(){
    const investimento_mes = get_positive_number('Quanto será investido por mês: ')
    const juros_mensal = (get_positive_number('Qual será a taxa de juros mensal: ')/100)
    let saldo_investimento = 0

    let mes = 0

    while (mes != 12){
        saldo_investimento += investimento_mes
        saldo_investimento += saldo_investimento * juros_mensal

        mes += 1

        if (mes == 12){
            console.log(`Saldo do investimento após 1 ano: R$ ${saldo_investimento.toFixed(2)}`)
            const pergunta = get_text('Deseja processar mais um ano (S/N) ?: ')
            if (pergunta == 'S'){
                mes = 0
            }
        }
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

function get_text(mensagem){
    let txt = question(mensagem)
    return txt.toUpperCase()
}

main()