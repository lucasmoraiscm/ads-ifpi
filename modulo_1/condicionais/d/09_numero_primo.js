import {question} from 'readline-sync'

function main(){
    console.log('>>> Verificar se é ou não é primo <<<')

    const numero = get_number('Número de 0 a 100: ')

    if (numero >= 0 && numero <= 100){
        const verificacao = verificar_numero(numero)
        const resultado = `
        O número ${numero} ${verificacao}
        `
        console.log(resultado)
    }else{
        console.log('Número inválido! Digite um número de 0 a 100')
    }
}

function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
}

function verificar_numero(num){
    if (num !=0 && num !=1){
        if (num != 2 && num != 3 && num != 5 && num != 7 && num != 11){
            if (num % 2 != 0){
                if (num % 3 != 0){
                    if (num % 5 != 0){
                        if (num % 7 != 0){
                            if (num % 11 != 0){
                                return 'é primo'
                            }else{
                                return 'não é primo'
                            }
                        }else{
                            return 'não é primo'
                        }
                    }else{
                        return 'não é primo'
                    }
                }else{
                    return 'não é primo'
                }
            }else{
                return 'não é primo'
            }
        }else{
            return 'é primo'
        }
    }else{
        return 'não é primo'
    }
}

main()