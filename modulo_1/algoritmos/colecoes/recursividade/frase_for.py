def main():
    frase = input('Frase: ')

    qtd_vogais = contar_vogais(frase)
    qtd_consoantes = contar_consoantes(frase)

    print(f'A frase tem {qtd_vogais} vogais e {qtd_consoantes} consoantes')


def contar_vogais(frs):
    qtd_vog = 0

    for i in range(len(frs)):
        if frs[i] == 'A' or frs[i] == 'a' or frs[i] == 'E' or frs[i] == 'e' or \
            frs[i] == 'I' or frs[i] == 'i' or frs[i] == 'O' or frs[i] == 'o' or \
                frs[i] == 'U' or frs[i] == 'u':
            qtd_vog += 1

    return qtd_vog


def contar_consoantes(frs):
    qtd_con = 0

    for i in range(len(frs)):
        if frs[i] != 'A' and frs[i] != 'a' and frs[i] != 'E' and frs[i] != 'e' and \
            frs[i] != 'I' and frs[i] != 'i' and frs[i] != 'O' and frs[i] != 'o' and \
                frs[i] != 'U' and frs[i] != 'u' and frs[i] != ' ':
            qtd_con += 1

    return qtd_con


main()