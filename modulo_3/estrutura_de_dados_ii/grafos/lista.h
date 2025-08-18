// Arquivo: lista.h
#ifndef LISTA_H
#define LISTA_H

#include <stdio.h>
#include <stdlib.h>

// Estrutura do nó da lista
typedef struct no {
    int item;
    struct no *prox;
} *Lista;

// Função para criar um novo nó
Lista no(int item, Lista prox) {
    Lista novo = (Lista)malloc(sizeof(struct no));
    if (novo == NULL) {
        printf("Erro: Falha na alocacao de memoria.\n");
        exit(1);
    }
    novo->item = item;
    novo->prox = prox;
    return novo;
}

// Função para verificar se um item pertence a uma lista
// Usada para evitar ciclos na busca de caminhos.
int pert(int item, Lista L) {
    while (L != NULL) {
        if (L->item == item) return 1;
        L = L->prox;
    }
    return 0;
}

// Função para exibir uma lista de trás para frente (recursivamente) 
// Usada para mostrar o caminho na ordem correta (origem -> destino).
void exibe_inv(Lista L) {
    if (L == NULL) return;
    exibe_inv(L->prox);
    printf("%d ", L->item);
}

// Função para criar uma cópia (clone) de uma lista
Lista clone(Lista L) {
    if (L == NULL) return NULL;
    // Cria uma cópia do nó atual e chama recursivamente para o resto da lista
    return no(L->item, clone(L->prox));
}

// Função para destruir uma lista e liberar a memória
void destroi(Lista *L) {
    if (*L == NULL) return;
    destroi(&(*L)->prox); // Destrói o resto da lista primeiro
    free(*L);
    *L = NULL; // Evita ponteiros dangling
}

#endif