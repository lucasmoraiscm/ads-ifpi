def main():
    status = 1

    while status != 0:
        nome = input('Nome: ')
        preco = int(input('Preço: '))
        qtd = int(input('Quantidade: '))

        valor_total_bruto = preco * qtd
        
        if nome != 'FIM':
            if qtd <= 10:
                descontos = 0 * valor_total_bruto
                valor_total_liquido = valor_total_bruto - descontos
            elif qtd <= 20:
                descontos = 0.1 * valor_total_bruto
                valor_total_liquido = valor_total_bruto - descontos
            elif qtd <= 50:
                descontos = 0.2 * valor_total_bruto
                valor_total_liquido = valor_total_bruto - descontos
            else:
                descontos = 0.25 * valor_total_bruto
                valor_total_liquido = valor_total_bruto - descontos
            
            relatorio = f'''
Nome do produto: {nome}
Quantidade do produto: {qtd}
Preço bruto: R$ {valor_total_bruto:.2f}
Descontos: - R$ {descontos:.2f}
Preço a pagar: R$ {valor_total_liquido:.2f}
'''
            print(relatorio)
        else:
            status -= 1


main()