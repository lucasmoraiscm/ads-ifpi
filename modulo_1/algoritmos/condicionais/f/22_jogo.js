import {question} from 'readline-sync'

function main(){
    console.log('>>> Verificar a duração do jogo <<<')

    const hora_inicio = get_number('Hora do início do jogo: ')
    const minutos_inicio = get_number('Minutos do início do jogo: ')
    const hora_final = get_number('Hora do final do jogo: ')
    const minutos_final = get_number('Minutos do final do jogo: ')

    if (hora_inicio >= 0 && hora_inicio <= 23 && hora_final >= 0 && hora_final <= 23){
        if (minutos_inicio >= 0 && minutos_inicio <= 59 && minutos_final >= 0 && minutos_final <= 59){
            const hora_duracao = verificar_horas(hora_inicio, hora_final)
            const minutos_duracao = verificar_minutos(minutos_inicio, minutos_final)

            const resultado = `
            Duração do jogo: ${hora_duracao}h ${minutos_duracao}min
            `
            console.log(resultado)
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

function verificar_horas(h_inicio, h_final){
    return h_final - h_inicio
}

function verificar_minutos(m_inicio, m_final){
    return m_final - m_inicio
}

main()