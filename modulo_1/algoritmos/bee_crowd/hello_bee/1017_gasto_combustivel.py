def main():
    tempo_viagem = int(input())
    velocidade_media = int(input())

    distancia_percorrida = calcular_distancia_percorrida(tempo_viagem, velocidade_media)
    quantidade_combustivel = calcular_quantidade_combustivel(distancia_percorrida)

    print(f'{quantidade_combustivel:.3f}')


def calcular_distancia_percorrida(tempo_viagem, velocidade_media):
    return tempo_viagem * velocidade_media


def calcular_quantidade_combustivel(distancia_percorrida):
    return distancia_percorrida / 12


main()