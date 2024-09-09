def main():
    frase = input('Frase: ')

    qtd_vogais = contar_vogais(frase)
    qtd_consoantes = contar_consoantes(frase)

    print(f'A frase tem {qtd_vogais} vogais e {qtd_consoantes} consoantes')


def contar_vogais(frs):
    vogais = 'AaEeIiOoUu'
    qtd_vog = 0
    cont = 0

    while cont < len(frs):
        if frs[cont] in vogais:
            qtd_vog += 1
        
        cont += 1

    return qtd_vog


def contar_consoantes(frs):
    vogais_espaço = 'AaEeIiOoUu '
    qtd_con = 0
    cont = 0

    while cont < len(frs):
        if frs[cont] not in vogais_espaço:
            qtd_con += 1
            
        cont += 1

    return qtd_con


main()
