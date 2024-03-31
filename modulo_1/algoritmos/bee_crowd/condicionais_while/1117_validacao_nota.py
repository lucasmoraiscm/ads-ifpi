def main():
    nota = float(input())
    somatorio = 0
    qtd = 0

    if nota >= 0 and nota <= 10:
        somatorio += nota
        qtd += 1
    else:
        print('nota invalida')
    
    while qtd != 2:
        nota = float(input())

        if nota >= 0 and nota <= 10:
            somatorio += nota
            qtd += 1
        else:
            print('nota invalida')
    
    media = somatorio / 2
    print(f'media = {media:.2f}')


main()