#include <stdio.h>
#include <stdlib.h>

#define TAM_MAX_VETOR 10 // Definindo o tamanho máximo do vetor

typedef struct max_heap  // Definindo a estrutura da heap
{
    int dados[TAM_MAX_VETOR];  // Array para armazenar os dados da heap
    int tamanho;               // Tamanho atual da heap
} heap_t;

void inserir_min(heap_t *heap, int valor);
int remover_min(heap_t *heap);
void imprimir_heap(heap_t *heap);

