#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct arvore {
    char comparacao[20];
    char folha[20];  // Pode ser usado para outras infos, mas aqui não usado.
    char ramo[5];
    struct arvore* sim;
    struct arvore* nao;
} No;

No* criarArvoreDecisao(char comparacao[20], char folha[20], char ramo[5]) {
    No* novoNo = (No*)malloc(sizeof(No));
    strcpy(novoNo->comparacao, comparacao);
    strcpy(novoNo->folha, folha);
    strcpy(novoNo->ramo, ramo);
    novoNo->sim = NULL;
    novoNo->nao = NULL;
    return novoNo;
}

void trocar(int *valor1, int *valor2) {
    int temp = *valor1;
    *valor1 = *valor2;
    *valor2 = temp;
}

void array_para_string(int array[], int tamanho, char* destino) {
    destino[0] = '\0'; // Zera a string
    char buffer[10];
    for (int i = 0; i < tamanho; i++) {
        sprintf(buffer, "%d", array[i]);
        strcat(destino, buffer);
        if (i < tamanho - 1)
            strcat(destino, ", ");
    }
}

void bubbleSort(int array[], int tamanho, No** arvoreDecisao) {
    No* atual = NULL;

    for (int etapa = 0; etapa < tamanho - 1; ++etapa) {
        for (int i = 0; i < tamanho - etapa - 1; ++i) {
            char comparacao[20], folha[20], ramo[5];
            sprintf(ramo, "Nao");

            if (array[i] > array[i + 1]) {
                sprintf(ramo, "Sim");
                trocar(&array[i], &array[i + 1]);
                sprintf(comparacao, "[ %d > %d ]", array[i + 1], array[i]);
                array_para_string(array, tamanho, folha);
            } else {
                sprintf(comparacao, "[ %d < %d ]", array[i], array[i + 1]);
                array_para_string(array, tamanho, folha);
            }

            No* novoNo = criarArvoreDecisao(comparacao, folha, ramo);

            if (*arvoreDecisao == NULL) {
                *arvoreDecisao = novoNo;
                atual = novoNo;
            } else {
                if (ramo[0] == 'S') {
                    atual->sim = novoNo;
                } else {
                    atual->nao = novoNo;
                }
                atual = novoNo;
            }
        }
    }
}

void percorrerArvoreDecisao(No* arvore) {
    if (arvore == NULL) return;

    printf("Comparacao: %s | Ramo: %s | Folha: %s\n", arvore->comparacao, arvore->ramo, arvore->folha);

    percorrerArvoreDecisao(arvore->sim);
    percorrerArvoreDecisao(arvore->nao);
}

void liberarArvore(No* arvore) {
    if (arvore == NULL) return;
    liberarArvore(arvore->sim);
    liberarArvore(arvore->nao);
    free(arvore);
}

int main() {
    No* arvoreDecisao = NULL;

    int vetor[] = {4, 2, 1, 3};
    int tamanho = sizeof(vetor) / sizeof(vetor[0]);

    bubbleSort(vetor, tamanho, &arvoreDecisao);

    printf("Arvore de Decisao:\n");
    percorrerArvoreDecisao(arvoreDecisao);

    liberarArvore(arvoreDecisao);

    return 0;
}