#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <iostream>
using namespace std;

typedef struct pessoa {
    int id;
    char nome[30];
    pessoa *proximo;
} TPessoa;

int main(){
    TPessoa *f1 = (TPessoa*) malloc(sizeof(TPessoa));

    f1->id = 1;
    strcpy(f1->nome, "Maria");
    f1->proximo = NULL;

    cout << f1->id << endl;
    cout << f1->nome << endl;

    TPessoa *f2 = (TPessoa*) malloc(sizeof(TPessoa));

    f2->id = 2;
    strcpy(f2->nome, "Joao");
    f2->proximo = NULL;

    cout << f2->id << endl;
    cout << f2->nome << endl;

    f1->proximo = f2;

    TPessoa *percorre = f1;
    while (percorre){
        cout << percorre->id << endl;
        cout << percorre->nome << endl;
        percorre = percorre->proximo;
    }

    return 0;
}