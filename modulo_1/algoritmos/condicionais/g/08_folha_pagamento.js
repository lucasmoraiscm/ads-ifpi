import {question} from 'readline-sync'

function main(){
    console.log('>>> Cálculo da folha de pagamento <<<')

    const valor_hora = get_number('Valor da hora de trabalho: ')
    const horas_trabalho = get_number('Horas trabalhadas: ')

    if (valor_hora > 0 && horas_trabalho > 0){
        const salario_bruto = calcular_salario_bruto(valor_hora, horas_trabalho)
        const ir = calcular_ir(salario_bruto)
        const porcentagem_ir = calcular_porcentagem_ir(salario_bruto)
        const sindicato = calcular_sindicato(salario_bruto)
        const inss = calcular_inss(salario_bruto)
        const fgts = calcular_fgts(salario_bruto)
        const descontos = calcular_descontos(ir, sindicato, inss)
        const salario_liquido = calcular_salario_liquido(salario_bruto, descontos)

        const resultado = `
        Salário bruto (${horas_trabalho} * ${valor_hora}) : R$ ${salario_bruto.toFixed(2)}
        (-) IR (${porcentagem_ir})       : R$ ${ir.toFixed(2)}
        (-) INSS (10%)     : R$ ${inss.toFixed(2)}
        (-) Sindicato (3%) : R$ ${sindicato.toFixed(2)}
        FGTS (11%)         : R$ ${fgts.toFixed(2)}
        Total de descontos : R$ ${descontos.toFixed(2)}
        Salário líquido    : R$ ${salario_liquido.toFixed(2)}
        `
        console.log(resultado)
    }else{
        console.log('Valor inválido! Digite um valor correto')
    }
}

function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
}

function calcular_salario_bruto(valor_hora, horas_trabalho){
    return valor_hora * horas_trabalho
}

function calcular_ir(salario_bruto){
    if (salario_bruto <= 900){
        return 0
    }else if (salario_bruto <= 1500){
        return salario_bruto * 0.05
    }else if (salario_bruto <= 2500){
        return salario_bruto * 0.1
    }else{
        return salario_bruto * 0.2
    }
}

function calcular_porcentagem_ir(salario_bruto){
    if (salario_bruto <= 900){
        return 'Isento'
    }else if (salario_bruto <= 1500){
        return '5%'
    }else if (salario_bruto <= 2500){
        return '10%'
    }else{
        return '20%'
    }
}

function calcular_sindicato(salario_bruto){
    return salario_bruto * 0.03
}

function calcular_inss(salario_bruto){
    return salario_bruto * 0.1
}

function calcular_fgts(salario_bruto){
    return salario_bruto * 0.11
}

function calcular_descontos(ir, sindicato, inss){
    return ir + sindicato + inss
}

function calcular_salario_liquido(salario_bruto, descontos){
    return salario_bruto - descontos
}

main()