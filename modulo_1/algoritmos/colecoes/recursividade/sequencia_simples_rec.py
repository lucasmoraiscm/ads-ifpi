def main():
    a = int(input('A: '))
    b = int(input('B: '))

    sequencia_simples(a, b)


def sequencia_simples(first, last):
    if first == last:
        print(first)
    elif first < last:
        print(first)
        return sequencia_simples(first + 1, last)


main()