def main():
    n = int(input('Número: '))
    e = int(input('Expoente: '))

    potencia = exponencial(n, e)

    print(f'{n} elvado a {e} é: {potencia}')


def exponencial(num, exp):
    if exp == 0:
        return 1
    elif exp > 0:
        return num * exponencial(num, exp - 1)
    else:
        return 1 / exponencial(num, -exp)


main()