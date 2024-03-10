def main():
    km = int(input())

    minutos = calcular_minutos(km)

    print (f'{minutos} minutos')


def calcular_minutos(km):
    return km * 2

main()