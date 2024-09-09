def main():
    fator1 = int(input('Primeiro fator: '))
    fator2 = int(input('Segundo fator: '))

    produto = multiplicacao(fator1, fator2)

    print(f'Produto: {produto}')


def multiplicacao(f1, f2):
    prod = 0
    cont = 0

    while cont < f2:
        prod += f1
        cont += 1

    return prod


main()