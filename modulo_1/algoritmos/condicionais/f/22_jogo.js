import {question} from 'readline-sync'

function main(){
    console.log('>>> Verificar a duração do jogo <<<')

    let hora_inicio = get_number('Hora do início do jogo: ')
    let minutos_inicio = get_number('Minutos do início do jogo: ')
    let hora_final = get_number('Hora do final do jogo: ')
    let minutos_final = get_number('Minutos do final do jogo: ')

    if (hora_inicio >= 0 && hora_inicio <= 23 && hora_final >= 0 && hora_final <= 23){
        if (minutos_inicio >= 0 && minutos_inicio <= 59 && minutos_final >= 0 && minutos_final <= 59){
            if (hora_inicio < hora_final){
                if (minutos_inicio <= minutos_final){
                    const minutos_total_inicio = converter_minutos(hora_inicio, minutos_inicio)
                    const minutos_total_final = converter_minutos(hora_final, minutos_final)
                    const duracao = calcular_duracao(minutos_total_inicio, minutos_total_final)

                    console.log(duracao)
                }else{
                    hora_final = hora_final - 1
                    minutos_final = minutos_final + 60
                    const minutos_total_inicio = converter_minutos(hora_inicio, minutos_inicio)
                    const minutos_total_final = converter_minutos(hora_final, minutos_final)
                    const duracao = calcular_duracao(minutos_total_inicio, minutos_total_final)

                    console.log(duracao)
                }
            }else if (hora_inicio > hora_final){
                if (minutos_inicio <= minutos_final){
                    hora_final = hora_final + 24
                    const minutos_total_inicio = converter_minutos(hora_inicio, minutos_inicio)
                    const minutos_total_final = converter_minutos(hora_final, minutos_final)
                    const duracao = calcular_duracao(minutos_total_inicio, minutos_total_final)

                    console.log(duracao)
                }else{
                    hora_final = hora_final + 23
                    minutos_final = minutos_final + 60
                    const minutos_total_inicio = converter_minutos(hora_inicio, minutos_inicio)
                    const minutos_total_final = converter_minutos(hora_final, minutos_final)
                    const duracao = calcular_duracao(minutos_total_inicio, minutos_total_final)

                    console.log(duracao)
                }
            }else{
                if (minutos_inicio < minutos_final){
                    const minutos_total_inicio = converter_minutos(hora_inicio, minutos_inicio)
                    const minutos_total_final = converter_minutos(hora_final, minutos_final)
                    const duracao = calcular_duracao(minutos_total_inicio, minutos_total_final)

                    console.log(duracao)
                }else if (minutos_inicio > minutos_final){
                    hora_final = hora_final + 23
                    minutos_final = minutos_final + 60
                    const minutos_total_inicio = converter_minutos(hora_inicio, minutos_inicio)
                    const minutos_total_final = converter_minutos(hora_final, minutos_final)
                    const duracao = calcular_duracao(minutos_total_inicio, minutos_total_final)

                    console.log(duracao)
                }else{
                    hora_final = hora_final + 24
                    const minutos_total_inicio = converter_minutos(hora_inicio, minutos_inicio)
                    const minutos_total_final = converter_minutos(hora_final, minutos_final)
                    const duracao = calcular_duracao(minutos_total_inicio, minutos_total_final)

                    console.log(duracao)
                }
            }
        }else{
            console.log('Minutos inválidos! Digite de 0 a 59min')
        }
    }else{
        console.log('Hora inválida! Digite de 0 a 23h')
    }
}

function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
}

function converter_minutos(v1, v2){
    return v1 * 60 + v2
}

function calcular_duracao(min_total_inicio, min_total_final){
    const min_total_duracao = min_total_final - min_total_inicio
    const horas_duracao = Math.floor(min_total_duracao / 60)
    const minutos_duracao = min_total_duracao % 60
    return `Duração do jogo: ${horas_duracao}h e ${minutos_duracao}min`
}

main()