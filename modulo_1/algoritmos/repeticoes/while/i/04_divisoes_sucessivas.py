def main():
    numero = get_number('Digite um número: ')

    resultado = calcular_divisao(numero)

    print(resultado)


def get_number(mensagem):
    n = int(input(mensagem))
    return n


def calcular_divisao(n):
    resultado = n

    while resultado >= 1:
        resultado /= 2
    
    return resultado


main()