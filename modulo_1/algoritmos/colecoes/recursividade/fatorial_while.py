def main():
    numero = int(input('Número: '))

    numero_fatorial = fatorial(numero)

    print(f'{numero}! é igual a {numero_fatorial}')


def fatorial(n):
    resultado = 1
    cont = n

    while cont != 0:
        resultado *= cont
        cont -= 1

    return resultado


main()