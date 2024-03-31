def main():
    n = int(input())

    if n > 5 and n < 2000:
        contador = 2
        atual = 2
        limite = n + 1

        while contador != limite:
            if atual % 2 == 0:
                quadrado = atual**2

                print(f'{atual}^2 = {quadrado}')

            atual += 1
            contador += 1


main()