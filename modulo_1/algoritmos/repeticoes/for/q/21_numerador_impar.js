import { show } from "../../../utils/io_utils.js"

function main(){
    let numerador = 1
    let sequencia = 'S = '

    for (let contador = 1; contador <= 50; contador++){
        if (contador == 50){
            sequencia += `${numerador}/${contador}`
        }else{
            sequencia += `${numerador}/${contador} + `
        }

        numerador += 2
    }

    show(sequencia)
}

main()