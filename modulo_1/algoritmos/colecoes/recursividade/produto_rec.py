def main():
    fator1 = int(input('Primeiro fator: '))
    fator2 = int(input('Segundo fator: '))

    produto = multiplicacao(fator1, fator2)

    print(f'Produto: {produto}')


def multiplicacao(f1, f2):
    if f2 == 0:
        return 0
    elif f2 > 0:
        return f1 + multiplicacao(f1, f2 - 1)
    else:
        return -multiplicacao(f1, -f2)


main()