import random
import datetime
import time


def main():
    arquivo_nomes_alunos = 'alunos-algoritmos-20241.csv'
    alunos = ler_arquivo(arquivo_nomes_alunos)
    sorteados = []
    status = 1

    while status != 0:
        print(f'''
MENU INICIAL
----------------------------------------
Total de alunos: {len(alunos)} alunos
----------------------------------------
1 - Exibir alunos
2 - Excluir alunos
3 - Sortear grupos
4 - Exibir grupos sorteados
5 - Salvar sorteio
0 - Sair
----------------------------------------''')
        
        opcao = get_natural_number('Digite a opção desejada: ')
        
        if opcao == 1:
            print('''
----------------------------------------
ALUNOS
----------------------------------------''')
            
            exibir_alunos_enumerados = enumerar_lista(alunos, len(alunos))

            for aluno in exibir_alunos_enumerados:
                print(aluno)
            
            print('----------------------------------------')

        elif opcao == 2:
            status_excluir = 1

            while status_excluir != 0:
                print('''
----------------------------------------
EXCLUIR ALUNOS
----------------------------------------''')
                alunos_enumerados = enumerar_lista(alunos, len(alunos))

                for i in alunos_enumerados:
                    print(i)
                
                print('----------------------------------------')

                aluno_excluido = get_positive_number('Digite o número do aluno que deseja excluir: ')

                index_excluido = aluno_excluido - 1

                nome_excluido = alunos[index_excluido]

                alunos.remove(alunos[index_excluido])

                print(f'{nome_excluido} foi excluído com sucesso!')

                print('''
----------------------------------------
1 - SIM
2 - NÃO''')
                
                opcao_excluir = get_positive_number('''Deseja excluir mais algum aluno?: ''')

                if opcao_excluir == 2:
                    status_excluir -= 1

                print('----------------------------------------')
        
        elif opcao == 3:
            print('''
----------------------------------------
SORTEAR GRUPOS
----------------------------------------''')
            sorteados = []
            grupos = get_positive_number('Digite a quantidade de grupos desejados: ')
            qtd_alunos = len(alunos)
            qtd_alunos_por_grupo = qtd_alunos // grupos
            index = 0
            limite_index = qtd_alunos_por_grupo
            contador = 0

            embaralhar_nomes(alunos)

            while contador != grupos:
                n_grupo = contador + 1
                sorteados.append(f'Grupo {n_grupo}:')
                sorteados_parcial = []
                sorteados_parcial_sorted = []
                sorteados_parcial_enumerados = []

                while index != limite_index:
                    sorteados_parcial.append(alunos[index])
                    sorteados_parcial_sorted = sorted(sorteados_parcial)
                    sorteados_parcial_enumerados = enumerar_lista(sorteados_parcial_sorted, len(sorteados_parcial_sorted))

                    index += 1

                for s in sorteados_parcial_enumerados:
                    sorteados.append(s)
                
                sorteados.append(' ')

                contador += 1

                index = limite_index
                limite_index = (contador + 1) * qtd_alunos_por_grupo

                if contador == (grupos - 1):
                    limite_index = qtd_alunos

            print('----------------------------------------')

            for l in sorteados:
                print(l)
                time.sleep(2)

            sortear_alunos_sorted = sorted(alunos)
            alunos = []
            
            for i in sortear_alunos_sorted:
                alunos.append(i)

            print('----------------------------------------')

        elif opcao == 4:
            print('''
----------------------------------------
EXIBIR GRUPOS SORTEADOS
----------------------------------------''')
            
            for i in sorteados:
                print(i)

            print('----------------------------------------')

        elif opcao == 5:
            print('''
----------------------------------------
SALVAR SORTEIO
----------------------------------------''')
            
            hora_atual = datetime.datetime.now()
            hora_atual_em_texto = hora_atual.strftime('%H_%M_%S')

            nome_arquivo = f'sorteio_{hora_atual_em_texto}.txt'

            arquivo = open(nome_arquivo, 'w')

            for i in sorteados:
                arquivo.write(f'{i}\n')

            arquivo.close()

            print('''O sorteio foi salvo com sucesso!
----------------------------------------''')

        elif opcao == 0:
            status -= 1


def ler_arquivo(nome):
    valores = []

    arquivo = open(nome, 'r')

    linhas = arquivo.readlines()

    linhas = map(str.strip, linhas)

    for linha in linhas:
        valores.append(linha)

    arquivo.close()

    return valores


def sortear_nome(lista):
    nome_sorteado = random.choice(lista)
    return nome_sorteado


def get_natural_number(mensagem):
    n = int(input(mensagem))

    if n >= 0:
        return n
    else:
        while n < 0:
            n = int(input(mensagem))
        return n


def get_positive_number(mensagem):
    n = int(input(mensagem))

    if n > 0:
        return n
    else:
        while n <= 0:
            n = int(input(mensagem))
        return n


def embaralhar_nomes(lista):
    random.shuffle(lista)


def enumerar_lista(lista, n_max):
    lista_enumerada = []
    contador = 0
    index = 0

    while contador != n_max:
        contador += 1
        item_enumerado = str(contador) + ' - ' + lista[index]
        lista_enumerada.append(item_enumerado)

        index += 1
    
    return lista_enumerada


main()