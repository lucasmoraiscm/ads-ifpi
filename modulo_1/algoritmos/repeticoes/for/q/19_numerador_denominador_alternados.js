import { show } from "../../../utils/io_utils.js"
import { get_positive_number } from "../../../utils/math_utils.js"

function main(){
    const n = get_positive_number('Digite o valor de N: ')
    let valor = n
    let sequencia = 'S = '

    for (let contador = 1; contador <= n; contador++){
        if (contador == n){
            if (contador % 2 == 0){
                sequencia += `${valor}/${contador}`
            }else{
                sequencia += `${contador}/${valor}`
            }
        }else{
            if (contador % 2 == 0){
                sequencia += `${valor}/${contador} + `
            }else{
                sequencia += `${contador}/${valor} - `
            }
        }

        valor--
    }

    show(sequencia)
}

main()