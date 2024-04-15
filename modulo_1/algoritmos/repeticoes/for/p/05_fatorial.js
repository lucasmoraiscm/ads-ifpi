import { show } from "../../../utils/io_utils.js"
import { get_natural_number } from "../../../utils/math_utils.js"

function main(){
    const numero = get_natural_number('Digite um valor: ')
    let fatorial = 1

    for (let contador = 1; contador <= numero; contador++){
        fatorial *= contador
    }

    show(fatorial)
}

main()