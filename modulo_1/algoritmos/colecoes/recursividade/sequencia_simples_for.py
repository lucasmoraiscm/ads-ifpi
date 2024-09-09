def main():
    a = int(input('A: '))
    b = int(input('B: '))

    sequencia = sequencia_simples(a, b)

    print(sequencia)


def sequencia_simples(first, last):
    seq = ''
    n = first

    for _ in range(first, last + 1):
        seq += f'{n} '
        n += 1
    
    return seq


main()