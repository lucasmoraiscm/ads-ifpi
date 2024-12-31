#include <stdio.h>
#include "./fila.h"

int main() {
    Fila F = fila(3);

    printf("%d", vaziaf(F));
    printf("\n%d", cheiaf(F));

    enfileira(1, F);
    enfileira(2, F);
    enfileira(3, F);

    printf("\n%d", vaziaf(F));
    printf("\n%d", cheiaf(F));

    printf("\n%d", desenfileira(F));
    printf("\n%d", desenfileira(F));

    printf("\n%d", vaziaf(F));
    printf("\n%d", cheiaf(F));

    destroif(&F);

    return 0;
}
