def main():
    p1 = input()
    p2 = input()

    valores_p1 = p1.split(' ')
    valores_p2 = p2.split(' ')

    x1 = float(valores_p1[0])
    y1 = float(valores_p1[1])
    x2 = float(valores_p2[0])
    y2 = float(valores_p2[1])

    distancia = calcular_distancia(x1, y1, x2, y2)

    print(f'{distancia:.4f}')
    

def calcular_distancia(x1, y1, x2, y2):
    return ((x2-x1)**2 + (y2-y1)**2)**0.5


main()