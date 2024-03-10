def main():
    nome = str(input())
    salario_fixo = round(float(input()), 2)
    montante_vendas = round(float(input()), 2)

    salario_comissao = salario_fixo + (montante_vendas * 0.15)

    print(f'TOTAL = R$ {salario_comissao:.2f}')

main()