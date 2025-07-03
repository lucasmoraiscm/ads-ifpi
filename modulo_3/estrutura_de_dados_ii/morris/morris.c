#include <stdio.h>
#include <stdlib.h>

typedef int Item;

typedef struct arv
{
    struct arv *esquerda;
    Item item;
    struct arv *direita;
} *Arvore;

Arvore criar_arvore(Arvore esquerda, Item valor, Arvore direita)
{
    Arvore no = (struct arv *)malloc(sizeof(struct arv));
    no->esquerda = esquerda;
    no->item = valor;
    no->direita = direita;
    return no;
}

void morrisEmOrder(Arvore *arv)
{
    Arvore p = *arv, temp;

    while (p != NULL)
    {
        if (p->esquerda == NULL)
        {
            printf("%d ", p->item);
            p = p->direita;
        }
        else
        {
            temp = p->esquerda;
            while (temp->direita != NULL && temp->direita != p)
            {
                temp = temp->direita;
            }
            if (temp->direita == NULL)
            {
                temp->direita = p;
                p = p->esquerda;
            }
            else
            {
                printf("%d ", p->item);
                temp->direita = NULL;
                p = p->direita;
            }
        }
    }
}

void morrisPreOrder(Arvore *arv)
{
    Arvore p = *arv, temp;

    while (p != NULL)
    {
        if (p->esquerda == NULL)
        {
            printf("%d ", p->item);
            p = p->direita;
        }
        else
        {
            temp = p->esquerda;
            while (temp->direita != NULL && temp->direita != p)
            {
                temp = temp->direita;
            }
            if (temp->direita == NULL)
            {
                printf("%d ", p->item);
                temp->direita = p;
                p = p->esquerda;
            }
            else
            {
                temp->direita = NULL;
                p = p->direita;
            }
        }
    }
}

int main()
{
    Arvore arvore = criar_arvore(criar_arvore(criar_arvore(NULL, 3, NULL), 5, criar_arvore(NULL, 7, NULL)), 10, criar_arvore(criar_arvore(NULL, 15, NULL), 20, criar_arvore(NULL, 24, NULL)));
    printf("Em Ordem por Morris:\n");
    morrisEmOrder(&arvore);
    printf("\n");
    printf("Em PreOrdem por Morris:\n");
    morrisPreOrder(&arvore);

    return 0;
}