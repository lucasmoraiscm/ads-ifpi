from movies_funcionalidades import *
from movies_utils import *


def main():
    clear_screen()
    nome = 'movies.txt'
    movies = ler_arquivo(nome)
    escolha = 1

    while escolha != 0:
        menu()
        escolha = get_number_in_range('Escolha: ', 0, 3)
        clear_screen()
        movies = executar(escolha, movies)

        
    
    gravar_arquivo(nome, movies)


main()