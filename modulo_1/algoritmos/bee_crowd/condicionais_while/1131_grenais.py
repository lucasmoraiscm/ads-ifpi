def main():
    total = 0
    inter = 0
    gremio = 0
    empates = 0
    maior = ''
    status = 1

    while status != 0:
        placar = input()
        placar_separado = placar.split(' ')
        i = int(placar_separado[0])
        g = int(placar_separado[1])

        if i > g:
            inter += 1
            total += 1
        elif i < g:
            gremio += 1
            total += 1
        else:
            empates += 1
            total += 1

        print('Novo grenal (1-sim 2-nao)')
        pergunta = int(input())

        if pergunta == 2:
            status -= 1
    
    if inter > gremio:
        maior = 'Inter venceu mais'
    elif inter < gremio:
        maior = 'Gremio venceu mais'
    else:
        maior = 'Nao houve vencedor'
    
    print(f'{total} grenais')
    print(f'Inter:{inter}')
    print(f'Gremio:{gremio}')
    print(f'Empates:{empates}')
    print(f'{maior}')


main()