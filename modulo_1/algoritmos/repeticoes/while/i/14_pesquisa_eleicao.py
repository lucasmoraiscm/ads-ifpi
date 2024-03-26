def main():
    opiniao = get_number('Você pretende votar em qual candidato?: ')
    total_entrevistados = 0
    serra = 0
    dilma = 0
    ciro_gomes = 0
    outros = 0
    indecisos = 0
    nulos_brancos = 0

    while opiniao != -1:
        total_entrevistados += 1

        if opiniao == 45:
            serra += 1
        elif opiniao == 13:
            dilma += 1
        elif opiniao == 23:
            ciro_gomes += 1
        elif opiniao == 99:
            indecisos += 1
        elif opiniao == 98:
            outros += 1
        elif opiniao == 0:
            nulos_brancos += 1
        
        opiniao = get_number('Você pretende votar em qual candidato?: ')

    porcentagem_serra = calcular_porcentagem(serra, total_entrevistados)
    porcentagem_dilma = calcular_porcentagem(dilma, total_entrevistados)
    porcentagem_ciro_gomes = calcular_porcentagem(ciro_gomes, total_entrevistados)
    porcentagem_indecisos = calcular_porcentagem(indecisos, total_entrevistados)
    porcentagem_outros = calcular_porcentagem(outros, total_entrevistados)
    porcentagem_nulos_branco = calcular_porcentagem(nulos_brancos, total_entrevistados)
    
    relatorio = f'''
>>> Intenção de voto dos entrevistados <<<
Serra: {porcentagem_serra:.1f} %
Dilma: {porcentagem_dilma:.1f} %
Ciro Gomes: {porcentagem_ciro_gomes:.1f} %
Outros: {porcentagem_outros:.1f} %
Indecisos: {porcentagem_indecisos:.1f} %
Nulos/brancos: {porcentagem_nulos_branco:.1f} %
------------------------------------------
Total de entrevistados: {total_entrevistados} pessoas
------------------------------------------
Possibilidade de 2º turno: {segundo_turno(porcentagem_serra, porcentagem_dilma, porcentagem_ciro_gomes)}
'''
    print(relatorio)


def get_number(mensagem):
    n = int(input(mensagem))
    return n


def calcular_porcentagem(parte, todo):
    return (parte / todo) * 100


def segundo_turno(c1, c2, c3):
    if c1 <= 50 and c2 <= 50 and c3 <= 50:
        return 'Sim'
    else:
        return 'Não'


main()