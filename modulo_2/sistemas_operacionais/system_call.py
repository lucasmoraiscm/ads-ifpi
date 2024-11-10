import os

try:
    arquivo_nome = "arquivo.txt"
    texto = "Só alegria hahaha"

    flags = os.O_WRONLY | os.O_CREAT | os.O_TRUNC

    arquivo = os.open(arquivo_nome, flags)
    os.write(arquivo, texto.encode())
    os.close(arquivo)
    
    print("Arquivo criado com sucesso!")

except OSError:
    print("Erro ao criar o arquivo.")