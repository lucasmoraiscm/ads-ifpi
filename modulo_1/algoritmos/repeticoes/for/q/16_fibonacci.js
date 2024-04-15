import { show } from "../../../utils/io_utils.js"
import { get_positive_number } from "../../../utils/math_utils.js"

function main(){
    const n = get_positive_number('Digite o valor de N: ')

    if (n < 2){
        show('Valor inválido')
        return main()
    }

    let anterior = 0
    let atual = 1
    let posterior = 0
    let fibonacci = ''

    fibonacci += `${anterior.toString()}, ${atual.toString()}`

    posterior = anterior + atual

    for (let contador = 2; contador < n; contador++){
        fibonacci += `, ${(posterior).toString()}`

        anterior = atual
        atual = posterior
        posterior = anterior + atual
    }

    show(fibonacci)
}

main()