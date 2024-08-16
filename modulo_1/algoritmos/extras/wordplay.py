def main():
    opcao = menu()

    while opcao != 0:
        if opcao == 1:
            arquivo_palavras = ler_arquivo()
            total_palavras = len(arquivo_palavras)

        elif opcao == 2:
            qtd_20_mais_letras = (palavras_20_mais_letras())
            resultado = relatorio(qtd_20_mais_letras, total_palavras, 'com mais de 20 letras')
            print(resultado)
            
        elif opcao == 3:
            qtd_palavras_sem_e = 0

            for palavra in arquivo_palavras:
                if has_no_e(palavra):
                    print(palavra)
                    qtd_palavras_sem_e += 1
            
            resultado = relatorio(qtd_palavras_sem_e, total_palavras, 'sem a letra "e"')
            print(resultado)
            
        elif opcao == 4:
            letras_proibidas = input('Digite as letras proibidas: ')

            qtd_palavras_n_proibidas = 0

            for palavra in arquivo_palavras:
                if avoids(palavra, letras_proibidas):
                    qtd_palavras_n_proibidas += 1

            resultado = relatorio(qtd_palavras_n_proibidas, total_palavras, 'que não tem as letras proibidas')
            print(resultado)
            

        elif opcao == 5:
            letras_exclusivas = input('Digite as letras exclusivas: ')

            qtd_palavras_exclusivas = 0

            for palavra in arquivo_palavras:
                if uses_only(palavra, letras_exclusivas):
                    qtd_palavras_exclusivas += 1

            resultado = relatorio(qtd_palavras_exclusivas, total_palavras, 'formadas somente pelas letras exclusivas')
            print(resultado)
            

        elif opcao == 6:
            letras_obrigatorias = input('Digite as letras obrigatórias: ')

            qtd_palavras_obrigatorias = 0

            for palavra in arquivo_palavras:
                if uses_all(palavra, letras_obrigatorias):
                    qtd_palavras_obrigatorias += 1

            resultado = relatorio(qtd_palavras_obrigatorias, total_palavras, 'que contém as letras obrigatórias')
            print(resultado)

        elif opcao == 7:
            qtd_palavras_ordem_alfabetica = 0

            for palavra in arquivo_palavras:
                if is_abcedarian(palavra):
                    qtd_palavras_ordem_alfabetica += 1

            resultado = relatorio(qtd_palavras_ordem_alfabetica, total_palavras, ' em que as letras estão em ordem alfabética')
            print(resultado)

        else:
            print('Valor inválido! Tente novamente')

        opcao = menu()


def ler_arquivo():
    nome = 'words.txt'

    valores = []

    fin = open(nome)
    line = fin.readline()

    for line in fin:
        word = line.strip('\r\n')
        valores.append(word)

    return valores


def menu():
    resposta = int(input(f'''
### WORDPLAY ###
1 - Carregar arquivo
2 - Palavras com mais de 20 letras
3 - Palavras sem a letra "e"
4 - Letras proibidas
5 - Letras exclusivas
6 - Letras obrigatórias
7 - Palavras em ordem alfabética
0 - Sair
>>> '''))
    return resposta


def relatorio(qtd_palavras, total_palavras, texto):
    return f'''
Existem {qtd_palavras} palavras {texto} de {total_palavras} palavras
Percentual: {calcular_percentual(qtd_palavras, total_palavras):.2f}%
'''


def calcular_percentual(valor, total):
    return (valor / total) * 100


def palavras_20_mais_letras():
    palavras = ler_arquivo()

    qtd_palavras = 0

    for palavra in palavras:
        qtd_letras = 0

        for letra in palavra:
            qtd_letras += 1

        if qtd_letras > 20:
            print(palavra)
            qtd_palavras += 1

    return qtd_palavras


def has_no_e(palavra):
    for letra in palavra:
        if letra == 'e':
            return False
    return True


def avoids(palavra, letras_proibidas):
    for letra_proibida in letras_proibidas:
        for letra in palavra:
            if letra == letra_proibida:
                return False
    return True


def uses_only(palavra, letras_exclusivas):
    for letra_exclusiva in letras_exclusivas:
        if letra_exclusiva not in palavra:
                return False
    return True


def uses_all(palavra, letras_obrigatorias):
    for letra_obrigatoria in letras_obrigatorias:
        if letra_obrigatoria not in palavra:
            return False
    return True


def is_abcedarian(palavra):
    for i in range((len(palavra) - 2)):
        if palavra[i] > palavra[i+1]:
            return False
    return True


main()