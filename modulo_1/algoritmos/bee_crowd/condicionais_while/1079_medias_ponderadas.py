def main():
    n = int(input())
    casos = 0
    resultado = []

    while casos != n:
        notas = input()
        notas_separas = notas.split(' ')
        
        nota1 = round(float(notas_separas[0]), 1)
        nota2 = round(float(notas_separas[1]), 1)
        nota3 = round(float(notas_separas[2]), 1)
    
        media = round((nota1*2 + nota2*3 + nota3*5) / (2+3+5), 1)

        resultado.append(media)

        casos += 1
    
    contador = n
    i = 0

    while contador != 0:
        print(resultado[i])

        i += 1
        contador -= 1


main()