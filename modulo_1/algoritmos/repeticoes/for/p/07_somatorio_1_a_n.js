import { show } from "../../../utils/io_utils.js"
import { get_positive_number } from "../../../utils/math_utils.js"

function main(){
    const n = get_positive_number('Digite o valor de N: ')
    let somatorio = 0

    for (let contador = 2; contador < n; contador++){
        somatorio += contador
    }

    show(`O soma dos número entre 1 e ${n} é igual a ${somatorio}`)
}

main()