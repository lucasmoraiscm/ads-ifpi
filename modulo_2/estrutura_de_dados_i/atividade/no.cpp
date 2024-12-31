#include <stdio.h>
#include <iostream>
using namespace std;

typedef struct no {
    int item;
    no *prox;
} No;

typedef struct lista {
    int dados;
    struct no *inicio;
    struct no *fim;
} Lista;

int inserir(no novo) {
    /*if (lista == NULL) {
        //lista lst = (*lista) malloc(sizeof(*lista));
        //lst->inicio = NULL;
    }

    return 1;*/
}

int main() {
    No no1;
    No no2;
    No no3;

    no1.item = 1;
    no2.item = 2;
    no2.item = 3;

    return 0;
}