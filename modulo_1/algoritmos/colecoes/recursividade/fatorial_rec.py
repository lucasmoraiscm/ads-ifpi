def main():
    numero = int(input('Número: '))

    numero_fatorial = fatorial(numero)

    print(f'{numero}! é igual a {numero_fatorial}')


def fatorial(n):
    if n <= 1:
        return 1
    else:
        return n * fatorial(n - 1)


main()