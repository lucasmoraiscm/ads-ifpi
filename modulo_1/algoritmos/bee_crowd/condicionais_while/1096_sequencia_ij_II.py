def main():
    i = 1
    j = 7
    contador = 0

    print(f'I={i} J={j}')

    while contador != 5:
        if contador == 0:
            if j == 5:
                i += 2
                j = 7
                contador += 1
            else:
                j -= 1

                print(f'I={i} J={j}')
        else:
            if j == 5:
                print(f'I={i} J={j}')

                i += 2
                j = 7
                contador += 1
            else:
                print(f'I={i} J={j}')

                j -= 1


main()