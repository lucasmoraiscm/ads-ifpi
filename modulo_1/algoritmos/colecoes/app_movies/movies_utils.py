import os


def get_number(mensagem):
   n = int(input(mensagem))
   return n

def get_positive_number(mensagem):
    n = int(input(mensagem))

    if n <= 0:
      get_positive_number(mensagem)

    return n


def get_number_in_range(mensagem, min, max):
    n = int(input(mensagem))

    if n < min and n > max:
        print('Valor inválido! Tente novamente')
        return get_number_in_range(mensagem, min, max)
    
    return n


def get_text(mesagem):
   text = input(mesagem)
   return text


def enter_to_continue():
  get_text('Enter to continue...')


def clear_screen():
  os.system('cls') or None
