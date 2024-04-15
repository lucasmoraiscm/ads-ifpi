import { show } from "../../../utils/io_utils.js"
import { get_positive_number } from "../../../utils/math_utils.js"

function main(){
    const n = get_positive_number('Valor de N: ')
    let acrescimo = 1
    let resultado = 0

    for (let contador = 1; contador <= n; contador++){
        resultado += acrescimo
        show(resultado)

        acrescimo++
    }
}

main()