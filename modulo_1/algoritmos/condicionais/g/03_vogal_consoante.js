import {question} from 'readline-sync'

function main(){
    console.log('>>> Verificar se a letra é vogal ou consoante <<<')

    const letra = get_text('Letra: ')

    const verificacao = verificar_vogal_consoante(letra)

    console.log(verificacao)
}

function get_text(mensagem){
    const t = question(mensagem)
    return t.toUpperCase()
}

function verificar_vogal_consoante(l){
    if (l === 'A' || l === 'E' || l === 'I' || l === 'O' || l === 'U'){
        return `A letra ${l} é vogal`
    }else{
        return `A letra ${l} é consoante`
    }
}

main()