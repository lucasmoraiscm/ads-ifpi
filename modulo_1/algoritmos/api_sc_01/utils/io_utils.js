import { question } from 'readline-sync'

export function get_text(mensagem){
    const text = question(mensagem)
    return text.toUpperCase()
}

export function show(mensagem){
    return console.log(mensagem)
}
