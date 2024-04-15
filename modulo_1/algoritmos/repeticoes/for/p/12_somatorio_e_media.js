import { show } from "../../../utils/io_utils.js"
import { get_number, get_positive_number } from "../../../utils/math_utils.js"

function main(){
    const n = get_positive_number('Valor de N: ')
    let somatorio = 0

    for (let contador = 1; contador <= n; contador++){
        const numero = get_number('Digite um número: ')
        somatorio += numero
    }

    const media = somatorio / n

    show(`A soma dos números é igual à ${somatorio} e a média é igual à ${media.toFixed(1)}`)

}

main()