def main():
    mn = input()
    mn_separados = mn.split(' ')
    m = int(mn_separados[0])
    n = int(mn_separados[1])
    resultado = ''
    soma = 0

    while m > 0 and n > 0:
        limite_inferior = calcular_menor(m, n)
        limite_superior = calcular_maior(m, n)

        atual = limite_inferior
        limite = limite_superior + 1

        while atual != limite:
            resultado += f'{atual} '
            soma += atual

            atual += 1

        resultado += f'Sum={soma}'
        print(resultado)

        mn = input()
        mn_separados = mn.split(' ')
        m = int(mn_separados[0])
        n = int(mn_separados[1])

        resultado = ''
        soma = 0


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