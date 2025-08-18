#include <stdio.h>
#include "lista.h"
#include "pilha.h" // Inclui a estrutura de pilha de listas

// Função dfs() baseada na bfs(), mas com Pilha 
void dfs(int v, int w, Lista Adj[]) {
    PilhaLista P;
    inicializa_pilha_lista(&P);
    empilha_lista(no(v, NULL), &P);

    while (!vaziap_lista(P)) {
        Lista c = desempilha_lista(&P);
        if (c->item == w) {
            exibe_inv(c);
            puts("");
        } else {
            for (Lista s = Adj[c->item]; s != NULL; s = s->prox) {
                if (!pert(s->item, c)) { // Evita ciclos
                    empilha_lista(no(s->item, clone(c)), &P);
                }
            }
        }
        destroi(&c);
    }
}

int main(void) {
    // Usando o grafo da Figura 15.3a para comparar com a busca em largura
    Lista Adj[6] = {
        /* 0 */ no(1, no(2, no(3, NULL))),
        /* 1 */ no(0, no(3, NULL)),
        /* 2 */ no(0, no(3, no(4, NULL))),
        /* 3 */ no(1, no(2, no(5, NULL))),
        /* 4 */ NULL,
        /* 5 */ no(3, no(4, NULL))
    };
    int n = 6;

    printf("Busca em Profundidade (DFS) - Caminhos de 0 para 4:\n");
    dfs(0, 4, Adj);

    // Libera a memória do grafo
    for(int i=0; i<n; i++) {
        destroi(&Adj[i]);
    }

    return 0;
}
