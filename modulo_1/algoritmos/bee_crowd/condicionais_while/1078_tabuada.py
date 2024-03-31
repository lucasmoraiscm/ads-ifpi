def main():
    n = int(input())

    if n > 2 and n < 1000:
        contador = 0
        atual = 1

        while contador != 10:
            multiplicação = atual * n

            print(f'{atual} x {n} = {multiplicação}')
        
            atual += 1
            contador += 1


main()