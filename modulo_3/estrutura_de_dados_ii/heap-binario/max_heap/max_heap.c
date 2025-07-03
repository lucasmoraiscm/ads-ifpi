#include "max_heap.h"

/**
 * @brief Insere um valor na heap.
 * @param heap Ponteiro para a struct do heap.
 * @param valor Valor a ser inserido.
 * @note A função verifica se a heap está cheia antes de inserir o valor.
 *       Se a heap estiver cheia, uma mensagem de erro é exibida.
 * @note A função também garante que a propriedade max_heap seja mantida após a inserção.
 *       Ou seja, o valor inserido é colocado na posição correta para manter a estrutura da heap.
 *       A propriedade max_heap garante que o valor de cada nó pai seja maior ou igual ao valor de seus filhos.
 * @note 
 */ 
void inserir_max(heap_t *heap, int valor)
{   
    // Verifica se a heap está cheia
    if (heap->tamanho >= TAM_MAX_VETOR)
    {
        printf("Heap cheio!\n");
        abort();
    }

    int ind_valor = heap->tamanho;      // Índice do valor a ser inserido
    heap->dados[ind_valor] = valor;     // Insere o valor na última posição
    heap->tamanho++;                    // Aumenta o tamanho da heap

    // Reorganiza a heap para manter a propriedade max_heap
    // Enquanto o índice do valor for maior que 0 e o valor do nó pai for menor que o valor atual
    while (ind_valor > 0 && heap->dados[(ind_valor - 1) / 2] < heap->dados[ind_valor])
    {
        int valor_temp = heap->dados[ind_valor];                    // Armazena o valor atual em um valor temporário
        heap->dados[ind_valor] = heap->dados[(ind_valor - 1) / 2];  // Troca o valor atual com o nó pai
        heap->dados[(ind_valor - 1) / 2] = valor_temp;              // Coloca o valor atual na posição do nó pai
        ind_valor = (ind_valor - 1) / 2;                            // Atualiza o índice do valor para o nó pai
    }
}

/**
 * @brief Remove o maior valor da heap.
 * @param heap Ponteiro para a struct do heap.
 * @return O maior valor removido da heap.
 * @note A função verifica se a heap está vazia antes de remover o valor.
 *      Se a heap estiver vazia, retorna -1.
 * @note A função remove o maior valor (raiz) da heap e coloca o último valor na raiz.
 *      Em seguida, ela reorganiza a heap para manter a propriedade max_heap.
 *      A função utiliza um loop para comparar o nó atual com seus filhos e trocá-los se necessário.
 */
int remover_max(heap_t *heap)
{   
    // Verifica se a heap está vazia
    if (heap->tamanho == 0)
    {
        printf("Heap vazio!\n");
        return -1;
    }

    int raiz = heap->dados[0];  // Armazena o maior valor (raiz) a ser removido
    heap->tamanho--;            // Diminui o tamanho da heap
    heap->dados[0] = heap->dados[heap->tamanho]; // Coloca o último valor na raiz

    int ind_atual = 0;  // Índice do nó atual

    // Enquanto o nó atual tiver filhos
    while (1)
    { 
        int ind_maior_valor = ind_atual;         // Inicializa o maior valor como o nó atual
        int ind_esquerda = (2 * ind_atual) + 1;           // Índice do filho esquerdo
        int ind_direita = (2 * ind_atual) + 2;            // Índice do filho direito

        // Verifica se o filho esquerdo e existe e se ele é maior que o nó atual
        if (ind_esquerda < heap->tamanho && heap->dados[ind_esquerda] > heap->dados[ind_maior_valor])
        {
            ind_maior_valor = ind_esquerda; // Atualiza o maior valor para o filho esquerdo
        }

        // Verifica se o filho direito existe e se ele é maior que o maior valor atual
        if (ind_direita < heap->tamanho && heap->dados[ind_direita] > heap->dados[ind_maior_valor])
        {
            ind_maior_valor = ind_direita; // Atualiza o maior valor para o filho direito
        }

        // Se o maior valor for o nó atual, a heap está reorganizada
        if (ind_maior_valor == ind_atual)
        {
            break; // Sai do loop
        }

        int valor_temp = heap->dados[ind_atual];                         // Armazena o valor atual em um valor temporário
        heap->dados[ind_atual] = heap->dados[ind_maior_valor];        // Troca o valor atual com o maior valor
        heap->dados[ind_maior_valor] = valor_temp;                       // Coloca o valor atual na posição do maior valor

        ind_atual = ind_maior_valor;                                  // Atualiza o índice do nó atual para o maior valor
    }

    return raiz; // Retorna o maior valor removido
}

/**
 * @brief Imprime os valores da heap.
 * @param heap A struct do heap a ser impressa.
 * @note A função imprime os valores da heap em ordem de nível, começando pela raiz.
 *       A função utiliza um loop para percorrer os elementos da heap e imprimi-los.
 */
void imprimir_max(heap_t heap)
{
    printf("Heap: ");
    for (int i = 0; i < heap.tamanho; i++)
    {
        printf("%d ", heap.dados[i]);
    }
    printf("\n");
}

int main() {
    heap_t heap;        // Declaração da variável heap
    heap.tamanho = 0;   // Inicializa o tamanho da heap como 0

    inserir_max(&heap, 30);
    inserir_max(&heap, 20);
    inserir_max(&heap, 50);
    inserir_max(&heap, 10);
    inserir_max(&heap, 40);

    imprimir_max(heap);

    printf("Maior valor removido: %d\n", remover_max(&heap));
    imprimir_max(heap);

    return 0;
}