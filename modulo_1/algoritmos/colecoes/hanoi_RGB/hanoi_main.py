from hanoi_utils import get_number, get_positive_number, get_text
from random import choice

def main():
    torre_r = []
    torre_g = []
    torre_b = []
    torre_inicial = []
    jogador_1 = ''
    jogador_2 = ''
    qtd_jogadas_jogador_1 = 0
    qtd_jogadas_jogador_2 = 0

    opc_menu = menu()

    while opc_menu != 0:
        if opc_menu == 1:
            inicializar_torre(torre_r)
            torre_inicial = torre_r.copy()

            jogador_1 = get_text('Nome do jogador 1: ')
            qtd_jogadas_jogador_1 = qtd_jogadas(torre_r, torre_g, torre_b, torre_inicial)

            jogador_2 = get_text('Nome do jogador 2: ')
            qtd_jogadas_jogador_2 = qtd_jogadas(torre_r, torre_g, torre_b, torre_inicial)

            ganhador = verificar_ganhador(jogador_1, jogador_2, qtd_jogadas_jogador_1, qtd_jogadas_jogador_2)
            print(ganhador)

            qtd_jogadas_jogador_1 = 0
            qtd_jogadas_jogador_2 = 0
            torre_r.clear()
        else:
            print('Opcão inválida! Tente novamente!')
        
        opc_menu = menu()


def menu():
    opc = get_number('''
### HANÓI RGB ###
1 - Iniciar novo jogo
0 - Sair
>>> ''')
    
    return opc

def menu_operacoes():
    opc = get_positive_number('''
### OPERAÇÕES DE MUDANÇA ###
1 - Da torre R para a G
2 - Da torre R para a B
3 - Da torre G para a R
4 - Da torre G para a B
5 - Da torre B para a R
6 - Da torre B para a G
>>> ''')
    
    return opc


def status_torres(torre1, torre2, torre3):
    print(f'''
Torre R: {visualizar_torre(torre1)}
Torre G: {visualizar_torre(torre2)}
Torre B: {visualizar_torre(torre3)}
''')


def inicializar_torre(torre):
    itens = ['R', 'G', 'B']
    item_sorteado = 0

    for _ in range(9):
        item_sorteado = choice(itens)
        torre.append(item_sorteado)


def mover_item(torre_out, torre_in):
    item = remover_item(torre_out)
    adicionar_item(torre_in, item)


def adicionar_item(torre, item):
    torre.append(item)


def remover_item(torre):
    return torre.pop()


def qtd_jogadas(torre1, torre2, torre3, torre_inicial):
    jogadas = 0
    torre1 = torre_inicial.copy()
    status_torres(torre1, torre2, torre3)
    verificacao = verificar_torres(torre1, torre2, torre3)
    operacao = menu_operacoes()

    while not verificacao:
        if operacao == 1:
            mover_item(torre1, torre2)
            jogadas += 1
        elif operacao == 2:
            mover_item(torre1, torre3)
            jogadas += 1
        elif operacao == 3:
            mover_item(torre2, torre1)
            jogadas += 1
        elif operacao == 4:
            mover_item(torre2, torre3)
            jogadas += 1
        elif operacao == 5:
            mover_item(torre3, torre1)
            jogadas += 1
        elif operacao == 6:
            mover_item(torre3, torre2)
            jogadas += 1
        else:
            print('Operação inválida! Tente novamente!')

        status_torres(torre1, torre2, torre3)
        print(f'Jogadas: {jogadas}')

        verificacao = verificar_torres(torre1, torre2, torre3)

        if verificacao == True:
            print(f'\nParabéns! Você completou o jogo\n')
            torre1.clear()
            torre2.clear()
            torre3.clear()
            return jogadas
        else:
            operacao = menu_operacoes()


def verificar_torres(torre1, torre2, torre3):
    torre_r_completa = False
    torre_g_completa = False
    torre_b_completa = False

    for r in torre1:
        if r == 'G' or r == 'B':
            torre_r_completa = False
            break
        else:
            torre_r_completa = True

    for g in torre2:
        if g == 'R' or g == 'B':
            torre_g_completa = False
            break
        else:
            torre_g_completa = True

    for b in torre3:
        if b == 'R' or b == 'G':
            torre_b_completa = False
            break
        else:
            torre_b_completa = True

    if len(torre1) == 0:
        torre_r_completa = True
    
    if len(torre2) == 0:
        torre_g_completa = True

    if  len(torre3) == 0:
        torre_b_completa = True
    
    if torre_r_completa == True and torre_g_completa == True and torre_b_completa == True:
        return True
    else:
        return False


def verificar_ganhador(jogador1, jogador2, qtd_jogador1, qtd_jogador2):
    print(f'{jogador1}: {qtd_jogador1} jogadas')
    print(f'{jogador2}: {qtd_jogador2} jogadas\n')

    if qtd_jogador1 > qtd_jogador2:
        return f'{jogador2} ganhou com {qtd_jogador2} jogadas! '
    elif qtd_jogador1 < qtd_jogador2:
        return f'{jogador1} ganhou com {qtd_jogador1} jogadas! '
    else:
        return f'{jogador1} e {jogador2} empataram com {qtd_jogador2} jogadas! '


def visualizar_torre(torre):
    visualização = ''

    for i in range(len(torre)):
        if i != (len(torre) - 1):
            visualização += f'{torre[i]}, '
        else:
            visualização += f'{torre[i]}'

    return visualização


main()