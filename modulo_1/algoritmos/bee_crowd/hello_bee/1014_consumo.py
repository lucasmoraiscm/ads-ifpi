def main():
    x = int(input())
    y = round(float(input()), 1)

    consumo_medio = calcular_consumo_medio(x, y)

    print(f'{consumo_medio:.3f} km/l')


def calcular_consumo_medio(x, y):
    return x / y


main()