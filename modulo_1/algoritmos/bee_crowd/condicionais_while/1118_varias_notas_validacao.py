def main():
    status = 1

    while status != 0:
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

        print('novo calculo (1-sim 2-nao)')
        pergunta = int(input())

        if pergunta == 2:
            status -= 1
        elif pergunta < 1 or pergunta > 2:
            while pergunta != 1 and pergunta != 2:
                print('novo calculo (1-sim 2-nao)')
                pergunta = int(input())

                if pergunta == 2:
                    status -= 1


main()