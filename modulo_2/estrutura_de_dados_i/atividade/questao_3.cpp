#include <stdio.h>
#include <string>
#include <iostream>
using namespace std;

int main(){
    string nome1;
    string nome2;

    cout << "Nome1: " << endl;
    cin >> nome1;
    cout << "Nome2: " << endl;
    cin >> nome2;

    if (nome1 == nome2) {
        cout << "São Iguais!" << endl;
    }
    else {
        cout << "São Diferentes" << endl;
    }
}