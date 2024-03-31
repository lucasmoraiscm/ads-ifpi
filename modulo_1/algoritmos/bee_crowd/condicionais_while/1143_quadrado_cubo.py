def main():
    n = int(input()) 

    if n > 1 and n < 1000:
        base = 1
        expoente = 1
        resultado = []

        contador = 0

        while contador != n:

            while expoente != 4:
                valor = base ** expoente
                resultado.append(valor)

                expoente += 1

            print(f'{resultado[0]} {resultado[1]} {resultado[2]}')

            resultado = []
            base += 1
            expoente = 1
            contador += 1


main()