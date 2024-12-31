#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <iostream>
using namespace std;

typedef struct {
    int mat;
    char nome[30];
    } TAluno;

TAluno v[20];
int ultimo = 0;

void inserir(TAluno novo){
    if (ultimo < 30){
        v[ultimo] = novo;
        cout << "Adicionado com sucesso!" << endl;
        ultimo += 1;
    }
    else {
        cout << "O vetor está cheio!" << endl;
    }
}

void remover(TAluno procurado){
    int indice_a_remover;

    for (int i = 0; i < ultimo; i++){
        if (v[i].mat == procurado.mat){
            indice_a_remover = i;

            for (int r = indice_a_remover; r < ultimo - 1; r++){
                v[r] = v[r + 1];
                cout << "Removido com sucesso!" << endl;
                ultimo--;
            }
        }
    }
}

void mostrar(){
    for (int i = 0; i < ultimo; i++){
        cout << "Matricula: " << v[i].mat << " | Nome: " << v[i].nome << endl;
    }
}

int main(){
    TAluno a1;
    TAluno a2;

    a1.mat = 111;
    strcpy(a1.nome, "Lucas");

    a2.mat = 222;
    strcpy(a2.nome, "Ruan");

    mostrar();
    inserir(a1);
    mostrar();
    inserir(a2);
    mostrar();
    remover(a1);
    mostrar();

    return 0;
}
