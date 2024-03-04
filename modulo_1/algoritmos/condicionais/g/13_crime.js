import {question} from 'readline-sync'

function main(){
    console.log('>>> Interrogatório sobre o crime <<<')

    const resposta1 = get_text('Telefonou para a vítima? (S/N): ')
    const resposta2 = get_text('Esteve no local do crime? (S/N): ')
    const resposta3 = get_text('Mora perto da vítima? (S/N): ')
    const resposta4 = get_text('Devia para a vítima? (S/N): ')
    const resposta5 = get_text('Já trabalhou com a vítima? (S/N): ')

    if (resposta1 === 'S' || resposta1 === 'N'){
        if (resposta2 === 'S' || resposta2 === 'N'){
            if (resposta3 === 'S' || resposta3 === 'N'){
                if (resposta4 === 'S' || resposta5 === 'N'){
                    if (resposta5 === 'S' || resposta5 === 'N'){
                        const quantidade_positivas = verificar_positivas(resposta1, resposta2, resposta3, resposta4, resposta5)
                        const envolvimento = verificar_envolvimento(quantidade_positivas)

                        console.log(`O indivíduo é ${envolvimento}`)
                    }else{
                        console.log('Resposta inválida! Responda somente s ou n')
                    }
                }else{
                    console.log('Resposta inválida! Responda somente s ou n')
                }
            }else{
                console.log('Resposta inválida! Responda somente s ou n')
            }
        }else{
            console.log('Resposta inválida! Responda somente s ou n')
        }
    }else{
        console.log('Resposta inválida! Responda somente s ou n')
    }
}

function get_text(mensagem){
    const t = question(mensagem)
    return t.toUpperCase()
}

function verificar_positivas(r1, r2, r3, r4, r5){
    let respostas_positivas = 0
    if (r1 === 'S'){
        respostas_positivas = respostas_positivas + 1
    }
    if (r2 === 'S'){
        respostas_positivas = respostas_positivas + 1
    }
    if (r3 === 'S'){
        respostas_positivas = respostas_positivas + 1
    }
    if (r4 === 'S'){
        respostas_positivas = respostas_positivas + 1
    }
    if (r5 === 'S'){
        respostas_positivas = respostas_positivas + 1
    }
    return respostas_positivas
}

function verificar_envolvimento(qnt_positivas){
    if (qnt_positivas === 2){
        return 'suspeito'
    }else if (qnt_positivas === 3 || qnt_positivas === 4){
        return 'cúmplice'
    }else if (qnt_positivas === 5){
        return 'assassino'
    }else{
        return 'inocente'
    }
}

main()