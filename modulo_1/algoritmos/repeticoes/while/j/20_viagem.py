def main():
    distancia = get_positive_number('Distância percorrida desde a última parada: ')
    qtd_combustivel = get_positive_number('Quantidade de combustível para percorrer essa distância: ')

    consumo_medio = distancia / qtd_combustivel
    paradas = 0
    consumo = 50
    status_viagem = ''
    status_paradas = ''

    while consumo < qtd_combustivel:
        qtd_combustivel -= consumo

        paradas += 1
    
    if distancia >= 600:
        status_viagem = 'O carro chegou ao destino'
    else:
        status_viagem = 'O carro não chegou ao destino'

    if paradas > 0:
        status_paradas = f'O carro parou {paradas} vezes por falta de combustível'
    else:
        status_paradas = 'O carro não parou por falta de combustível'

    relatorio = f'''
{status_viagem}
{status_paradas}
Consumo do carro: {consumo_medio:.1f} km/l
'''
    print(relatorio)


def get_positive_number(mensagem):
    n = int(input(mensagem))

    if n > 0:
        return n
    else:
        while n <= 0:
            n = int(input(mensagem))
        return n


main()