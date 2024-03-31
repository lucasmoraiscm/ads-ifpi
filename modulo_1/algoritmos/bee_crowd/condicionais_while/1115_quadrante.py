def main():
    xy = input()
    xy_separados = xy.split(' ')
    x = int(xy_separados[0])
    y = int(xy_separados[1])

    while x != 0 and y != 0:
        if x > 0 and y > 0:
            print('primeiro')
        elif x > 0 and y < 0:
            print('quarto')
        elif x < 0 and y > 0:
            print('segundo')
        elif x < 0 and y < 0:
            print('terceiro')
        
        xy = input()
        xy_separados = xy.split(' ')
        x = int(xy_separados[0])
        y = int(xy_separados[1])


main()