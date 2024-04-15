import { show } from "../../../utils/io_utils.js"
import { get_number, get_positive_number } from "../../../utils/math_utils.js"

function main(){
    const n = get_positive_number('Valor de N: ')
    let maior = 0

    for (let contador = 1; contador <= n; contador++){
        const numero = get_number('Digite um número: ')
        
        if (numero > maior){
            maior = numero
        }
    }

    show(`O maior número da lista é o ${maior}`)

}

main()