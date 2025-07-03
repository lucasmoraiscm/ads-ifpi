//Crie a função tem (A, x), que informa se a árvore binária A tem o item x.

#include "arvore.hpp"
#include <iostream>

int main(){

    Arvore arvore = criar_arvore(criar_arvore(NULL,3,NULL),1,criar_arvore(criar_arvore(NULL,4,NULL),2,NULL));

    int valorProcurado = -1;
    int resposta = tem(arvore,valorProcurado);
    resposta == 1 ? cout << valorProcurado << " esta na arvore" << endl : cout << valorProcurado << " nao esta na arvore" << endl;

    return 0;
}