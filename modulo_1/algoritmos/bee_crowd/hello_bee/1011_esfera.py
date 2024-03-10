def main():
    raio = float(input())

    volume = calcular_volume(raio)

    print(f'VOLUME = {volume:.3f}')


def calcular_volume(r):
    pi = 3.14159
    return (4/3) * pi * r**3


main()