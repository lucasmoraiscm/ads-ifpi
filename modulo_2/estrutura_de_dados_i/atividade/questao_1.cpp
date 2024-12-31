#include <stdio.h>
#include <string.h>
#include <iostream>
using namespace std;

int main() {
    char nome1[20];
    char nome2[20];

    cout << "Nome1: " << endl;
    cin >> nome1;
    cout << "Nome2: " << endl;
    cin >> nome2;

    //strcpy(nome1, "Maria");
    //strcpy(nome2, "Joao");

    int resp = strcmp(nome1, nome2);

    if (resp == 0) {
        puts("São Iguais!");
    }
    else {
        puts("São Diferentes");
    }

    return 0;
}