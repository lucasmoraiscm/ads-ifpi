#include <stdio.h>
#include <string.h>
#include <stdlib.h>

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

    //Ponteiros p/ registro
    /*Taluno *a1;
    a1 = &aluno1;
    printf("Mat: %d\n", a1->mat);
    printf("Nome: %s\n", a1->nome);
    printf("Nota: %.2f\n", a1->nota);*/

    //alocação dinâmica
    int *p1 = (int*) malloc(sizeof(int));
    *p1 = 20;
    printf("Valor: %d\n", *p1);
    
    //alocação sequencial
    int n = 3;
    int *w = (int*) malloc(n * sizeof(int));
    w[0] = 10;
    printf("Valor: %d\n", w[0]);
    
}