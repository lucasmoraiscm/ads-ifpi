import {question} from 'readline-sync'

function main(){
    console.log('>>> Verificar se a senha está correta <<<')

    const senha = get_number('Senha: ')

    const verificacao = verificar_senha(senha)

    console.log(verificacao)
}

function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
}

function verificar_senha(senha){
    if (senha === 1234){
        return 'Acesso permitido'
    }else{
        return 'Acesso negado'
    }
}

main()