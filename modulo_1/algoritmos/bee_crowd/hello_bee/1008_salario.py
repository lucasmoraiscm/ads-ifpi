def main():
    numero_funcionario = int(input())
    horas_trabalhadas = int(input())
    valor_hora = round(float(input()), 2)

    salario = horas_trabalhadas * valor_hora

    print(f'NUMBER = {numero_funcionario}')
    print(f'SALARY = U$ {salario:.2f}')

main()