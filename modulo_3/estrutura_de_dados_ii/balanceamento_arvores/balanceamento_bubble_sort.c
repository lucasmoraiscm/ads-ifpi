#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#include <string.h>

typedef char* ITEM;

// Definindo a estrutura da árvore binária
typedef struct arvore
{
    ITEM item;
    struct arvore *dir;
    struct arvore *esq;
} *Arv;

// Funções para criar raiz e nós da árvore
Arv criar_no_arv(Arv no_esq, ITEM valor, Arv no_dir) 
{
    Arv no = (struct arvore*)malloc(sizeof(struct arvore));
    no->item = valor;
    no->dir = no_dir;
    no->esq = no_esq;
    return no;
}

void bubble_sort(int quant, int* vetor) 
{
    int i, j;

    for (i = quant - 1; i >= 1; i--) {
        for (j = 0; j < i; j++) {
            if (vetor[j] > vetor[j + 1]) {
                int temp = vetor[j];
                vetor[j] = vetor[j + 1];
                vetor[j + 1] = temp;
            }
        }
    }
}

void balancear(int* vetor, int first, int last) {
    if (last <= first) {
        int middle = (first + last) / 2;
        //inserir(vetor[middle]); Fazer uma função inserir
        balancear(vetor, first, middle - 1);
        balancear(vetor, middle + 1, last);
    }
}

int main() 
{
    int valores[] = {3, 9, 4, 7, 1, 6, 2, 5, 8};
    int quant = sizeof(valores) / sizeof(valores[0]);

    bubble_sort(quant, &valores);

    //balancear(&valores, valores[0], valores[9]);

    return 0;
}
