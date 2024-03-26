def main():
    numero = get_number('Digite um número: ')

    digitos = calcular_digitos(numero)

    print(f'O número {numero} têm {digitos} digitos')


def get_number(mensagem):
    n = int(input(mensagem))
    return n


def calcular_digitos(n):
    divisor = 10
    resultado = n
    qtd_digitos = 1

    while resultado >= 10:
        resultado = n / divisor
        divisor *= 10
        qtd_digitos += 1
        
    return qtd_digitos


main()