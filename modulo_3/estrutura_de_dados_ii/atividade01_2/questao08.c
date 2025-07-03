#include <stdio.h>
#include <stdlib.h>
#include "arv.h"

int main() {
    Arv arvore = criar_no_arv(criar_no_arv(criar_no_arv(
                            criar_no_arv(NULL,
                                "5", NULL),
                            "+", criar_no_arv(NULL,
                                "3", NULL)), 
                        "/", criar_no_arv(NULL,
                            "4", NULL)),
                    "*", criar_no_arv(criar_no_arv(NULL,
                            "6", NULL),
                        "-", criar_no_arv(NULL,
                            "1", NULL)));
    em_ordem(arvore);
    printf("%d", valor(arvore));
}