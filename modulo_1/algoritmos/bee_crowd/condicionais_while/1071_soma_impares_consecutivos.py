def main():
    x = int(input())
    y = int(input())

    limite_inferior = calcular_menor(x, y)
    limite_superior = calcular_maior(x, y)

    soma_impares = 0

    if limite_inferior != limite_superior:
        atual = limite_inferior + 1
        
        while atual != limite_superior:
            
            if atual % 2 == 1:
                soma_impares += atual
            
            atual += 1

    print(soma_impares)


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