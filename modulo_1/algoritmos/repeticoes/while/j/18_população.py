def main():
    populacao_cidade_a = 200000
    populacao_cidade_b = 800000

    taxa_cidade_a = 0.035
    taxa_cidade_b = 0.0135

    populacao_cidade_a = calcular_crescimento(populacao_cidade_a, taxa_cidade_a)
    populacao_cidade_b = calcular_crescimento(populacao_cidade_b, taxa_cidade_b)

    anos = 1

    while populacao_cidade_a < populacao_cidade_b:
        populacao_cidade_a = calcular_crescimento(populacao_cidade_a, taxa_cidade_a)
        populacao_cidade_b = calcular_crescimento(populacao_cidade_b, taxa_cidade_b)

        anos += 1
    
    print(anos)


def calcular_crescimento(pop, taxa):
    nova_pop = pop + (pop * taxa)
    return nova_pop


main()