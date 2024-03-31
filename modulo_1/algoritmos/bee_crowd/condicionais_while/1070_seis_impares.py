def main():
    x = int(input())

    numero = x
    qtd_impar = 0

    while qtd_impar != 6:
        if numero % 2 == 1:
            print(numero)

            
            qtd_impar += 1
        
        numero += 1

main()