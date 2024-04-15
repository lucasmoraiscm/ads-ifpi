import { show } from "../../../utils/io_utils.js"
import { get_positive_number } from "../../../utils/math_utils.js"

function main(){
    const n = get_positive_number('Digite o valor de N: ')
    let denominador = n
    let sequencia = 'S = '

    for (let contador = 1; contador <= n; contador++){
        if (contador == n){
            sequencia += `+ ${contador}/${denominador}`
        }else{
            sequencia += `${contador}/${denominador} + `
        }

        denominador--
    }

    show(sequencia)
}

main()