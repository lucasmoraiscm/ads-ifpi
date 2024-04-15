import { show } from "../../../utils/io_utils.js"
import { get_natural_number, get_positive_number, average, porcentage } from "../../../utils/math_utils.js"

function main(){
    const habitantes = get_positive_number('Quantidade de habitantes: ')
    let somatorio_salario = 0
    let somatorio_filhos = 0
    let qtd_salario_ate_1000 = 0

    for (let contador = 1; contador <= habitantes; contador++){
        const salario = get_positive_number('Salário: ')
        const filhos = get_natural_number('Número de filhos: ')

        if (salario <= 1000){
            qtd_salario_ate_1000 ++
            somatorio_salario += salario
        }else{
            somatorio_salario += salario
        }

        somatorio_filhos += filhos
    }

    const media_salario = average(somatorio_salario, habitantes)
    const media_filhos = average(somatorio_filhos, habitantes)
    const porcentagem_salario_ate_1000 = porcentage(qtd_salario_ate_1000, habitantes)

    const relatorio = `
Quantidade de habitantes: ${habitantes}
Média de salário da população: R$ ${media_salario.toFixed(2)}
Média de filhos da população: ${media_filhos} filhos
Porcentagem de pessoas com salário de até R$ 1000: ${porcentagem_salario_ate_1000.toFixed(2)} %
`

    show(relatorio)
}

main()