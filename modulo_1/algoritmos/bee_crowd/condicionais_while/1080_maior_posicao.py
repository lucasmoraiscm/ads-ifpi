def main():
    maior = 0
    posicao_maior = 0
    i = 1
    contador = 1

    n = int(input())
    maior = n
    posicao_maior = i

    i += 1

    while contador != 100:
        n = int(input())

        if n > maior:
            maior = n
            posicao_maior = i

        i += 1
        contador += 1

    print(maior)
    print(posicao_maior)


main()