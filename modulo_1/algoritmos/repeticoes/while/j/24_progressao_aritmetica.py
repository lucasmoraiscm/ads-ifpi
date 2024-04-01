def main():
    razao = int(input('Razão: '))
    termo = int(input('Primeiro termo: '))
    n = int(input('Quantidade de termos: '))

    posicao_termo = 1
    resultado = ''

    contador = 0

    while contador != n:
        pa = termo + (posicao_termo - 1) * razao

        resultado = resultado + str(pa) + ' '

        posicao_termo += 1
        contador += 1

    print(resultado)


main()