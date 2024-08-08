def main():
   n = int(input())

   for i in range(n):
        texto = input()

        segundo_texto = primeira_passada(texto)

        terceiro_texto = segunda_passada(segundo_texto)

        quarto_texto = terceira_passada(terceiro_texto)

        print(quarto_texto)


def primeira_passada(texto):
    novo_texto = ''

    for c in texto:
        if eh_letra(c):
            codigo_caracter = ord(c) + 3
            novo_caracter = chr(codigo_caracter)
            novo_texto += novo_caracter
        else:
            novo_texto += c

    return novo_texto


def segunda_passada(texto):
    texto_invertido = inverter(texto)
    return texto_invertido


def terceira_passada(texto):
    metade_texto = calcular_metade(texto)

    texto_final = ''

    for c in range(len(texto)):
        if c >= metade_texto:
            codigo_caracter = ord(texto[c]) - 1
            novo_caracter = chr(codigo_caracter)
            texto_final += novo_caracter
        else:
            texto_final += texto[c]
    
    return texto_final


def eh_letra(caracter):
    numero_caracter = ord(caracter)

    if numero_caracter >= 65 and numero_caracter <= 90:
        return True
    elif numero_caracter >= 97 and numero_caracter <= 122:
        return True
    else:
        return False


def inverter(texto):
    invertido = ''

    for c in texto:
        invertido = c + invertido
    
    return invertido


def calcular_metade(texto):
    tamanho_texto = len(texto)
    metade = tamanho_texto // 2
    return metade


main()