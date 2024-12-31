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

    int igual = 1;

    for (int i = 0; i < sizeof(nome1); i++) {
        char carac1 = nome1[i];
        char carac2 = nome2[i];

        if (carac1 != '\0') {
            if (carac1 != carac2) {
                igual = 0;
                break;
            }
        }
        else {
            break;
        }
    }

    if (igual) {
        cout << "São Iguais!" << endl;
    }
    else {
        cout << "São Diferentes" << endl;
    }

    return 0;
}