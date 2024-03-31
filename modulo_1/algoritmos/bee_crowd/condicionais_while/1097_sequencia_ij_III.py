def main():
    i = 1
    j = 7
    contador = 0

    while contador != 5:
        if contador == 0:
            if j != 5:
                print(f'I={i} J={j}')

                j -= 1
            else:
                print(f'I={i} J={j}')

                i += 2
                j = 9
                contador += 1
        elif contador == 1:
            if j != 7:
                print(f'I={i} J={j}')

                j -= 1
            else:
                print(f'I={i} J={j}')

                i += 2
                j = 11
                contador += 1
        elif contador == 2:
            if j != 9:
                print(f'I={i} J={j}')

                j -= 1
            else:
                print(f'I={i} J={j}')

                i += 2
                j = 13
                contador += 1      
        elif contador == 3:
            if j != 11:
                print(f'I={i} J={j}')

                j -= 1
            else:
                print(f'I={i} J={j}')

                i += 2
                j = 15
                contador += 1
        elif contador == 4:
            if j != 13:
                print(f'I={i} J={j}')

                j -= 1
            else:
                print(f'I={i} J={j}')
                
                contador += 1


main()