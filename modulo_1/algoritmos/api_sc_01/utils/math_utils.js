import { question } from 'readline-sync'

export function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
}

export function get_natural_number(mensagem){
    const natural_n = Number(question(mensagem))

    if (natural_n < 0){
        console.log('Número inválido!')
        return get_natural_number(mensagem)
    }

    return natural_n
}

export function get_positive_number(mensagem){
    const positive_n = Number(question(mensagem))

    if (positive_n <= 0){
        console.log('Número inválido!')
        return get_positive_number(mensagem)
    }

    return positive_n
}

export function average(sum, count){
    return sum / count
}

export function porcentage(num, den){
    return (num / den) * 100
}