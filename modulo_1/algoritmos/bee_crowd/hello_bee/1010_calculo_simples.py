def main():
    peca_1 = input()
    peca_2 = input()

    dados_peca_1 = peca_1.split(' ')
    dados_peca_2 = peca_2.split(' ')

    total_peca_1 = int(dados_peca_1[1]) * float(dados_peca_1[2])
    total_peca_2 = int(dados_peca_2[1]) * float(dados_peca_2[2])

    total_pecas = total_peca_1 + total_peca_2

    print(f'VALOR A PAGAR: R$ {total_pecas:.2f}')

main()