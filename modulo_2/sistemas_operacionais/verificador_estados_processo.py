import os

def main():
    nome_arquivo = input("Digite o nome do arquivo: ")

    terminal(f'py {nome_arquivo}')

def terminal(comando):
    os.system(f'{comando}')

main()