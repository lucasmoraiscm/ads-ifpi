import { question } from 'readline-sync'

function main(){
    let homens = 0
    let mulheres = 0
    let somatorio_idade_homens = 0
    let somatorio_idade_mulheres = 0
    let solteiro = 0
    let homens_solteiros = 0
    let mulheres_solteiras = 0
    let mulheres_divorciadas_30_mais = 0

    let contador = 0

    while (contador !== 100){
        const sexo = get_positive_number('Sexo: ')
        const idade = get_positive_number('Idade: ')
        const estado_civil = get_positive_number('Estado civil: ')

        if (sexo === 1){
            if (estado_civil === 2){
                somatorio_idade_homens += idade
                homens += 1
                solteiro += 1
                homens_solteiros += 1
            }else{
                somatorio_idade_homens += idade
                homens += 1
            }
        }else if (sexo === 2){
            if (estado_civil === 2){
                somatorio_idade_mulheres += idade
                mulheres += 1
                solteiro += 1
                mulheres_solteiras += 1
            }else if (estado_civil === 3){
                if (idade > 30){
                    somatorio_idade_mulheres += idade
                    mulheres += 1
                    mulheres_divorciadas_30_mais += 1
                }else{
                    somatorio_idade_mulheres += idade
                    mulheres += 1
                }
            }else{
                somatorio_idade_mulheres += idade
                mulheres += 1
            }
        }

        contador += 1
    }

    const media_idade_mulheres = somatorio_idade_mulheres / mulheres
    const media_idade_homens = somatorio_idade_homens / homens

    const percentual_homens_solteiros = (homens_solteiros / homens) * 100
    const percentual_mulheres_solteiras = (mulheres_solteiras / mulheres) * 100

    const relatorio = `
Média de idade das mulheres: ${media_idade_mulheres.toFixed(1)} anos
Média de idade dos homens: ${media_idade_homens.toFixed(1)} anos
Percentual de homens solteiros: ${percentual_homens_solteiros.toFixed(2)}%
Percentual de mulheres solteiras: ${percentual_mulheres_solteiras.toFixed(2)}%
Quantidade de mulheres divorciadas acima de 30 anos: ${mulheres_divorciadas_30_mais} mulheres
`
    console.log(relatorio)
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

main()