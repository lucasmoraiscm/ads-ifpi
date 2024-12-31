#include <stdio.h>
#include "lista_encadeada_dinamica.h"
#include <iostream>
using namespace std;

struct elemento {
    struct aluno dados;
    struct elemento *prox;
};

typedef struct elemento Elem;

Lista* cria_lista() {
    Lista* li = (Lista*) malloc(sizeof(Lista));
    
    if (li != NULL) {
        *li = NULL;
    }
    return li;
}

void liberar_lista(Lista* li) {
    if (li != NULL) {
        Elem* no;
        while ((*li) != NULL) {
            no = *li;
            *li = (*li)->prox;
            free(no);
        }
        free(li);
    }
}

int tamanho_lista(Lista* li) {
    if (li == NULL) {
        return 0;
    }

    int cont = 0;
    Elem* no = *li;

    while (no != NULL) {
        cont++;
        no = no->prox;
    }

    return cont;
}

int lista_cheia(Lista* li) {
    return 0;
}

int lista_vazia(Lista* li) {
    if (li == NULL) {
        return 1;
    }
    if (*li == NULL) {
        return 1;
    }
    return 0;
}

int inserir_lista_inicio(Lista* li, struct aluno al) {
    if (li == NULL) {
        return 0;
    }
    Elem* no = (Elem*) malloc(sizeof(Elem)); //alocando memoria p/ o novo no

    if (no == NULL) {
        return 0;
    }

    no->dados = al; //inserindo os dados do aluno
    no->prox = (*li); //apontando p/ inicio da lista
    *li = no; //alterando o inicio p/ o novo no
    return 1;
}

int insere_lista_final(Lista* li, struct aluno al) {
    if (li == NULL) {
        return 0;
    }

    Elem* no = (Elem*) malloc(sizeof(Elem)); //alocando memoria p/ o novo no

    if (no == NULL) {
        return 0;
    }

    no->dados = al; //inserindo os dados do aluno
    no->prox = NULL; //apontando o novo no p/ final da lista

    if ((*li) == NULL) {
        *li = no; //Se a lista estiver vazia, o inicio aponta p/ o novo no
    }
    else {
        Elem *aux = *li; //cria um inicio auxiliar para percorrer a lista até o ultimo elemento

        while (aux->prox != NULL){
            aux = aux->prox; //o auxiliar vira o elemento seguinte
        }
        aux->prox = no; //quando o auxiliar vira o ultimo elemento, ele aponta esse elemento para o novo no
    }

    return 1;
}

int insere_lista_ordenada(Lista* li, struct aluno al) {
    if (li == NULL) {
        return 0;
    }

    Elem *no = (Elem*) malloc(sizeof(Elem)); //alocando memoria p/ o novo no

    if (no == NULL) {
        return 0;
    }

    no->dados = al; //inserindo os dados do aluno

    if (lista_vazia(li)){ //se a lista for vazia
        no->prox = (*li); //o no vai apontar p/ inicio
        *li = no; //o inicio vai apontar p/ o no
        return 1;
    }
    else { //se a lista nao for vazia
        Elem *ant, *atual = *li; //tem que criar 2 auxiliares, o anterior e o atual

        while (atual != NULL && atual->dados.matricula < al.matricula) { //enquanto o atual não chegar no final e não encontrar uma matricula maior
            ant = atual; //o anterior vira o atual
            atual = atual->prox; //o atual vira o proximo
        }

        if (atual == *li) { //se o atual for o inicio da lista
            no->prox = (*li); //o no vai apontar p/ o inicio
            *li = no; //o inicio vai apontar p/ o no
        }
        else { //se o atual nao for o inicio da lista
            no->prox = ant->prox; //o no vai apontar para o proximo que o anterior apontava
            ant->prox = no; //o anterior vai apontar para o no
        }
        return 1; //SUCESSO!!!
    }
}

int remove_lista_inicio(Lista* li) {
    if (li == NULL) {
        return 0;
    }

    if ((*li) == NULL) {
        return 0;
    }

    Elem *no = *li;
    *li = no->prox;
    free(no);
    return 1;
}

int remove_lista_final(Lista* li) {
    if (li == NULL) {
        return 0;
    }

    if ((*li) == NULL) {
        return 0;
    }

    Elem *ant, *no = *li;

    while (no->prox != NULL) {
        ant = no;
        no = no->prox;
    }

    if (no == (*li)) {
        *li = no->prox;
    }
    else {
        ant->prox = no->prox;
    }

    free(no);
    return 1;
}

int remove_lista(Lista* li, int mat) {
    if (li == NULL) {
        return 0;
    }

    Elem *ant, *no = *li;

    while (no != NULL && no->dados.matricula != mat) {
        ant = no;
        no = no->prox;
    }

    if (no == NULL) {
        return 0;
    }

    if (no == *li) {
        *li = no->prox;
    }
    else {
        ant->prox = no->prox;
    }

    free(no);
    return 1;
}

int consulta_lista_pos(Lista* li, int pos, struct aluno *al) {
    if (li == NULL || pos <= 0) {
        return 0;
    }

    Elem *no = *li;
    int i = 1;

    while (no != NULL && i < pos) {
        no = no->prox;
        i++;
    }

    if (no == NULL) {
        return 0;
    }
    else {
        *al = no->dados;
        return 1;
    }
}

int consulta_lista_mat(Lista* li, int mat, struct aluno *al) {
    if (li == NULL) {
        return 0;
    }

    Elem *no = *li;

    while (no != NULL && no->dados.matricula != mat) {
        no = no->prox;
    }

    if (no == NULL) {
        return 0;
    }
    else {
        *al = no->dados;
        return 1;
    }
}
