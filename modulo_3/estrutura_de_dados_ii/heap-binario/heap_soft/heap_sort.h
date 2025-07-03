#include <stdio.h>
#include <stdlib.h>

#define TAM_MAX_VETOR 10

typedef struct max_heap {
    int dados[TAM_MAX_VETOR];
    int tamanho;
} heap_t;

void trocar(int *a, int *b);
void descer(heap_t *heap, int inicio, int fim);
void construir_heap(heap_t *heap);
void heap_soft(heap_t *heap);
void imprimir(heap_t *heap);