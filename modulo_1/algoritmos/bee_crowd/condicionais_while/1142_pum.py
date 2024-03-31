def main():
    n = int(input())

    resultado = ''
    
    atual = 1
    contador = 0
    
    while contador != n:
        sequencia = 1

        while sequencia != 4:
            resultado += f'{atual} '

            atual += 1
            sequencia += 1
        
        resultado += 'PUM'
        print(resultado)

        resultado = ''
        atual += 1
        contador += 1


main()