
//Uma árvore A é estritamente binária se cada nó em A é uma folha ou tem dois
//filhos. Crie a função eb (A), que informa a árvore A é estritamente binária.

#include "arvore.hpp"
#include <iostream>

int main(){

    Arvore arvore = criar_arvore(
        criar_arvore(
            criar_arvore(NULL, 4, NULL),
            2,
            criar_arvore(NULL, 5, NULL)
        ),
        1,
        criar_arvore(
            criar_arvore(NULL, 6, NULL),
            3,
            criar_arvore(NULL, 7, NULL)
        )
    );
    
    int resposta = ehEstritBinaria(arvore);
    (resposta == 1 ? cout << "arvore eh estritamente binaria" << endl : cout << "arvore nao eh estritamente binaria" << endl);

    return 0;
}
