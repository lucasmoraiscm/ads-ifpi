import { show } from "../../../utils/io_utils.js"
import { get_natural_number, get_positive_number } from "../../../utils/math_utils.js"

function main(){
    const limite_inferior = get_natural_number('Limite inferior: ')
    const limite_superior = get_positive_number('Limite superior: ')

    for (let contador = limite_inferior + 1; contador < limite_superior; contador++){
        if (contador % 2 != 0){
            show(contador)
        }
    }
}

main()