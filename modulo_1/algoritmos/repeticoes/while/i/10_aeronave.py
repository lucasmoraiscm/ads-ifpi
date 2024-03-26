def main():
    # Containers
    qtd_containers = get_number('Quantidade de containers: ')
    total_peso_containers = 0

    while qtd_containers != 0:
        peso_container = get_number('Peso do container: ')
        total_peso_containers += peso_container
        qtd_containers -= 1

    # Passageiros e bagagens
    qtd_passageiros = 0
    qtd_bagagens = 0
    total_peso_passageiros = 0
    numero_bilhete = get_number('Número do bilhete: ')

    while numero_bilhete != 0:
        bagagens = get_number('Quantidade de bagagens: ')
        qtd_bagagens += bagagens
        qtd_passageiros += 1
        numero_bilhete = get_number('Número do bilhete: ')
    
    total_peso_passageiros += qtd_passageiros * 70
    total_peso_passageiros += qtd_bagagens * 10

    # Combustível
    qtd_combustivel = calcular_qtd_combustivel(total_peso_containers, total_peso_passageiros)

    # Autorização para decolagem
    autorizacao = verificar_autorizacao(qtd_combustivel)

    relatorio = f'''
Quantidade de passageiros         : {qtd_passageiros}
Quantidade de volumes de bagagens : {qtd_bagagens}
Peso total dos passageiros        : {total_peso_passageiros:.1f} kg
Peso total da carga               : {total_peso_containers:.1f} kg
Quantidade possível de combustível: {qtd_combustivel:.1f} l
Autorização para decolagem        : {autorizacao}
'''
    print(relatorio)


def get_number(mensagem):
    n = int(input(mensagem))
    return n


def calcular_qtd_combustivel(containers, passageiros):
    peso_parcial = containers + passageiros
    peso_combustivel = 500000 - peso_parcial
    litros_combustivel = peso_combustivel / 1.5
    return litros_combustivel


def verificar_autorizacao(combustivel):
    if combustivel < 10000:
        return 'Decolagem não autorizada'
    else:
        return 'Decolagem autorizada'


main()