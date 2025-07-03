#include <stdio.h>
#include <stdlib.h>

#define TAM_MAX 10
#define no_pai(indice) (indice - 1) / 2
#define no_esquerda(indice) (indice * 2) + 1
#define no_direita(indice) (indice * 2) + 2

typedef struct {
    int dado[TAM_MAX];
    int tamanho;
} heap_t;

void ins_max(heap_t *heap, int valor)
{
    if (heap->tamanho >= TAM_MAX)
    {
        printf("Heap Cheio...\n");
        return;
    }

    int ind_valor = heap->tamanho;
    heap->dado[ind_valor] = valor;
    heap->tamanho++;

    while (ind_valor > 0 && heap->dado[ind_valor] > heap->dado[no_pai(ind_valor)])
    {
        int valor_temp = heap->dado[ind_valor];
        heap->dado[ind_valor] = heap->dado[no_pai(ind_valor)];
        heap->dado[no_pai(ind_valor)] = valor_temp;
        ind_valor = no_pai(ind_valor);
    }
}

void ins_min(heap_t *heap, int valor)
{
    if (heap->tamanho >= TAM_MAX)
    {
        printf("Heap Cheio...");
        return;
    }

    int ind_valor = heap->tamanho;
    heap->dado[ind_valor] = valor;
    heap->tamanho++;

    while (ind_valor > 0 && heap->dado[ind_valor] < heap->dado[no_pai(ind_valor)])
    {
        int valor_temp = heap->dado[ind_valor];
        heap->dado[ind_valor] = heap->dado[no_pai(ind_valor)];
        heap->dado[no_pai(ind_valor)] = valor_temp;
        ind_valor = no_pai(ind_valor); 
    }
}

int rem_max(heap_t *heap)
{
    if (heap->tamanho == 0)
    {
        printf("Heap Vazio...");
        return -1;
    }

    int raiz = heap->dado[0];
    heap->tamanho--;
    heap->dado[0] = heap->dado[heap->tamanho];

    int ind_atual = 0;

    while (1)
    {
        int ind_maior_valor = ind_atual;

        if (no_esquerda(ind_atual) < heap->tamanho && heap->dado[no_esquerda(ind_atual)] > heap->dado[ind_maior_valor])
        {
            ind_maior_valor = no_esquerda(ind_atual);
        }

        if (no_direita(ind_atual) < heap->tamanho && heap->dado[no_direita(ind_atual)] > heap->dado[ind_maior_valor])
        {
            ind_maior_valor = no_direita(ind_atual);
        }

        if (ind_maior_valor == ind_atual)
        {
            break;
        }

        int valor_temp = heap->dado[ind_atual];
        heap->dado[ind_atual] = heap->dado[ind_maior_valor];
        heap->dado[ind_maior_valor] = valor_temp;

        ind_atual = ind_maior_valor;
    }

    return raiz;
}

int rem_min(heap_t *heap)
{
    if (heap->tamanho == 0)
    {
        printf("Heap Vazio...");
        return -1;
    }

    int raiz = heap->dado[0];
    heap->tamanho--;
    heap->dado[0] = heap->dado[heap->tamanho];

    int ind_atual = 0;

    while (1)
    {   
        int ind_menor_valor = ind_atual;

        if (no_esquerda(ind_atual) < heap->tamanho && heap->dado[no_esquerda(ind_atual)] < heap->dado[ind_menor_valor])
        {
            ind_menor_valor = no_esquerda(ind_atual);
        }

        if (no_direita(ind_atual) < heap->tamanho && heap->dado[no_direita(ind_atual)] < heap->dado[ind_menor_valor])
        {
            ind_menor_valor = no_direita(ind_atual);
        }

        if (ind_menor_valor == ind_atual)
        {
            break;
        }

        int valor_temp = heap->dado[ind_atual];
        heap->dado[ind_atual] = heap->dado[ind_menor_valor];
        heap->dado[ind_menor_valor] = valor_temp;

        ind_atual = ind_menor_valor;
    }

    return raiz;
}

void imprimir(heap_t heap)
{
    for (int i = 0; i < heap.tamanho; i++)
    {
        printf("%d ", heap.dado[i]);
    }
    printf("\n");

}

int main()
{   
    heap_t heap_max, heap_min;

    heap_max.tamanho = 0;
    heap_min.tamanho = 0;

    int sequencia_A[] = {10, 50, 20, 5, 80, 15};
    for (int i = 0; i < 6; i++)
    {
        ins_max(&heap_max, sequencia_A[i]);
    }

    int sequencia_B[] = {45, 30, 60, 12, 25, 70};
    for (int j = 0; j < 6; j++)
    {
        ins_min(&heap_min, sequencia_B[j]);
    }

    printf("Heap Max: ");
    imprimir(heap_max);

    printf("Heap Min: ");
    imprimir(heap_min);

    printf("Removendo do Heap Max: ");
    rem_max(&heap_max);
    imprimir(heap_max);

    printf("Removendo do Heap Min: ");
    rem_min(&heap_min);
    imprimir(heap_min);
}   