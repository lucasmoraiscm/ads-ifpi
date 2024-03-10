def main():
    a = round(float(input()), 1)
    b = round(float(input()), 1)
    c = round(float(input()), 1)

    peso_a = 2
    peso_b = 3
    peso_c = 5

    media = (a * peso_a + b * peso_b + c * peso_c) / (peso_a + peso_b + peso_c)

    print(f'MEDIA = {media:.1f}')

main()