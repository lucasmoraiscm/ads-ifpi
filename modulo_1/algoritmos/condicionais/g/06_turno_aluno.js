import {question} from 'readline-sync'

function main(){
    console.log('>>> Mostrar uma mensagem de acordo com o turno que o aluno estuda <<<')

    const turno = get_text('Turno que o aluno estuda: ')

    if (turno === 'M' || turno === 'V' || turno === 'N'){
        const verificacao = verificar_turno(turno)

        console.log(verificacao)
    }else{
        console.log('Turno inválido! Digite M, V ou N')
    }
}

function get_text(mensagem){
    const t = question(mensagem)
    return t.toUpperCase()
}

function verificar_turno(t){
    if (t === 'M'){
        return 'Bom dia!'
    }else if(t === 'V'){
        return 'Boa tarde!'
    }else{
        return 'Boa noite!'
    }
}

main()