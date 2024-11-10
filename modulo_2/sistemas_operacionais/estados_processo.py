import time

def main():
    print("Executando\n")

    for i in range(1, 6):
        print(i)

    print("\nParado")

    time.sleep(10)

    print("\nExecutando\n")

    for j in range(6, 11):
        print(j)
    
    print("\nConcluído")

main()