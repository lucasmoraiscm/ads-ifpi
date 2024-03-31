def main():
    n = int(input())
    pares = 0

    while pares != n:
        xy = input()
        xy_separados = xy.split(' ')
        x = int(xy_separados[0])
        y = int(xy_separados[1])

        if y != 0:
            divisao = x / y

            print(f'{divisao:.1f}')
        else:
            print('divisao impossivel')

        pares += 1


main()