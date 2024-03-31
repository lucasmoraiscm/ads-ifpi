def main():
    xy = input()
    xy_separados = xy.split(' ')
    x = int(xy_separados[0])
    y = int(xy_separados[1])

    while x != y:
        if x > y:
            print('Decrescente')
        else:
            print('Crescente')

        xy = input()
        xy_separados = xy.split(' ')
        x = int(xy_separados[0])
        y = int(xy_separados[1])


main()