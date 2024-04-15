import { show } from "../../../utils/io_utils.js"
import {  get_positive_number, get_natural_number } from "../../../utils/math_utils.js"

function main(){
    const eleitores = get_positive_number('Quantidade de eleitores: ')
    let votos_candidato_1 = 0
    let votos_candidato_2 = 0
    let votos_candidato_3 = 0
    let votos_nulos = 0
    let votos_brancos = 0

    for (let contador = 1; contador <= eleitores; contador++){
        const voto = get_natural_number('Digite o seu voto: ')

        if (voto === 1){
            votos_candidato_1 ++
        }else if (voto === 2){
            votos_candidato_2 ++
        }else if (voto === 3){
            votos_candidato_3 ++
        }else if (voto === 9){
            votos_nulos ++
        }else if (voto === 0){
            votos_brancos ++
        }
    }

    const candidato_vencedor = verificar_vencedor(votos_candidato_1, votos_candidato_2, votos_candidato_3)

    const relatorio = `
Quantidade de eleitores: ${eleitores} eleitores
-------------------------------------------
Total de votos para o candidato 1: ${votos_candidato_1} votos
Total de votos para o candidato 2: ${votos_candidato_2} votos
Total de votos para o candidato 3: ${votos_candidato_3} votos
Total de votos nulos: ${votos_nulos} votos
Total de votos em branco: ${votos_brancos} votos
-------------------------------------------
Candidato vencedor: ${candidato_vencedor}
`

    show(relatorio)
}

function verificar_vencedor(votos_c1, votos_c2, votos_c3){
    if (votos_c1 > votos_c2 && votos_c1 > votos_c3){
        return 'Candidato 1'
    }else if (votos_c2 > votos_c1 && votos_c2 > votos_c3){
        return 'Candidato 2'
    }else if (votos_c3 > votos_c1 && votos_c3 > votos_c2){
        return 'Candidato 3'
    }else if (votos_c1 === votos_c2 && votos_c1 === votos_c3){
        return 'O Candidato 1, o Candidato 2 e o Candidato 3 empataram'
    }else if (votos_c1 === votos_c2){
        return 'O candidato 1 e o Candidato 2 empataram'
    }else if (votos_c1 === votos_c3){
        return 'O candidato 1 e o Candidato 3 empataram'
    }else{
        return 'O candidato 2 e o Candidato 3 empataram'
    }
}

main()