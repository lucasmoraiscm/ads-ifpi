def main():
    a = round(float(input()), 1)
    b = round(float(input()), 1)

    peso_a = 3.5
    peso_b = 7.5

    media = (a * peso_a + b * peso_b) / (peso_a + peso_b)

    print(f'MEDIA = {media:.5f}')

main()