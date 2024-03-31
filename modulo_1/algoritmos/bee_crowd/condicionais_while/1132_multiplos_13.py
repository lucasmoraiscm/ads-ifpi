def main():
    x = int(input())
    y = int(input())

    limite_inferior = calcular_menor(x, y)
    limite_superior = calcular_maior(x, y)

    soma = 0
    atual = limite_inferior
    limite = limite_superior + 1

    while atual != limite:
        if atual % 13 != 0:
            soma += atual
        
        atual += 1

    print(soma)


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