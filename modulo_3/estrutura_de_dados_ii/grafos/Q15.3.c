#include <stdio.h>
#include "lista.h"
#include "fila.h" // Usando a fila de listas

// Função bfs() da Figura 15.5
void bfs(int v, int w, Lista Adj[]) {
    FilaLista F;
    inicializa_fila_lista(&F);
    enfileira_lista(no(v, NULL), &F);

    while (!vaziaf_lista(F)) {
        Lista c = desenfileira_lista(&F);
        if (c->item == w) {
            exibe_inv(c);
            puts("");
        } else {
            for (Lista s = Adj[c->item]; s != NULL; s = s->prox) {
                if (!pert(s->item, c)) { // Evita ciclos
                    enfileira_lista(no(s->item, clone(c)), &F);
                }
            }
        }
        destroi(&c);
    }
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

    printf("Busca em Largura (BFS) - Caminhos de 0 para 5:\n");
    bfs(0, 5, Adj); // Busca caminhos da origem 0 para o destino 5

    for(int i=0; i<n; i++) {
        destroi(&Adj[i]);
    }

    return 0;
}