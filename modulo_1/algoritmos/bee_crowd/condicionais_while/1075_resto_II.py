def main():
    n = int(input())
    
    if n < 10000:
       contador = 0
       atual = 1

    while contador != 10000:
        if atual % n == 2:
           print(atual)

        atual += 1
        contador += 1


main()