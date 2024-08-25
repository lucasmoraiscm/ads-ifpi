import { menu, inicializar, mostrar_valores, verificar_qtd_itens , verificar_menor, verificar_maior, 
        verificar_valores_positivos, verificar_valores_negativos, atualizar, multiplicar_por_valor, 
        elevar_a_valor, reduzir_a_fracao, substituir_negativos, ordenar } from '../play_number_tradicional/vetor_funcionalidades.js'

import { ler_arquivo, get_number, get_positive_number, show, calcular_somatorio, calcular_media, 
        salvar } from '../play_number_tradicional/utils.js'

import { gerar_vetor_random, gerar_vetor_manual, resertar, ordenar_crescente, ordenar_decrescente, 
        verificar_posicao, embaralhar, adicionar, remover_por_valor, remover_por_posicao, 
        editar_por_posicao } from '../play_number_tradicional/vetor_utils.js'

function main(){
    let numeros = []
    let opcao = menu()

    while (opcao !== 0){
        if (opcao === 1){
            let opcao_inicializar = inicializar()
            
            while (opcao_inicializar != 0){
                const tamanho = get_positive_number('Quantidade de números: ')
                const min = get_number('Número mínimo: ')
                const max = get_number('Número máximo: ')

                if (opcao_inicializar === 1){
                    numeros = gerar_vetor_random(tamanho, min, max)
                }else if (opcao_inicializar === 2){
                    numeros = gerar_vetor_manual(tamanho, min, max)
                }else if (opcao_inicializar === 3){
                    numeros = ler_arquivo(tamanho, min, max)
                }else{
                    show('Opção inválida! Tente novamente!')
                }

                opcao_inicializar = inicializar()
            }  
        }else if (opcao === 2){
            const valores = mostrar_valores(numeros)
            show(valores)
        }else if (opcao === 3){
            resertar(numeros)
            show('Os valores foram resetados com sucesso!')
        }else if (opcao === 4){
            const resultado = verificar_qtd_itens(numeros)
            show(resultado)
        }else if (opcao === 5){
            const maior = verificar_maior(numeros)
            const menor = verificar_menor(numeros)
            const posicao_maior = verificar_posicao(numeros, maior)
            const posicao_menor = verificar_posicao(numeros, menor)
            show(`
Menor: ${menor} -> Posição: ${posicao_menor}
Maior: ${maior} -> Posição: ${posicao_maior}
`)
        }else if (opcao === 6){
            const somatorio = calcular_somatorio(numeros) //reduce
            show(`Somatório: ${somatorio}`)
        }else if (opcao === 7){
            const media = calcular_media(numeros)
            show(`Média: ${media}`)
        }else if (opcao === 8){
            const valores_positivos = verificar_valores_positivos(numeros)
            show(`${mostrar_valores(valores_positivos)} -> ${valores_positivos.length} positivos`)
        }else if (opcao === 9){
            const valores_negativos = verificar_valores_negativos(numeros)
            show(`${mostrar_valores(valores_negativos)} -> ${valores_negativos.length} negativos`)
        }else if (opcao === 10){
            let opcao_atualizar = atualizar()

            while (opcao_atualizar !== 0){
                if (opcao_atualizar === 1){
                    const numeros_multiplicados = multiplicar_por_valor(numeros)
                    numeros = numeros_multiplicados
                    show('Valores atualizados com sucesso!')
                }else if (opcao_atualizar === 2){
                    const numeros_elevados = elevar_a_valor(numeros)
                    numeros = numeros_elevados
                    show('Valores atualizados com sucesso!')
                }else if (opcao_atualizar === 3){
                    const numeros_fracionados = reduzir_a_fracao(numeros)
                    numeros = numeros_fracionados
                    show('Valores atualizados com sucesso!')
                }else if (opcao_atualizar === 4){
                    const numeros_sem_negativos = substituir_negativos(numeros)
                    numeros = numeros_sem_negativos
                    show('Valores atualizados com sucesso!')
                }else if (opcao_atualizar === 5){
                    let opcao_ordenar = ordenar()

                    while (opcao_ordenar !== 0){
                        if (opcao_ordenar === 1){
                            ordenar_crescente(numeros)
                            show('Valores atualizados com sucesso!')
                        }else if (opcao_ordenar === 2){
                            ordenar_decrescente(numeros)
                            show('Valores atualizados com sucesso!')
                        }else{
                            show('Opção inválida! Tente novamente!')
                        }

                        opcao_ordenar = ordenar()
                    }
                }else if (opcao_atualizar === 6){
                    embaralhar(numeros)
                    show('Valores atualizados com sucesso!')
                }else{
                    show('Opção inválida! Tente novamente!')
                }

                opcao_atualizar = atualizar()
            }
        }else if (opcao === 11){
            adicionar(numeros)
            show('Valor adicionado com sucesso!')
        }else if (opcao === 12){
            remover_por_valor(numeros)
            show('Valor removido com sucesso!')
        }else if (opcao === 13){
            remover_por_posicao(numeros)
            show('Valor removido com sucesso!')
        }else if (opcao === 14){
            editar_por_posicao(numeros)
            show('Valor editado com sucesso!')
        }else if (opcao === 15){
            salvar(numeros)
            show('Os valores foram salvos com sucesso!')
        }else{
            show('Opção inválida! Tente novamente')
        }

        opcao = menu()
    }

    salvar(numeros)
}

main()
