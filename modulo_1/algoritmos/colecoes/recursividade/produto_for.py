def main():
    fator1 = int(input('Primeiro fator: '))
    fator2 = int(input('Segundo fator: '))

    produto = multiplicacao(fator1, fator2)

    print(f'Produto: {produto}')


def multiplicacao(f1, f2):
    prod = 0

    for _ in range(f2):
        prod += f1

    return prod


main()