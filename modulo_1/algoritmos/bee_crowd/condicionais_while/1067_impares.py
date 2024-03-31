def main():
    x = int(input())

    if x >= 1 and x <= 1000:
        numero = 0

        while numero != x:
            numero += 1

            if numero % 2 == 1:
                print(numero)


main()