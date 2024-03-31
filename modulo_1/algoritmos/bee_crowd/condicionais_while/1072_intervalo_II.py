def main():
    n = int(input())

    contador = n
    in_intervalo = 0
    out_intervalo = 0

    while contador != 0:
        x = int(input())

        if x > -10**7 and x < 10**7:
            if x >= 10 and x <= 20:
                in_intervalo += 1
            else:
                out_intervalo += 1

            contador -= 1

    print(f'{in_intervalo} in')
    print(f'{out_intervalo} out')


main()