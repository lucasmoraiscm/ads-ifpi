import {question} from 'readline-sync'

function main(){
    console.log('>>> Verificar qual professor tem salário total maior <<<')

    const horas_prof1 = get_number('Horas aulas dadas pelo professor 1: ')
    const valor_prof1 = get_number('Valor por hora recebido pelo professor 1: ')
    const horas_prof2 = get_number('Horas aulas dadas pelo professor 2: ')
    const valor_prof2 = get_number('Valor por hora recebido pelo professor 2: ')

    const prof = verificar_professor(horas_prof1, valor_prof1, horas_prof2, valor_prof2)
    const maior_salario = verificar_salario(horas_prof1, valor_prof1, horas_prof2, valor_prof2)

    const resultado = `
    O ${prof}, R$ ${maior_salario.toFixed(2)}
    `
    console.log(resultado)
}

function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
}

function verificar_professor(h_prof1, v_prof1, h_prof2, v_prof2){
    if (h_prof1 * v_prof1 > h_prof2 * v_prof2){
        return 'professor 1 tem salário total maior'
    }else if (h_prof1 * v_prof1 < h_prof2 * v_prof2){
        return 'professor 2 tem salário total maior'
    }else{
        return 'professor 1 e o professor 2 têm salários iguais'
    }
}

function verificar_salario(h_prof1, v_prof1, h_prof2, v_prof2){
    if (h_prof1 * v_prof1 > h_prof2 * v_prof2){
        return h_prof1 * v_prof1
    }else if (h_prof1 * v_prof1 < h_prof2 * v_prof2){
        return h_prof2 * v_prof2
    }else{
        return h_prof1 * v_prof1
    }
}

main()