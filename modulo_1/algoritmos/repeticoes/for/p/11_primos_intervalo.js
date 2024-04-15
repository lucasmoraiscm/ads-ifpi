import { show } from "../../../utils/io_utils.js"
import { get_positive_number } from "../../../utils/math_utils.js"

function main(){
    const limite_inferior = get_positive_number('Limite inferior: ')
    const limite_superior = get_positive_number('Limite superior: ')
    let divisores = 0

    for (let contador = limite_inferior + 1; contador < limite_superior; contador++){
        for (let divisor = 2; divisor < contador; divisor++){
            if (contador % divisor == 0){
                divisores++
            }
        }

        if (divisores == 0){
            show(contador)
        }

        divisores = 0
    }
}

main()