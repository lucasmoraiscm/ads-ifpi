//Crie a função altura (A), que devolve a altura da árvore binária A.

#include "arvore.hpp"
#include <iostream>
using namespace std;

int main(){

    Arvore arvore = criar_arvore(criar_arvore(NULL,3,NULL),1,criar_arvore(criar_arvore(NULL,4,NULL),2,NULL));
    
    
    cout << "altura: " << altura(arvore) << endl;

    return 0;
}