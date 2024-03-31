def main():
    n = int(input())
    casos = 0
    resultado = []

    while casos != n:
        xy = input()
        xy_separados = xy.split(' ')
        x = int(xy_separados[0])
        y = int(xy_separados[1])

        soma = 0

        limite_inferior = calcular_menor(x, y)
        limite_superior = calcular_maior(x, y)

        atual = limite_inferior + 1

        while atual != limite_superior and atual < limite_superior:
            if atual % 2 == 1:
                soma += atual
            
            atual += 1
        
        resultado.append(soma)
        casos += 1
    
    contador = len(resultado)
    i = 0

    while contador != 0:
        print(resultado[i])

        i += 1
        contador -= 1


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