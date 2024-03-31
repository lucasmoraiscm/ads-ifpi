def main():
    x = int(input())
    y = int(input())

    limite_inferior = calcular_menor(x, y)
    limite_superior = calcular_maior(x, y)

    atual = limite_inferior + 1

    while atual != limite_superior:
        if atual % 5 == 2 or atual % 5 == 3:
            print(atual)

        atual += 1


def calcular_menor(x, y):
    if x < y:
        return x
    else:
        return y


def calcular_maior(x, y):
    if x > y:
        return x
    else:
        return y


main()