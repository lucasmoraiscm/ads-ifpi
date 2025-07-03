//Crie o arquivo arv.h, com os tipos e funções para árvores definidos nesse capítulo
//(exceto a função emnivel (), que depende do tipo Fila), e use esse arquivo num
//programa que cria e exibe a árvore da Figura 13.5.

#include <iostream>
#include "arvore.hpp"

// exibir arvore nos seguintes percussos

int main(){


    Arvore arv = criar_arvore(criar_arvore(criar_arvore(NULL,
                                                        4, 
                                                        NULL),
                                                    2 , 
                                                    criar_arvore(NULL,
                                                        5,
                                                        NULL)),
                                                1,
                                                criar_arvore(NULL,
                                                    3,
                                                    criar_arvore(NULL,
                                                        6,
                                                        NULL)));



    cout << "Em-ordem" << endl;
    EmOrdem(arv);
    cout << "\nPre-ordem" << endl;
    PreOrdem(arv);
    cout << "\nPos-ordem" << endl;
    PosOrdem(arv);

    return 0;

}