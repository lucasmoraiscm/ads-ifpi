import { show } from "../../../utils/io_utils.js"
import { get_positive_number } from "../../../utils/math_utils.js"

function main(){
    const n = get_positive_number('Digite o valor de N: ')
    let contador = 0
    let quadrado = 0
    
    for (; quadrado < n; contador++){
        quadrado = contador ** 2
    }

    quadrado = (contador - 2) ** 2

    show(`O maior quadrado menor que ${n} é ${quadrado}`)
}

main()