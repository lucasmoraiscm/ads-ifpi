def main():
    frase = input('Frase: ')

    qtd_vogais = contar_vogais(frase)
    qtd_consoantes = contar_consoantes(frase)

    print(f'A frase tem {qtd_vogais} vogais e {qtd_consoantes} consoantes')


def contar_vogais(frs):
    vogais = 'AaEeIiOoUu'

    if not frs:  # Caso base: se a string estiver vazia
        return 0
    else:
        eh_vogal = 0

        if frs[0] in vogais:
            eh_vogal = 1
        return eh_vogal + contar_vogais(frs[1:])



def contar_consoantes(frs):
    vogais_espaço = 'AaEeIiOoUu '

    if not frs:  # Caso base: se a string estiver vazia
        return 0
    else:
        eh_consoante = 0

        if frs[0] not in vogais_espaço:
            eh_consoante = 1
        return eh_consoante + contar_consoantes(frs[1:])


main()