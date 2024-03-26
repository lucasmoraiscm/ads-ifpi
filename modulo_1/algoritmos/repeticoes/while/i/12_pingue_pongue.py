def main():
    pts_jogador1 = 0
    pts_jogador2 = 0

    while pts_jogador1 < 21 and pts_jogador2 < 21:
        ponto = get_number('Jogador que pontuou: ')
        if ponto == 1:
            pts_jogador1 += 1
        else:
            pts_jogador2 += 1
        resultado = f'''
Pontuações
Jogador 1: {pts_jogador1}
Jogador 2: {pts_jogador2}
'''
        print(resultado)

    dif_jogador1 = pts_jogador1 - pts_jogador2
    dif_jogador2 = pts_jogador2 - pts_jogador1
    
    while dif_jogador1 < 2 and dif_jogador2 < 2:
        ponto = get_number('Jogador que pontuou: ')
        if ponto == 1:
            pts_jogador1 += 1
        else:
            pts_jogador2 += 1
        resultado = f'''
Pontuações
Jogador 1: {pts_jogador1}
Jogador 2: {pts_jogador2}
'''
        print(resultado)

        dif_jogador1 = pts_jogador1 - pts_jogador2
        dif_jogador2 = pts_jogador2 - pts_jogador1
        
    if dif_jogador1 >= 2:
        print('O jogador 1 venceu!')
    elif dif_jogador2 >= 2:
        print('O jogador 2 venceu!')


def get_number(mensagem):
    n = int(input(mensagem))
    return n


main()