import {question} from 'readline-sync'

function main(){
    console.log('>>> Verificar se a data é ou não é válida <<<')

    const dia = get_number('Dia: ')
    const mes = get_number('Mês: ')
    const ano = get_number('Ano: ')

    const veficacao = verificar_data(dia, mes, ano)

    const resultado = `
    A data ${dia}/${mes}/${ano} ${veficacao}
   `
   console.log(resultado)
}

function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
}

function verificar_data(dia, mes, ano){
    if (ano > 0 && ano % 4 == 0 ){
        if (mes >= 1 && mes <= 12){
            if (mes == 1, mes == 3, mes == 5, mes == 7, mes == 8, mes == 10, mes == 12){
                if (dia >= 1 && dia <= 31){
                    return 'é válida'
                }else{
                    return 'não é válida'
                }
            }else if (mes == 2){
                if (dia >= 1 && dia <= 29){
                    return 'é válida'
                }else{
                    return 'não é válida'
                }
            }else{
                if (dia >= 1 && dia <= 30){
                    return 'é valida'
                }else{
                    return 'não é válida'
                }
            }
        }else{
            return 'não é válida'
        }
    }else if(ano > 0 && ano % 4 != 0){
        if (mes >= 1 && mes <= 12){
            if (mes == 1, mes == 3, mes == 5, mes == 7, mes == 8, mes == 10, mes == 12){
                if (dia >= 1 && dia <= 31){
                    return 'é válida'
                }else{
                    return 'não é válida'
                }
            }else if (mes == 2){
                if (dia >= 1 && dia <= 28){
                    return 'é válida'
                }else{
                    return 'não é válida'
                }
            }else{
                if (dia >= 1 && dia <= 30){
                    return 'é valida'
                }else{
                    return 'não é válida'
                }
            }
        }else{
            return 'não é válida'
        }
    }else{
        return 'não é válida'
    }
}

main()