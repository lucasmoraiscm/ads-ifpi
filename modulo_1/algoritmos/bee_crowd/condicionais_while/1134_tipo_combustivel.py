def main():
    alcool = 0
    gasolina = 0
    diesel = 0
    status = 1

    while status != 0:
        combustivel = int(input())

        if combustivel == 1:
            alcool += 1
        elif combustivel == 2:
            gasolina += 1
        elif combustivel == 3:
            diesel += 1
        elif combustivel == 4:
            status -= 1
    
    print('MUITO OBRIGADO')
    print(f'Alcool: {alcool}')
    print(f'Gasolina: {gasolina}')
    print(f'Diesel: {diesel}')


main()