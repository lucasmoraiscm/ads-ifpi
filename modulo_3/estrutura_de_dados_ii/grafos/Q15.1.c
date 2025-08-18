#include "lista.h" // Supondo que o arquivo com a estrutura de lista esteja disponível

void mostra_grafo(Lista Adj[], int n) {
    printf("--- Representacao do Grafo (Listas de Adjacencia) ---\n");
    for (int i = 0; i < n; i++) {
        printf("Vertice %d -> ", i);
        Lista atual = Adj[i];
        if (atual == NULL) {
            printf("Beco");
        } else {
            while (atual != NULL) {
                printf("%d ", atual->item);
                atual = atual->prox;
            }
        }
        printf("\n");
    }
    printf("-----------------------------------------------------\n");
}


int main(void) {
    // Grafo do Exercício 15.1
    Lista Adj[6] = {
        /* 0 */ no(1, no(2, no(3, NULL))),
        /* 1 */ no(0, no(3, NULL)),
        /* 2 */ no(0, no(3, no(4, NULL))),
        /* 3 */ no(1, no(2, no(5, NULL))),
        /* 4 */ NULL,
        /* 5 */ no(3, no(4, NULL))
    };
    int n = 6;

    // Chamando a função para exibir o grafo
    mostra_grafo(Adj, n);

    // Libera a memória alocada para o grafo
    for (int i = 0; i < n; i++) {
        destroi(&Adj[i]);
    }

    return 0;
}