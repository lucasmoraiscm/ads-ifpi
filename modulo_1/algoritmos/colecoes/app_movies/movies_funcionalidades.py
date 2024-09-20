from movies_utils import *


def ler_arquivo(nome):
    lista_chaves = ['nome', 'ano', 'imdb', 'bilheteria']
    lista_movies = []

    arquivo = open(nome, 'r')

    linhas = arquivo.readlines()

    linhas = mapear(linhas, lambda x: x.strip())

    for linha in linhas:
        dicionario = {}
        cont = 0
        dados = linha.split('~')
        dados.pop()

        for dado in dados:
            dicionario[lista_chaves[cont]] = dado
            cont += 1

        lista_movies.append(dicionario)

    arquivo.close()

    return lista_movies


def gravar_arquivo(nome, lista):
    arquivo = open(nome, 'w')

    for movie in lista:
        for chave in movie:
            arquivo.write(f'{movie[chave]}~')
        
        arquivo.write('\n')

    arquivo.close()


def menu():
    print('''
##### RGB MOVIES ######
1 - Cadastrar
2 - Listar
3 - Remover
4 - Atualizar
5 - Relatórios
0 - Sair
>>> ''')
    

def menu_atualizar():
    opcao = get_number('''
### Atualizar ###
1 - Nome
2 - Ano
3 - Nota do IMDB
4 - Arrecadação
0 - Voltar
>>> ''')
    
    return opcao


def menu_relatorios():
    opcao = get_number('''
### Relatórios ###
1 - Média das notas
2 - Média das bilheterias
0 - Voltar
>>> ''')

    return opcao


def executar(escolha, lista):
    if escolha == 1:
        print('### Cadastrar ###')
        new_movie = create_movie()
        lista.append(new_movie)
        print('Filme cadastrado com sucesso!')
    elif escolha == 2:
        print('### Listar ###')
        listar_movies(lista)
    elif escolha == 3:
        print('### Remover ###')
        lista = remover_movies(lista)
        print('Filme removido com sucesso!')
    elif escolha == 4:
        atualizar_movies(lista)
    elif escolha == 5:
        relatorios_movies(lista)

    enter_to_continue()
    clear_screen()

    return lista


def create_movie():
    novo_dicionario = {}

    novo_dicionario['nome'] = get_text('Nome: ')
    novo_dicionario['ano'] = get_number('Ano: ')
    novo_dicionario['imdb'] = get_number('Nota na IMDB: ')
    novo_dicionario['bilheteria'] = get_number('Arrecadação: ')

    return novo_dicionario


def listar_movies(movies):
    for i in range(len(movies)):
        movie = movies[i]
        print(f'{i+1} - Nome: {movie['nome']} | Ano: {movie['ano']} | Nota da IMDB: {movie['imdb']} | Arrecadação: R$ {movie['bilheteria']}')


def remover_movies(movies):
    listar_movies(movies)
    aux_movies = []
    escolha_remover = get_number_in_range('Número do filme que deseja remover: ', 1, len(movies))

    for i in range(len(movies)):
        if i+1 == escolha_remover:
            continue
        aux_movies.append(movies[i])

    return aux_movies


def atualizar_movies(movies):
    listar_movies(movies)
    escolha_atualizar = get_number_in_range('Número do filme que deseja atualizar: ', 1, len(movies))
    
    atributo_atualizar = menu_atualizar()

    while atributo_atualizar != 0:
        if atributo_atualizar == 1:
            novo_nome = get_text('Novo nome: ')
            movie = movies[escolha_atualizar-1]
            movie['nome'] = novo_nome
            print('Filme atualizado com sucesso!')
        elif atributo_atualizar == 2:
            novo_ano = get_positive_number('Novo ano: ')
            movie = movies[escolha_atualizar-1]
            movie['ano'] = novo_ano
            print('Filme atualizado com sucesso!')
        elif atributo_atualizar == 3:
            nova_nota = get_text('Nova nota: ')
            movie = movies[escolha_atualizar-1]
            movie['imdb'] = nova_nota
            print('Filme atualizado com sucesso!')
        elif atributo_atualizar == 4:
            nova_bilheteria = get_text('Nova bilheteria: ')
            movie = movies[escolha_atualizar-1]
            movie['bilheteria'] = nova_bilheteria
        else:
            print('Escolha inválida! Tente novamente')

        enter_to_continue()
        clear_screen()

        atributo_atualizar = menu_atualizar()


def relatorios_movies(movies):
    opcao_relatorio = menu_relatorios()

    while opcao_relatorio != 0:
        if opcao_relatorio == 1:
            notas = []

            for movie in movies:
                notas.append(int(movie['imdb']))

            somatorio_notas = reduzir(notas, lambda acumulado, x: acumulado + x , 0)

            print(f'A média das notas é: {somatorio_notas/len(notas):.1f}')
        elif opcao_relatorio == 2:
            bilheteria = []

            for movie in movies:
                bilheteria.append(int(movie['bilheteria']))

            somatorio_bilheteria = reduzir(bilheteria, lambda acumulado, x: acumulado + x , 0)

            print(f'A média das bilheterias é: R$ {somatorio_bilheteria/len(bilheteria):.2f}')
        else:
            print('Escolha inválida! Tente novamente')

        enter_to_continue()
        clear_screen()

        opcao_relatorio = menu_relatorios()


def mapear(colecao, tranformadora):
    nova_lista = []

    for i in colecao:
        nova_lista.append(tranformadora(i))

    return nova_lista


def reduzir(colecao, funcao, valor_inicial):
    acumulado = valor_inicial

    for i in range(len(colecao)):
        acumulado = funcao(acumulado, colecao[i])

    return acumulado
