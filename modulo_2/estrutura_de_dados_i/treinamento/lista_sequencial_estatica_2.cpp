#include <stdio.h>
#include <iostream>
using namespace std;

typedef struct lista {
    int dados[10];
    int qtd = 0;
} Lista;

Lista* criar_lista() {
    Lista *li;
    li = (Lista*) malloc(sizeof(struct lista));

    if (li != NULL) {
        li->qtd = 0;
    }
    return li;
}

void liberar_lista(Lista* li) {
    free(li);
}

void inserir(Lista* li, int numero) {
    if (li->qtd < 10) {
        li->dados[li->qtd] = numero;
        printf("O número %d foi adicionado\n", numero);
        li->qtd++;
    }
    else {
        cout << "A lista está cheia!" << endl;
    }
    
}

void remover(Lista* li, int numero) {
    for (int i = 0; i < li->qtd; i++) {
        if (li->dados[i] == numero) {
            for (int x = i; x < li->qtd; x++) {
                li->dados[x] = li->dados[x + 1];
                li->qtd--;
            }
            printf("O número %d foi removido\n", numero);
        }
    }
}

void mostrar(Lista* li) {
    for (int i = 0; i < li->qtd; i++) {
        cout << li->dados[i] << endl;
    }
}

int main(){
    Lista *li = criar_lista();

    inserir(li, 1);
    mostrar(li);
    inserir(li, 2);
    mostrar(li);
    remover(li, 1);
    mostrar(li);

    return 0;
}
