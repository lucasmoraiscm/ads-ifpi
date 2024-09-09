def main():
    c = int(input('Comprimento: '))
    sequencia = ''

    for i in range(1, c+1):
        sequencia += f'{fibonacci(i)} '

    print(sequencia)


def fibonacci(comp):
    if comp == 1:
        return 0
    elif comp == 2:
        return 1
    else:
        return fibonacci(comp - 1) + fibonacci(comp - 2)


main()