#include <stdio.h>
#include "./pilha.h"

int main() {
    Pilha P = pilha(3);

    printf("%d", vaziap(P));
    printf("\n%d", cheiap(P));

    empilha(1, P);
    empilha(2, P);
    empilha(3, P);

    printf("\n%d", vaziap(P));
    printf("\n%d", cheiap(P));

    printf("\n%d", topo(P));

    printf("\n%d", desempilha(P));
    printf("\n%d", desempilha(P));

    printf("\n%d", topo(P));

    printf("\n%d", vaziap(P));
    printf("\n%d", cheiap(P));

    destroip(&P);

    return 0;
}
