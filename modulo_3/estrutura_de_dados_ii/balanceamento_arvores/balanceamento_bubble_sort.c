#include <stdio.h>
#include <stdlib.h>

typedef int ITEM;

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

Arv inserir(Arv arvore, ITEM valor)
{
    if (arvore == NULL) return criar_no_arv(NULL, valor, NULL);

    if (valor < arvore->item) 
    {
        arvore->esq = inserir(arvore->esq, valor);
    }
    else if (valor > arvore->item)
    {
        arvore->dir = inserir(arvore->dir, valor);
    }
    
    return arvore;
}

void bubble_sort(int quant, int* vetor) 
{
    for (int i = quant - 1; i >= 1; i--) {
        for (int j = 0; j < i; j++) {
            if (vetor[j] > vetor[j + 1]) {
                int temp = vetor[j];
                vetor[j] = vetor[j + 1];
                vetor[j + 1] = temp;
            }
        }
    }
}

Arv balancear(Arv arvore, int* vetor, int first, int last) {
    if (first > last) return arvore;

    int middle = (first + last) / 2;
    arvore = inserir(arvore, vetor[middle]);
    arvore = balancear(arvore, vetor, first, middle - 1);
    arvore = balancear(arvore, vetor, middle + 1, last);
    return arvore;
}

void em_ordem(Arv arvore)
{
    if (arvore != NULL) 
    {
        em_ordem(arvore->esq);
        printf("%d ", arvore->item);
        em_ordem(arvore->dir);
    }
}

int main() 
{   
    Arv arvore = NULL;
    int valores[] = {3, 9, 4, 7, 1, 6, 2, 5, 8};
    int quant = sizeof(valores) / sizeof(valores[0]);

    bubble_sort(quant, valores);

    arvore = balancear(arvore, valores, 0, quant - 1);

    printf("\n");
    em_ordem(arvore);
    return 0;
}
