import { show } from "../../../utils/io_utils.js"
import { get_positive_number, get_natural_number } from "../../../utils/math_utils.js"

function main(){
    const n = get_positive_number('Valor de N: ')
    const limite_inferior = get_natural_number('Limite inferior: ')
    const limite_superior = get_positive_number('Limite superior: ')

    for (let contador = limite_inferior + 1; contador < limite_superior; contador++){
        if (contador % n == 0){
            show(contador)
        }
    }
}

main()