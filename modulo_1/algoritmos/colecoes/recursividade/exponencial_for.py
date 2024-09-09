def main():
    n = int(input('Número: '))
    e = int(input('Expoente: '))

    potencia = exponencial(n, e)

    print(f'{n} elvado a {e} é: {potencia}')


def exponencial(num, exp):
    pont = 1

    for _ in range(exp):
        pont *= num

    return pont


main()