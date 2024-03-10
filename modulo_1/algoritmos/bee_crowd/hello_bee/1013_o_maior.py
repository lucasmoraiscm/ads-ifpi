def main():
    valores = input()

    dados_valores = valores.split(' ')

    a = int(dados_valores[0])
    b = int(dados_valores[1])
    c = int(dados_valores[2])

    ab_maior = verificar_maior(a, b)
    ac_maior = verificar_maior(a, c)
    bc_maior = verificar_maior(b, c)

    maior = verificar_maior_definitivo(ab_maior, ac_maior, bc_maior)

    print(f'{maior} eh o maior')


def verificar_maior(x, y):
    return int((x+y + abs(x-y)) / 2)


def verificar_maior_definitivo(x, y, z):
    if x > y and x > z:
        return x
    elif y > z:
        return y
    else:
        return z


main()