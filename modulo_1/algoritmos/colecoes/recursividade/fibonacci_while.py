def main():
    c = int(input('Comprimento: '))

    sequencia = fibonacci(c)

    print(sequencia)


def fibonacci(comp):
    f1 = 0
    f2 = 1
    cont = 1
    seq = ''

    while cont <= comp:
        if cont == 1:
            seq += '0 '
        elif cont == 2:
            seq += '1 '
        else:
            seq += f'{f1 + f2} '
            f1, f2 = f2, f1 + f2

        cont += 1

    return seq


main()