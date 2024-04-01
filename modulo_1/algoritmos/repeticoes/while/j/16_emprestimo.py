def main():
    emprestimo = 3000
    taxa = 0.0085
    pagamento = 200
    dia = 0

    emprestimo += (emprestimo * taxa)
    print(emprestimo)
    emprestimo -= pagamento
    print(emprestimo)
    print(' ')

    dia += 1

    while emprestimo > 0:
        emprestimo += (emprestimo * taxa)
        print(emprestimo)
        emprestimo -= pagamento
        print(emprestimo)
        print(' ')

        dia += 1
    
    print(dia)


main()