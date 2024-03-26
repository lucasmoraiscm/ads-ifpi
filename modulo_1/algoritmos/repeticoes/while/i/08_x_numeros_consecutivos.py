def main():
    x = get_number('Digite o valor de X: ')

    verificacao = verificar_soma(x)

    print(verificacao)


def get_number(mensagem):
    n = int(input(mensagem))
    return n


def verificar_soma(x):
    numero_anterior = 0
    numero_atual = get_number('Digite um número: ')
    soma = numero_anterior + numero_atual

    while soma != x:
        numero_anterior = numero_atual
        numero_atual = get_number('Digite outro número: ')
        soma = numero_anterior + numero_atual

    return f'{numero_anterior} + {numero_atual} = {x}'


main()