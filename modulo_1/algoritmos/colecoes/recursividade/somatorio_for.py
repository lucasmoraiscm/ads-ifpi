from random import randint

def main():
    a = int(input('Mínimo: '))
    b = int(input('Máximo: '))
    n = int(input('Quantidade de números: '))
    numeros = []

    for _ in range(n):
        numeros.append(randint(a, b))
    
    soma = somatorio(numeros)

    print(f'Somatório: {soma}')


def somatorio(lista):
    somat = 0

    for i in lista:
        somat += i

    return somat


main()