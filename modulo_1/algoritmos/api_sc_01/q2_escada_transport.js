import { show } from '../api_sc_01/utils/io_utils.js'
import { get_positive_number } from '../api_sc_01/utils/math_utils.js'

function main(){
    const peso_atual = get_positive_number('Peso atual: ')
    const sexo = get_positive_number('Sexo (1-Masculino ou 2-Feminino): ')
    const quilos_a_perder = get_positive_number('Quantos quilos deseja perder?: ')
    const dias_atividade = get_positive_number('Quantos dias por semana realizará atividade física?: ')
    const tempo_dia = get_positive_number('Quantos minutos irá treinar por dia?: ')
    const proporcao_transport = get_positive_number('Qual a proporção de tempo alocada para o Transport?: ')

    const calorias_a_perder = 7000 * quilos_a_perder
    const tempo_transport = tempo_dia * (proporcao_transport / 100)
    const tempo_escada = tempo_dia - tempo_transport
    let gasto_calorias_transport = calcular_gasto_calorias_transport(tempo_transport, dias_atividade, sexo)
    let gasto_calorias_escada = calcular_gasto_calorias_escada(tempo_escada, dias_atividade, sexo)
    let gasto_calorias_total = 0
    let semanas = 0

    while (calorias_a_perder > gasto_calorias_total){
        semanas ++
        gasto_calorias_total = (gasto_calorias_transport * semanas) + (gasto_calorias_escada * semanas)
    }

    const relatorio = `
Quantidade de semanas para alcançar o objetivo desejado: ${semanas} semanas
Tempo de Transport por dia: ${Math.floor(tempo_transport)} min
Tempo de Escada por dia: ${Math.floor(tempo_escada)} min`
    show(relatorio)
}

function calcular_gasto_calorias_transport(tempo, dias, sexo){
    let calorias = 0
    if (sexo == 1){
        calorias = ((tempo / 5) * 100) * dias
    }else{
        calorias = ((tempo / 6) * 100) * dias
    }
    
    return calorias
}

function calcular_gasto_calorias_escada(tempo, dias, sexo){
    let calorias = 0
    if (sexo == 1){
        calorias = ((tempo / 7) * 100) * dias
    }else{
        calorias = ((tempo / 8) * 100) * dias
    }
    
    return calorias
}

main()