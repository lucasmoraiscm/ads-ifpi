def main():
    n = int(input())

    if n < 10000:
        contador = 0
        resultado = []

        while contador != n:
            x = int(input())

            if x > -10**7 and x < 10**7:
                if x > 0:
                    if x % 2 == 0:
                        resultado.append('EVEN POSITIVE')
                    else:
                        resultado.append('ODD POSITIVE')
                elif x < 0:
                    if x % 2 == 0:
                        resultado.append('EVEN NEGATIVE')
                    else:
                        resultado.append('ODD NEGATIVE')
                else:
                    resultado.append('NULL')

            contador += 1

        contador_resultado = len(resultado)
        i = 0

        while contador_resultado != 0:
            print(resultado[i])

            i += 1
            contador_resultado -= 1


main()