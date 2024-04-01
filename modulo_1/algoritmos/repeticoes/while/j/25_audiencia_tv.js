import { question } from 'readline-sync'

function main(){
    let canal2 = 0
    let canal4 = 0
    let canal5 = 0
    let canal7 = 0
    let canal10 = 0
    let total_audiencia = 0

    let status = 1

    while (status != 0){
        const canal = get_natural_number('Número do canal: ')
        const audiencia = get_natural_number('Número de pessoas assistindo: ')

        if (canal === 2){
            canal2 += audiencia
            total_audiencia += audiencia
        }else if (canal === 4){
            canal4 += audiencia
            total_audiencia += audiencia
        }else if (canal === 5){
            canal5 += audiencia
            total_audiencia += audiencia
        }else if (canal === 7){
            canal7 += audiencia
            total_audiencia += audiencia
        }else if (canal === 10){
            canal10 += audiencia
            total_audiencia += audiencia
        }else if (canal === 0){
            status -= 1
        }
    }

    const percentual_canal2 = calcular_porcentagem(canal2, total_audiencia)
    const percentual_canal4 = calcular_porcentagem(canal4, total_audiencia)
    const percentual_canal5 = calcular_porcentagem(canal5, total_audiencia)
    const percentual_canal7 = calcular_porcentagem(canal7, total_audiencia)
    const percentual_canal10 = calcular_porcentagem(canal10, total_audiencia)

    const relatorio = `
Canal 2: ${percentual_canal2.toFixed(2)}%    
Canal 4: ${percentual_canal4.toFixed(2)}%    
Canal 5: ${percentual_canal5.toFixed(2)}%    
Canal 7: ${percentual_canal7.toFixed(2)}%    
Canal 10: ${percentual_canal10.toFixed(2)}%
Audiência total: ${total_audiencia} pessoas
`
    console.log(relatorio)
}

function get_natural_number(mensagem){
    let n = Number(question(mensagem))

    if (n >= 0){
        return n
    }else{
        while (n < 0){
            n = Number(question(mensagem))
        }
        return n
    }   
}

function calcular_porcentagem(valor, total){
    const porcentagem = (valor / total) * 100
    return porcentagem
}

main()