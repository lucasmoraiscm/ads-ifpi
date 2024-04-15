import { get_text, show } from "../../../utils/io_utils.js"
import { get_number, get_positive_number } from "../../../utils/math_utils.js"

function main(){
    const fichas = get_positive_number('Quantidade de fichas: ')

    let id_mais_magro = ''
    let id_mais_gordo = ''

    let peso_mais_magro = 0
    let peso_mais_gordo = 0

    for (let contador = 1; contador <= fichas; contador++){
        const id = get_text('Identificação: ')
        const nome = get_text('Nome: ')
        const peso = get_positive_number('Peso: ')

        if (contador == 1){
            id_mais_gordo = id
            id_mais_magro = id
            peso_mais_gordo = peso
            peso_mais_magro = peso
        }

        if (peso > peso_mais_gordo){
            peso_mais_gordo = peso
            id_mais_gordo = id
        }
        
        if (peso < peso_mais_magro){
            peso_mais_magro = peso
            id_mais_magro = id
        }
    }

    const relatorio = `
Quantidade de fichas: ${fichas}
Identificação do boi mais gordo: ${id_mais_gordo}
Peso do boi mais gordo: ${peso_mais_gordo}
Identificação do boi mais magro: ${id_mais_magro}
Peso do boi mais magro: ${peso_mais_magro}
`
    show(relatorio)
}

main()