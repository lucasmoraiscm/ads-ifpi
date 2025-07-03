// Desenvolvido por Thalisson Moura

#include <stdio.h>
#include <stdlib.h>
#include "min_heap.h" // Inclusão do cabeçalho da heap (caso tenha funções ou constantes definidas externamente)

/**
 * @brief Insere um valor na min-heap.
 * @param heap Ponteiro para a heap.
 * @param valor Valor a ser inserido.
 * @note Garante que o menor valor fique na raiz (índice 0).
 */
void inserir_min(heap_t *heap, int valor) {
    // Verifica se a heap já está cheia
    if (heap->tamanho >= TAM_MAX_VETOR) {
        printf("Heap cheio!\n");
        abort(); // Encerra o programa em caso de estouro
    }

    int i = heap->tamanho;       // 'i' recebe o índice da próxima posição disponível no vetor
    heap->dados[i] = valor;      // Insere o valor na última posição da heap (temporariamente)
    heap->tamanho++;             // Incrementa o tamanho da heap

    // "Sobe" o valor enquanto ele for menor que seu pai para manter a propriedade da min-heap
    while (i > 0 && heap->dados[(i - 1) / 2] > heap->dados[i]) {
        // Troca o valor com seu pai
        int tmp = heap->dados[i];
        heap->dados[i] = heap->dados[(i - 1) / 2];
        heap->dados[(i - 1) / 2] = tmp;

        i = (i - 1) / 2; // Atualiza o índice para o do pai
    }
}

/**
 * @brief Remove e retorna o menor valor (raiz) da min-heap.
 * @param heap Ponteiro para a heap.
 * @return Valor removido.
 * @note Reorganiza a heap após remover a raiz para manter a propriedade da min-heap.
 */
int remover_min(heap_t *heap) {
    if (heap->tamanho == 0) {
        printf("Heap vazio!\n");
        return -1; // Retorna -1 se a heap estiver vazia
    }

    int raiz = heap->dados[0]; // Salva o menor valor (raiz)
    heap->tamanho--; // Reduz o tamanho da heap
    heap->dados[0] = heap->dados[heap->tamanho]; // Move o último valor para a raiz

    int i = 0;
    // "Desce" o valor até que a propriedade da min-heap seja mantida
    while (1) {
        int menor = i;
        int esq = 2 * i + 1; // Índice do filho esquerdo
        int dir = 2 * i + 2; // Índice do filho direito

        // Verifica se o filho esquerdo é menor que o atual
        if (esq < heap->tamanho && heap->dados[esq] < heap->dados[menor])
            menor = esq;

        // Verifica se o filho direito é menor que o menor atual
        if (dir < heap->tamanho && heap->dados[dir] < heap->dados[menor])
            menor = dir;

        // Se o menor já está na posição correta, sai do laço
        if (menor == i)
            break;

        // Troca o valor com o menor filho
        int tmp = heap->dados[i];
        heap->dados[i] = heap->dados[menor];
        heap->dados[menor] = tmp;

        i = menor; // Continua a verificação a partir da nova posição
    }

    return raiz; // Retorna o menor valor removido
}

/**
 * @brief Imprime os elementos da heap.
 * @param heap Ponteiro para a heap.
 */
void imprimir_heap(heap_t *heap) {
    printf("Heap (min): ");
    for (int i = 0; i < heap->tamanho; i++) {
        printf("%d ", heap->dados[i]); // Imprime cada elemento da heap
    }
    printf("\n");
}

/**
 * @brief Função principal para testar a funcionalidade da min-heap.
 */
int main() {
    heap_t heap;         // Declara uma heap
    heap.tamanho = 0;    // Inicializa o tamanho como zero

    // Inserindo valores na min-heap
    inserir_min(&heap, 30);
    inserir_min(&heap, 20);
    inserir_min(&heap, 50);
    inserir_min(&heap, 10);
    inserir_min(&heap, 40);

    imprimir_heap(&heap); // Imprime a heap após inserções

    // Removendo o menor valor (raiz)
    printf("Menor valor removido: %d\n", remover_min(&heap));

    imprimir_heap(&heap); // Imprime a heap após a remoção

    return 0;
}
