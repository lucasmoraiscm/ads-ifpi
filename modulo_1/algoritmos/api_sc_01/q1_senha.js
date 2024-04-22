import { show } from '../api_sc_01/utils/io_utils.js'
import { get_positive_number } from '../api_sc_01/utils/math_utils.js'

function main(){
    let status = 1

    while (status != 0){
        const digitos = get_positive_number('Quantidade de dígitos: ')

        const senha = gerar_senha(digitos)

        show(`Senha sugerida: ${senha}`)

        show(`
1 - Sim 
2 - Não`)
        const pergunta = get_positive_number('Você está satisfeito com essa senha?: ')

        if (pergunta == 1) {
            status --
        }
    }
}

function gerar_senha(d){
    let senha = ''
    let n = gerar_n_aleatorio()
    let n_anterior = n
    senha += n
    let counter = 1

    while (counter < d){
        n = gerar_n_aleatorio()

        if (n != n_anterior){
            if (n > 0){
                if (n < 9){
                    if (n_anterior != n - 1 && n_anterior != n + 1){
                        senha += n
                        n_anterior = n
                        counter ++
                    }
                }else{
                    if (n_anterior != 8){
                        senha += n
                        n_anterior = n
                        counter ++
                    }
                }
            }else{
                if (n_anterior != 1){
                    senha += n
                    n_anterior = n
                    counter ++
                }
            }
        }
    }

    return senha
}

function gerar_n_aleatorio(){
    const n = Math.floor(Math.random() * 9)
    return n
}

main()