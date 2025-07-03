//Crie a função folhas (A), que devolve o total de folhas na árvore binária A.

#include "arvore.hpp"
#include <iostream>
using namespace std;

int main(){

    Arvore arvore = criar_arvore(criar_arvore(NULL,3,NULL),1,criar_arvore(NULL,2,NULL));
    
    
    cout << "total folhas: " << folhas(arvore) << endl;

    return 0;
}