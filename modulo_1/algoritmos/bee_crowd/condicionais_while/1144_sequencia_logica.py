def main():
    n = int(input())

    atual = 1
    limite = n * 2
    contador = 0

    while contador != limite:
        print(atual, atual**2, atual**3)
        print(atual, atual**2+1, atual**3+1)

        atual += 1
        contador += 2


main()