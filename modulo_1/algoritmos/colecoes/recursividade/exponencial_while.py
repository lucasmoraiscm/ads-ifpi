def main():
    n = int(input('Número: '))
    e = int(input('Expoente: '))

    potencia = exponencial(n, e)

    print(f'{n} elvado a {e} é: {potencia}')


def exponencial(num, exp):
    pont = 1
    cont = 0

    while cont < exp:
        pont *= num
        cont += 1

    return pont


main()