def get_number(mensagem):
    return int(input(mensagem))


def get_positive_number(mensagem):
    n = int(input(mensagem))

    if n <= 0:
        print('Valor inválido! Tente novamente!')
        return get_positive_number(mensagem)
    
    return n

def get_text(mensagem):
    return input(mensagem)