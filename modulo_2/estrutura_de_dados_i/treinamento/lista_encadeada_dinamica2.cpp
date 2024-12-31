#include <stdio.h>
#include <string.h>
#include <iostream>
using namespace std;

struct aluno {
    char nome[30];
    int matricula;
};

struct no {
    struct aluno dados;
    struct no *prox;
};

typedef struct no No;
typedef struct no* Lista;

Lista* criar_lista() {
    Lista* li = (Lista*) malloc(sizeof(Lista));

    if (li != NULL) {
        *li = NULL;
    }

    return li;
}

int main() {
    Lista *lst = criar_lista();

    struct aluno al1;
    strcpy(al1.nome, "Lucas");
    al1.matricula = 123;

    struct aluno al2;
    strcpy(al2.nome, "Ruan");
    al1.matricula = 321;

    No *no1;
    no1->dados = al1;
    no1->prox = NULL;
    *lst = no1;

    No *no2;
    no2->dados = al2;
    no2->prox = NULL;
    no1->prox = no2;

    puts("Chegou"); //nao chegou até aqui

    /*No *aux = *lst;

    while (aux->prox != NULL) {
        printf("Matricula: %d", aux->dados.matricula);
        aux = aux->prox;
    }*/

    return 0;
}
