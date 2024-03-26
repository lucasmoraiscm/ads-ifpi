def main():
    numero1 = get_number('Primeiro número: ')
    numero2 = get_number('Segundo número: ')

    mmc = calcular_mmc(numero1, numero2)

    resultado = f'''
O MMC de {numero1} e {numero2} é {mmc}
'''
    print(resultado)

def get_number(mensagem):
    n = int(input(mensagem))
    return n


def calcular_mmc(n1, n2):
    mmc = 1
    dividendo1 = n1
    dividendo2 = n2
    divisor = 2

    while dividendo1 != 1 or dividendo2 != 1:
        if dividendo1 == 1:
            if dividendo2 % divisor == 0:
                mmc *= divisor
                dividendo2 /= divisor
                divisor = 2
            else:
                divisor += 1
        elif dividendo2 == 1:
            if dividendo1 % divisor == 0:
                mmc *= divisor
                dividendo1 /= divisor
                divisor = 2
            else:
                divisor += 1
        else:
            if dividendo1 % divisor == 0:
                if dividendo2 % divisor == 0:
                    mmc *= divisor
                    dividendo1 /= divisor
                    dividendo2 /= divisor
                    divisor = 2
                else:
                    dividendo1 /= divisor
                    mmc *= divisor
                    divisor = 2
            else:
                divisor += 1
    return mmc


main()