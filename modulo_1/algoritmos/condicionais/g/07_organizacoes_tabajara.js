import {question} from 'readline-sync'

function main(){
    console.log('>>> Sistema de aumento salarial das Organizações Tabajara <<<')

    const salario = get_number('Salário do colaborador: ')

    if (salario > 0){
        const novo_salario = calcular_aumento(salario)

        console.log(novo_salario)
    }else{
        console.log('Salário inválido! Digite um salário maior que R$ 0.00')
    }
}

function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
}

function calcular_aumento(salario){
    if (salario <= 280){
        const aumento = salario * 0.2
        const salario_reajustado = salario + aumento
        return `
        Salário antes do reajuste     : R$ ${salario.toFixed(2)}
        Percentual de aumento aplicado: 20%
        Valor do aumento              : R$ ${aumento.toFixed(2)}
        Novo salário do colaborador   : R$ ${salario_reajustado.toFixed(2)}
        `
    }else if (salario <= 700){
        const aumento = salario * 0.15
        const salario_reajustado = salario + aumento
        return `
        Salário antes do reajuste     : R$ ${salario.toFixed(2)}
        Percentual de aumento aplicado: 15%
        Valor do aumento              : R$ ${aumento.toFixed(2)}
        Novo salário do colaborador   : R$ ${salario_reajustado.toFixed(2)}
        `
    }else if (salario <= 1500){
        const aumento = salario * 0.1
        const salario_reajustado = salario + aumento
        return `
        Salário antes do reajuste     : R$ ${salario.toFixed(2)}
        Percentual de aumento aplicado: 10%
        Valor do aumento              : R$ ${aumento.toFixed(2)}
        Novo salário do colaborador   : R$ ${salario_reajustado.toFixed(2)}
        `
    }else{
        const aumento = salario * 0.05
        const salario_reajustado = salario + aumento
        return `
        Salário antes do reajuste     : R$ ${salario.toFixed(2)}
        Percentual de aumento aplicado: 5%
        Valor do aumento              : R$ ${aumento.toFixed(2)}
        Novo salário do colaborador   : R$ ${salario_reajustado.toFixed(2)}
        `
    }
}

main()