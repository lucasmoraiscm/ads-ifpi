import { show } from "../../../utils/io_utils.js"

function main(){
    let numero = 1

    for (let contador = 1; numero <= 10; contador++){
        const resultado = numero * contador
        show(`${numero} X ${contador} = ${resultado}`)

        if (contador == 10){
            if (numero <= 10){
                contador = 0
                numero++
            }
        }
    }
}

main()