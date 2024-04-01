def main():
    dividendo = int(input('Dividendo: '))
    divisor = int(input('Divisor: '))

    parcial = 0
    quociente = 0

    while parcial < dividendo:
        parcial += divisor
        if parcial <= dividendo:
            quociente += 1

    resto = dividendo - (divisor * quociente)

    print(f'''
Divisão: {dividendo} / {divisor}
Quociente: {quociente}
Resto: {resto}
''')


main()