import {question} from 'readline-sync'

function main(){
    console.log('>>> Verificar o sexo indicado <<<')

    const letra = get_text('Letra: ')

    const sexo = verificar_sexo(letra)

    console.log(sexo)
}

function get_text(mensagem){
    const t = question(mensagem)
    return t.toUpperCase()
}

function verificar_sexo(l){
    if (l === 'F'){
        return 'Feminino'
    }else if (l === 'M'){
        return 'Masculino'
    }else{
        return 'Sexo inválido!'
    }
}

main()