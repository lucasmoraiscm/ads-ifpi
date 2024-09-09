def main():
    numero = int(input('Número: '))

    numero_fatorial = fatorial(numero)

    print(f'{numero}! é igual a {numero_fatorial}')


def fatorial(n):
    resultado = 1

    for i in range(n + 1):
        if i > 0:
            resultado *= i

    return resultado


main()