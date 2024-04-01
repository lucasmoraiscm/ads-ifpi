from random import randint

def main():
    numero_aleatorio = randint(1, 10)
    tentativas = 0

    status = 1

    while status != 0:
        numero_tentativa = int(input('Digite um número: '))

        if numero_tentativa == numero_aleatorio:
            print('Parabéns! Você acertou o número')

            tentativas += 1
            status -= 1
        elif numero_tentativa > numero_aleatorio:
            print('O número é menor')

            tentativas += 1
        else:
            print('O número é maior')

            tentativas += 1
    
    print(f'Você acertou com {tentativas} tentativas')


main()