def main():
    otimo = 0
    bom = 0
    regular = 0
    pessimo = 0

    somatorio_idade_otimo = 0

    status = 1

    while status != 0:
        idade = int(input('Idade: '))
        opiniao = int(input('Opinião: '))

        if opiniao == 1:
            otimo += 1
            somatorio_idade_otimo += idade
        elif opiniao == 2:
            bom += 1
        elif opiniao == 3:
            regular += 1
        elif opiniao == 4:
            pessimo += 1
        elif opiniao == -1:
            status -= 1
    
    total_entrevistados = otimo + bom + regular + pessimo

    media_idade_otimo = somatorio_idade_otimo / otimo

    percentual_bom = calcular_percentual(bom, total_entrevistados)

    relatorio = f'''
Ótimo: {otimo} pessoas
Bom: {bom} pessoas
Regular: {regular} pessoas
Péssimo: {pessimo} pessoas
Total de entrevistados: {total_entrevistados} pessoas

Média de idade das pessoas que responderam ótimo: {media_idade_otimo:.1f} anos
Percentual de pessoas que responderam bom: {percentual_bom:.2f}%
'''
    print(relatorio)


def calcular_percentual(valor, total):
    percentual = (valor / total) * 100
    return percentual


main()