#include "heapsort.h"


/**
 * @brief Troca as posições entre 2 valores.
 * @param a Ponteiro para o primeiro valor.
 * @param b Ponteiro para o segundo valor.
 */ 
void trocar(int *a, int *b)
{
    int tmp = *a;
    *a = *b;
    *b = tmp;
}


/**
 * @brief Reogarniza os valores na heap de acordo com a propriedade Max-Heap.
 * @param dados Array de valores da heap.
 * @param primeiro Index do primeiro valor do array.
 * @param ultimo Index do ultimo valor do array.
 * @note A função restaura a propriedade de Max-Heap em uma subárvore.
 * @note A função garante que o elemento no índice primeiro "desça" na árvore até encontrar sua posição correta, 
 *       de modo que ele seja maior que seus filhos.
 */
void moverParaBaixo(int dados[], int primeiro, int ultimo)
{
    int maior = 2 * primeiro + 1; // Assume que o filho da esquerda é o maior

    // Enquanto houver pelo menos um filho dentro dos limites
    while (maior <= ultimo) {
        // Se existir filho da direita e ele for maior que o filho da esquerda
        if (maior < ultimo && dados[maior] < dados[maior + 1]){
            maior++; // O filho da direita passa a ser o maior
        }

        // Se o valor do pai for menor que o maior dos filhos
        if (dados[primeiro] < dados[maior]) {
            trocar(&dados[primeiro], &dados[maior]); // Troca-se as posições entre o pai e o maior filho, movendo o menor valor para baixo
            primeiro = maior; // Atualiza o primeiro para continuar verificando a subárvore abaixo
            maior = 2 * primeiro + 1; // Assume novamente que o filho da esquerda é o maior
        }

        else {
            maior = ultimo + 1; // Atualiza o valor do maior para encerrar o laço
        }
    }
}


/**
 * @brief Ordena os valores da heap do menor para o menor de acordo com a propriedade Max-Heap.
 * @param dados Array de valores da heap.
 * @param n Tamanho do array com os valores da heap.
 * @note A função transforma o vetor em uma estrutura de heap onde o maior valor está na raiz.
 * @note A função troca a raiz (maior valor) com o último elemento da heap e reorganiza o restante do vetor para manter a propriedade de Max-Heap.
 */
void heapSort(int dados[], int n)
{
    // Transforma os valores do array em uma heap
    for (int i = n / 2 - 1; i >= 0; --i) {
        moverParaBaixo(dados, i, n - 1);
    }

    for (int i = n - 1; i >= 1; --i) {
        trocar(&dados[0], &dados[i]); // Troca-se a raiz da heap (maior valor) pelo valor na posição i
        moverParaBaixo(dados, 0, i - 1); // Reorganiza a heap, desconsiderando o valor adicionado na posição i
    }
}


/**
 * @brief Imprime os valores do arry de valores da heap.
 * @param array O array de valores do heap a ser impressa.
 * @param n Tamanho do array com os valores da heap.
 * @note A função imprime os valores do array da heap em ordem de nível, começando pela raiz.
 *       A função utiliza um loop para percorrer os elementos do array e imprimi-los.
 */
void imprimirArray(int array[], int n) 
{
    for (int i = 0; i < n; ++i)
        printf("%d ", array[i]);
    printf("\n");
}


int main() 
{
    int valores[] = {2, 8, 6, 1, 10, 15, 3, 12, 11};
    int n = sizeof(valores) / sizeof(valores[0]);

    imprimirArray(valores, n);

    heapSort(valores, n);

    imprimirArray(valores, n);

    return 0;
}
