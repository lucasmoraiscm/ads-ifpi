def main():
    a = int(input('A: '))
    b = int(input('B: '))

    sequencia = sequencia_simples(a, b)

    print(sequencia)


def sequencia_simples(first, last):
    seq = ''
    cont = 0
    n = first

    while cont <= (last - first):
        seq += f'{n} '
        n += 1
        cont += 1
    
    return seq


main()