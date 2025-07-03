//Crie a função nos(A), que devolve o total de nós na árvore binária A.
#include <iostream>
#include "arvore.hpp"
using namespace std;

int main(){

    Arvore arvore = NULL;
    inserirArvore(&arvore,2);
    inserirArvore(&arvore,5);
    inserirArvore(&arvore,1);
    inserirArvore(&arvore,6);
    inserirArvore(&arvore,3);

    cout << "total: " << nos(arvore) << endl;

    return 0;
}