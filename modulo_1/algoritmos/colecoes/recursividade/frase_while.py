def main():
    frase = input('Frase: ')

    qtd_vogais = contar_vogais(frase)
    qtd_consoantes = contar_consoantes(frase)

    print(f'A frase tem {qtd_vogais} vogais e {qtd_consoantes} consoantes')


def contar_vogais(frs):
    qtd_vog = 0
    cont = 0

    while cont < len(frs):
        if frs[cont] == 'A' or frs[cont] == 'a' or frs[cont] == 'E' or frs[cont] == 'e' or \
            frs[cont] == 'I' or frs[cont] == 'i' or frs[cont] == 'O' or frs[cont] == 'o' or \
                frs[cont] == 'U' or frs[cont] == 'u':
            qtd_vog += 1
        
        cont += 1

    return qtd_vog


def contar_consoantes(frs):
    qtd_con = 0
    cont = 0

    while cont < len(frs):
        if frs[cont] != 'A' and frs[cont] != 'a' and frs[cont] != 'E' and frs[cont] != 'e' and \
            frs[cont] != 'I' and frs[cont] != 'i' and frs[cont] != 'O' and frs[cont] != 'o' and \
                frs[cont] != 'U' and frs[cont] != 'u' and frs[cont] != ' ':
            qtd_con += 1
            
        cont += 1

    return qtd_con


main()