// Uma expressão aritmética pode ser representada por uma árvore binária cuja
// raiz é uma operação e cujas subárvores são operandos. Por exemplo, a expressão
// ((5+3) /4) *(6-1) pode ser representada como na figura a seguir. Crie a fun-
// ção valor (A), que avalia uma expressão aritmética representada por uma árvore
// binária A (cujos nós guardam números inteiros).

// #define MAIS -1
// #define MENOS -2
// #define MULT -3
// #define DIV -4

#include <iostream>
#include "arvore.hpp"

int main()
{
    // ((5 + 3) / 4) * (6 - 1)

    Arvore expressao = criar_arvore(criar_arvore(criar_arvore(criar_arvore(NULL,5,NULL),-1,criar_arvore(NULL,3,NULL)),-4,criar_arvore(NULL,4,NULL)),-3,criar_arvore(criar_arvore(NULL,6,NULL),-2,criar_arvore(NULL,1,NULL)));

    cout << "Resultado da expressao: " << valor(expressao) << endl; // deve imprimir 10

    return 0;
}