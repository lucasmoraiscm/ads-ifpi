import { show } from "../../../utils/io_utils.js"
import { get_positive_number } from "../../../utils/math_utils.js"

function main(){
    const n = get_positive_number('Digite o valor de N: ')
    let sequencia = 'S = '

    for (let contador = 1; contador <= n; contador++){
        if (contador == n){
            if (contador % 2 == 0){
                sequencia += `1/${contador}`
            }else{
                sequencia += `1/${contador}`
            }
        }else{
            if (contador % 2 == 0){
                sequencia += `1/${contador} + `
            }else{
                sequencia += `1/${contador} - `
            }
        }
    }

    show(sequencia)
}

main()