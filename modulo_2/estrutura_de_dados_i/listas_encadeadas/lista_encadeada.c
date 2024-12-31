#include <stdio.h>
#include "./lista_encadeada.h"

int main() {
    Lista I = no(3, no(1, no(5, NULL)));
    Lista H = no(4, no(2, NULL));
    Lista M = no(7, no(9, NULL));
    
    exibe(I);
    exibe(H);

    int tamanho = tam(I);

    printf("\n%d\n", tamanho);

    exibe_inv(I);

    anexa(&H, I);

    exibe(I);
    exibe(H);

    destroi(&M);

    exibe(I);
    exibe(H);
    exibe(M);

    printf("\n%d", pert(3, I));
    printf("\n%d", pert(10, I));

    Lista Z = clone(I);

    exibe(Z);

    return 0;
}
