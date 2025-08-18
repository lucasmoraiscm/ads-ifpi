// Arquivo: fila.h
#ifndef FILA_H
#define FILA_H

#include "lista.h" // Dependência para a Fila de Listas

#define MAX_FILA 100 // Tamanho máximo da fila, como sugerido no documento [cite: 139]

//-----------------------------------------------------
// Fila de Listas (para busca em largura - bfs)
//-----------------------------------------------------
typedef struct {
    Lista itens[MAX_FILA];
    int inicio;
    int fim;
} FilaLista;

void inicializa_fila_lista(FilaLista *F) {
    F->inicio = 0;
    F->fim = 0;
}

int vaziaf_lista(FilaLista F) {
    return (F.inicio == F.fim);
}

void enfileira_lista(Lista item, FilaLista *F) {
    if (F->fim < MAX_FILA) {
        F->itens[F->fim++] = item;
    } else {
        printf("Erro: Fila de listas cheia!\n");
    }
}

Lista desenfileira_lista(FilaLista *F) {
    if (!vaziaf_lista(*F)) {
        return F->itens[F->inicio++];
    }
    return NULL;
}

//-----------------------------------------------------
// Fila de Inteiros (para ordenação topológica - ts)
//-----------------------------------------------------
typedef struct {
    int itens[MAX_FILA];
    int inicio;
    int fim;
    int tamanho; // Controle de tamanho para a versão paralela
} FilaInt;

void inicializa_fila_int(FilaInt *F) {
    F->inicio = 0;
    F->fim = 0;
    F->tamanho = 0;
}

int vaziaf_int(FilaInt F) {
    return (F.tamanho == 0);
}

void enfileira_int(int item, FilaInt *F) {
    if (F->tamanho < MAX_FILA) {
        F->itens[F->fim] = item;
        F->fim = (F->fim + 1) % MAX_FILA; // Fila circular
        F->tamanho++;
    } else {
        printf("Erro: Fila de inteiros cheia!\n");
    }
}

int desenfileira_int(FilaInt *F) {
    if (!vaziaf_int(*F)) {
        int item = F->itens[F->inicio];
        F->inicio = (F->inicio + 1) % MAX_FILA;
        F->tamanho--;
        return item;
    }
    return -1; // Retorna um valor inválido em caso de erro
}

#endif