#include "heap_sort.h"

/**
 * @brief Troca os valores de dois inteiros.
 * @param a Ponteiro para o primeiro inteiro.
 * @param b Ponteiro para o segundo inteiro.
 * @note Utilizada para trocar elementos do vetor durante a ordenação.
 */
void trocar(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

/**
 * @brief Garante a propriedade de heap máxima descendo o elemento na posição 'inicio'.
 * @param heap Ponteiro para a struct da heap.
 * @param inicio Índice do elemento a ser ajustado.
 * @param fim Índice do último elemento considerado na heap.
 * @note Compara o elemento atual com seus filhos e, se necessário, troca com o maior deles,
 *       repetindo o processo recursivamente até que a propriedade de heap seja satisfeita.
 */
void descer(heap_t *heap, int inicio, int fim) {
    int maior = inicio;
    int esquerda = (2 * inicio) + 1;
    int direita = (2 * inicio) + 2;

    if (esquerda <= fim && heap->dados[esquerda] > heap->dados[maior]) {
        maior = esquerda;
    }
    if (direita <= fim && heap->dados[direita] > heap->dados[maior]) {
        maior = direita;
    }
    if (maior != inicio) {
        trocar(&heap->dados[inicio], &heap->dados[maior]);
        descer(heap, maior, fim);
    }
}

/**
 * @brief Constrói um heap máximo a partir dos dados da heap.
 * @param heap Ponteiro para a struct da heap.
 * @note Ajusta todos os nós pais para garantir a propriedade de heap máxima,
 *       começando do meio do vetor até a raiz.
 */
void construir_heap(heap_t *heap) {
    for (int i = (heap->tamanho / 2) - 1; i >= 0; i--) {
        descer(heap, i, heap->tamanho - 1);
    }
}

/**
 * @brief Ordena os dados da heap usando o algoritmo Heap Sort.
 * @param heap Ponteiro para a struct da heap.
 * @note Primeiro transforma o vetor em um heap máximo, depois troca a raiz com o último elemento
 *       e reorganiza o heap para os elementos restantes, repetindo até ordenar todo o vetor.
 */
void heap_soft(heap_t *heap) {

    if (heap->tamanho <= 1) {
        return; // Se a heap já está vazia ou tem apenas um elemento, não há nada a fazer
    }

    construir_heap(heap);
    for (int i = heap->tamanho - 1; i >= 1; i--) {
        trocar(&heap->dados[0], &heap->dados[i]);
        descer(heap, 0, i - 1);
    }
}

/**
 * @brief Imprime os elementos da heap.
 * @param heap Ponteiro para a struct da heap.
 * @note Imprime os elementos da heap em ordem de nível, começando pela raiz.
 */
void imprimir(heap_t *heap) {
    for (int i = 0; i < heap->tamanho; i++) {
        printf("%d ", heap->dados[i]);
    }
    printf("\n");
}

int main() {
    heap_t heap = {28, 6, 10, 15, 3, 12, 11}; // Inicializa a heap com alguns valores
    heap.tamanho = 7; // Inicializa o tamanho da heap

    printf("Antes: "); 
    imprimir(&heap); 

    printf("Depois: ");
    heap_soft(&heap);
    imprimir(&heap);

    return 0;
}
