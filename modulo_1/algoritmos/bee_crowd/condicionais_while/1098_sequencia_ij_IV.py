def main():
    i = 0
    j = 1
    contador = 0
    add = 0

    while contador != 11:
        contador_while = 0
        
        while contador_while != 3:
            i = round(i, 1)
            j = round(j, 1)
            
            if i == 1 or i == 2:
                if i == 1:
                    if j == 2 or j == 3 or j == 4 or j == 5:
                        if j == 2:
                            print(f'I=1 J=2')
                        elif j == 3:
                            print(f'I=1 J=3')
                        elif j == 4:
                            print(f'I=1 J=4')
                        else:
                            print(f'I=1 J=5')
                    else:
                        print(f'I=1 J={j}')
                else:
                    if j == 2 or j == 3 or j == 4 or j == 5:
                        if j == 2:
                            print(f'I=2 J=2')
                        elif j == 3:
                            print(f'I=2 J=3')
                        elif j == 4:
                            print(f'I=2 J=4')
                        else:
                            print(f'I=2 J=5')
                    else:
                        print(f'I=2 J={j}')
            else:
                print(f'I={i} J={j}')

            j += 1
            contador_while += 1
        
        add += 0.2
        i = 0 + add
        j = 1 + add
        contador += 1


main()