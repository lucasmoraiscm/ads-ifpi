#include <stdio.h>
#include <string.h>

typedef struct{
    int mat;
    char nome[30];
    float nota;
} Taluno;

int main(){
    Taluno aluno1;
    aluno1.mat = 1;
    strcpy(aluno1.nome, "maria");
    aluno1.nota = 8.5;

    //Ponteiros
    int *p;
    int x = 10;
    p = &x;
    x = x + 2;

    printf("Valor: %d\n", *p);
    printf("Endereço: %d\n", p);

    *p = 20;
    printf("Valor %d\n", *p);

    //Vetores
    int v[3] = {4, 5, 6};
    int *p1 = v;

    printf("Valor: %d\n", *(p1));
    printf("Valor: %d\n", *(p1 + 1));
    printf("Valor: %d\n", *(p1 + 2));

    printf("Valor: %d\n", *(v));
    printf("Valor: %d\n", *(v + 1));
    printf("Valor: %d\n", *(v + 2));
}