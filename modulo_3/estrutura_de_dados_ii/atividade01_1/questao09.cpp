//Crie a função exibe_dec (A), que exibe os itens de uma árvore de busca binária
//em ordem decrescente.

#include <iostream>
#include "arvore.hpp"

int main(){

    Arvore arvore = NULL;
    inserirArvore(&arvore,5);
    inserirArvore(&arvore,3);
    inserirArvore(&arvore,7);
    inserirArvore(&arvore,1);
    inserirArvore(&arvore,4);
    inserirArvore(&arvore,6);
    inserirArvore(&arvore,9);
    inserirArvore(&arvore,0);
    inserirArvore(&arvore,2);
    inserirArvore(&arvore,8);

    exibirArvoreDesc(arvore);

    return 0;
}