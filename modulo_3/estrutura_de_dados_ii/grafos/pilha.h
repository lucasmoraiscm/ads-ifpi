// Arquivo: pilha.h
#ifndef PILHA_H
#define PILHA_H

#include "lista.h" // A pilha armazena itens do tipo Lista

#define MAX_PILHA 100 // Tamanho máximo da pilha

// Estrutura da Pilha de Listas
typedef struct {
    Lista itens[MAX_PILHA];
    int topo;
} PilhaLista;

// Função para inicializar uma pilha vazia
void inicializa_pilha_lista(PilhaLista *P) {
    P->topo = -1; // Topo -1 indica que a pilha está vazia
}

// Função para verificar se a pilha está vazia
int vaziap_lista(PilhaLista P) {
    return (P.topo == -1);
}

// Função para empilhar um item (push)
void empilha_lista(Lista item, PilhaLista *P) {
    if (P->topo < MAX_PILHA - 1) {
        P->topo++;
        P->itens[P->topo] = item;
    } else {
        printf("Erro: Pilha cheia!\n");
    }
}

// Função para desempilhar um item (pop)
Lista desempilha_lista(PilhaLista *P) {
    if (!vaziap_lista(*P)) {
        Lista item = P->itens[P->topo];
        P->topo--;
        return item;
    }
    return NULL;
}

#endif