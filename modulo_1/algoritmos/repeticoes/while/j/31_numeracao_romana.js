import { question } from 'readline-sync'

function main(){
    const decimal = get_positive_number('Número decimal: ')
    
    if (decimal < 1000){
        if (decimal < 100){
            if (decimal < 10){
                const unidade = decimal

                const unidade_romana = calcular_unidade_romana(unidade)

                console.log(`${decimal} = ${unidade_romana}`)
            }else{
                const unidade = calcular_unidade(decimal)
                const dezena = calcular_dezena(decimal, 2)

                const unidade_romana = calcular_unidade_romana(unidade)
                const dezena_romana = calcular_dezena_romana(dezena)

                console.log(`${decimal} = ${dezena_romana}${unidade_romana}`)
            }
        }else{
            const unidade = calcular_unidade(decimal)
            const dezena = calcular_dezena(decimal, 3)
            const centena = calcular_centena(decimal)

            const unidade_romana = calcular_unidade_romana(unidade)
            const dezena_romana = calcular_dezena_romana(dezena)
            const centena_romana = calcular_centena_romana(centena)

            console.log(`${decimal} = ${centena_romana}${dezena_romana}${unidade_romana}`)
        }
    }
}

function get_positive_number(mensagem){
    let n = Number(question(mensagem))

    if (n > 0){
        return n
    }else{
        while (n <= 0){
            n = Number(question(mensagem))
        }
        return n
    }
}

function calcular_unidade(n){
    const unidade = n % 10
    return unidade
}

function calcular_dezena(n, c){
    if (c === 2){
        const dezena = Math.floor(n / 10)
        return dezena
    }else if (c === 3){
        const resto = n % 100
        const dezena = Math.floor(resto / 10)
        return dezena
    }
}

function calcular_centena(n){
    const centena = Math.floor(n / 100)
    return centena
}

function calcular_unidade_romana(n){
    if (n === 0){
        return ''
    }else if (n === 1){
        return 'I'
    }else if (n === 2){
        return 'II'
    }else if (n === 3){
        return 'III'
    }else if (n === 4){
        return 'IV'
    }else if (n === 5){
        return 'V'
    }else if (n === 6){
        return 'VI'
    }else if (n === 7){
        return 'VII'
    }else if (n === 8){
        return 'VIII'
    }else if (n === 9){
        return 'IX'
    }
}

function calcular_dezena_romana(n){
    if (n === 0){
        return ''
    }else if (n === 1){
        return 'X'
    }else if (n === 2){
        return 'XX'
    }else if (n === 3){
        return 'XXX'
    }else if (n === 4){
        return 'XL'
    }else if (n === 5){
        return 'L'
    }else if (n === 6){
        return 'LX'
    }else if (n === 7){
        return 'LXX'
    }else if (n === 8){
        return 'LXXX'
    }else if (n === 9){
        return 'XC'
    }
}

function calcular_centena_romana(n){
    if (n === 0){
        return ''
    }else if (n === 1){
        return 'C'
    }else if (n === 2){
        return 'CC'
    }else if (n === 3){
        return 'CCC'
    }else if (n === 4){
        return 'CD'
    }else if (n === 5){
        return 'D'
    }else if (n === 6){
        return 'DC'
    }else if (n === 7){
        return 'DCC'
    }else if (n === 8){
        return 'DCCC'
    }else if (n === 9){
        return 'CM'
    }
}

main()