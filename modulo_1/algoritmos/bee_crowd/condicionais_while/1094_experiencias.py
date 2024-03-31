def main():
    n = int(input())
    casos = 0
    ratos = 0
    sapos = 0
    coelhos = 0
    total_cobaias = 0

    while casos != n:
        cobaias = input()
        cobaias_separas = cobaias.split(' ')
        qtd_cobaia = int(cobaias_separas[0])
        
        if qtd_cobaia >= 1 and qtd_cobaia <= 15:
            if cobaias_separas[1] == 'R':
                ratos += qtd_cobaia
                total_cobaias += qtd_cobaia
            elif cobaias_separas[1] == 'S':
                sapos += qtd_cobaia
                total_cobaias += qtd_cobaia
            elif cobaias_separas[1] == 'C':
                coelhos += qtd_cobaia
                total_cobaias += qtd_cobaia
            
            casos += 1
    
    porcentagem_coelhos = (coelhos / total_cobaias) * 100
    porcentagem_ratos = (ratos / total_cobaias) * 100
    porcentagem_sapos = (sapos / total_cobaias) * 100

    print(f'Total: {total_cobaias} cobaias')
    print(f'Total de coelhos: {coelhos}')
    print(f'Total de ratos: {ratos}')
    print(f'Total de sapos: {sapos}')
    print(f'Percentual de coelhos: {porcentagem_coelhos:.2f} %')
    print(f'Percentual de ratos: {porcentagem_ratos:.2f} %')
    print(f'Percentual de sapos: {porcentagem_sapos:.2f} %')


main()