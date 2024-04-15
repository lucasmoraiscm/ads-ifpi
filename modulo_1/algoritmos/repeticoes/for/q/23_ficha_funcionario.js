import { get_text, show } from "../../../utils/io_utils.js"
import { get_natural_number, get_positive_number } from "../../../utils/math_utils.js"

function main(){
    const fichas = get_positive_number('Quantidade de fichas: ')
    let salario_bruto = 0
    let salario_liquido = 0

    for (let contador = 1; contador <= fichas; contador++){
        const cod = get_text('Código: ')
        const horas_trabalhadas = get_positive_number('Número de horas trabalhadas: ')
        const dependentes = get_natural_number('Número de dependentes: ')

        salario_bruto += calcular_remuneracao_horas(horas_trabalhadas)
        salario_bruto += calcular_remuneracao_dependentes(dependentes)

        const desconto_inss = calcular_desconto_inss(salario_bruto)
        const desconto_ir = calcular_desconto_ir(salario_bruto)
        
        salario_liquido = salario_bruto - (desconto_inss + desconto_ir)

        const extrato = `
Código: ${cod}
Horas trabalhadas: ${horas_trabalhadas}
Número de dependentes: ${dependentes}
--------------------------------------
Salário bruto: R$ ${salario_bruto.toFixed(2)}
INSS: - R$ ${desconto_inss.toFixed(2)}
IR: - R$ ${desconto_ir.toFixed(2)}
--------------------------------------
Salário líquido: R$ ${salario_liquido.toFixed(2)}
`
        show(extrato)
    }

}

function calcular_remuneracao_horas(horas){
    const valor_hora = 12
    return valor_hora * horas
}

function calcular_remuneracao_dependentes(dependentes){
    const valor_dependente = 40
    return valor_dependente * dependentes
}

function calcular_desconto_inss(salario){
    const taxa_inss = 0.085
    return salario * taxa_inss
}

function calcular_desconto_ir(salario){
    const taxa_ir = 0.05
    return salario * taxa_ir
}

main()