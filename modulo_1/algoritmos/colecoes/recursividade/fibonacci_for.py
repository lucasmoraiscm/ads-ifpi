def main():
    c = int(input('Comprimento: '))

    sequencia = fibonacci(c)

    print(sequencia)


def fibonacci(comp):
    f1 = 0
    f2 = 1
    seq = ''

    for n in range(1, comp+1):
        if n == 1:
            seq += '0 '
        elif n == 2:
            seq += '1 '
        else:
            seq += f'{f1 + f2} '
            f1, f2 = f2, f1 + f2

    return seq


main()