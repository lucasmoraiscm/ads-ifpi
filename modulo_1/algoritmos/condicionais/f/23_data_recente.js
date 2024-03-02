import {question} from 'readline-sync'

function main(){
    console.log('>>> Verificar data mais recente <<<')

    const dia1 = get_number('Dia 1: ')
    const mes1 = get_number('Mês 1: ')
    const ano1 = get_number('Ano 1: ')
    const dia2 = get_number('Dia 2: ')
    const mes2 = get_number('Mês 2: ')
    const ano2 = get_number('Ano 2: ')

    const data_recente = verificar_data(dia1, mes1, ano1, dia2, mes2, ano2)

    const resultado = data_recente
    console.log(resultado)
}

function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
}

function verificar_data(d1, m1, a1, d2, m2, a2){
    if (a1 < a2){
        return `A data mais recente é ${d1}/${m1}/${a1}`
    }else if (a1 > a2){
        return `A data mais recente é ${d2}/${m2}/${a2}`
    }else{
        if (m1 < m2){
            return `A data mais recente é ${d1}/${m1}/${a1}`
        }else if (m1 > m2){
            return `A data mais recente é ${d2}/${m2}/${a2}`
        }else{
            if (d1 < d2){
                return `A data mais recente é ${d1}/${m1}/${a1}`
            }else if (d1 > d2){
                return `A data mais recente é ${d2}/${m2}/${a2}`
            }else{
                return `As datas são iguais`
            }
        }
    }
}

main()