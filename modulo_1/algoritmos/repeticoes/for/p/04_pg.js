import { show } from "../../../utils/io_utils.js"
import { get_number } from "../../../utils/math_utils.js"

function main(){
    const a0 = get_number('Valor inicial: ')
    const limite = get_number('Limite: ')
    const razao = get_number('Razão: ')

    let termo = a0
    let contador = 1

    for (; termo < limite; contador++){
        termo = a0 * razao**(contador - 1)
        show(termo)
    }
}

main()