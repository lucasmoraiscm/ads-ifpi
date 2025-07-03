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
Arv criar_no_arv(Arv no_esq, ITEM valor, Arv no_dir) {
    Arv no = (struct arvore*)malloc(sizeof(struct arvore));
    no->item = valor;
    no->dir = no_dir;
    no->esq = no_esq;
    return no;
}

// Função para mostrar a árvore em ordem (esquerda, raiz, direita)
void em_ordem(Arv arvore) {
    if (arvore == NULL) {
        return;
    }
    em_ordem(arvore->esq);
    printf("%s ", arvore->item);
    em_ordem(arvore->dir);
}

// Função para mostrar a árvore em pré-ordem (raiz, esquerda, direita)
void pre_ordem(Arv arvore) {
    if (arvore == NULL) {
        return;
    }
    printf("%d ", arvore->item);
    pre_ordem(arvore->esq);
    pre_ordem(arvore->dir);
}

// Função para mostrar a árvore em pós-ordem (esquerda, direita, raiz)
void pos_ordem(Arv arvore) {
    if (arvore == NULL) {
        return;
    }
    pos_ordem(arvore->esq);
    pos_ordem(arvore->dir);
    printf("%d ", arvore->item);
}

// Função para destruir a árvore
void destroi_arv(Arv *arvore) {
    if (*arvore == NULL) {
        return;
    }
    destroi_arv(&(*arvore)->esq);
    destroi_arv(&(*arvore)->dir);
    free(*arvore);
    *arvore = NULL;
}

/* Funções para inserir um valor de forma ordenada na árvore de busca binária (ABB),
    onde o valor menor vai para a esquerda e o maior para a direita. 
*/
void ins_arv_busca_binaria(ITEM valor, Arv *arvore) {
    if (*arvore == NULL) {
        *arvore = criar_no_arv(NULL, valor, NULL);
    } else if (valor <= (*arvore)->item) {
        ins_arv_busca_binaria(valor, &(*arvore)->esq);
    } else {
        ins_arv_busca_binaria(valor, &(*arvore)->dir);
    }
}

// Função para buscar um valor na árvore de busca binária
int bus_arv_busca_binaria(ITEM valor, Arv arvore) {
    if (arvore == NULL) {
        return 0;
    }
    if (valor == arvore->item) {
        return 1;
    }
    if (valor > arvore->item) {
        return bus_arv_busca_binaria(valor, arvore->dir);
    } else {
        return bus_arv_busca_binaria(valor, arvore->esq);
    }
}

// Função para pegar o valor máximo da árvore de busca binária e utilizar na remoção de um nó,
ITEM rem_valormax_arv_busca_binaria(Arv *arvore) {
    if (*arvore == NULL) {
        abort();
    }
    while ((*arvore)->dir != NULL) {
        arvore = &(*arvore)->dir;
    }
    Arv no_aux = *arvore;
    ITEM valor_x = no_aux->item;
    *arvore = no_aux->esq;
    free(no_aux);
    return valor_x;
}

// Função para remover um nó da árvore de busca binária
void rem_arv_busca_binaria(ITEM valor_x, Arv *arvore) {
    if (*arvore == NULL) {
        return;
    }
    if (valor_x == (*arvore)->item) {
        Arv no_aux = *arvore;
        if (no_aux->esq == NULL) {
            *arvore = no_aux->dir;
        } else if (no_aux->dir == NULL) {
            *arvore = no_aux->esq;
        } else {
            no_aux->item = rem_valormax_arv_busca_binaria(&no_aux->esq);
        }
        if (no_aux != *arvore) {
            free(no_aux);
        }
    } else if (valor_x <= (*arvore)->item) {
        rem_arv_busca_binaria(valor_x, &(*arvore)->esq);
    } else {
        rem_arv_busca_binaria(valor_x, &(*arvore)->dir);
    }
}

// Funções para contar o número de nós de uma árvore binária
int nos(Arv arvore) {
    if (arvore == NULL) {
        return 0;
    } else  {
        return 1 + nos(arvore->esq) + nos(arvore->dir);
    }
}

// Função para contar o número de folhas de uma árvore binária
int folhas(Arv arvore) {
    if (arvore == NULL) {
        return 0;
    } else if (arvore->esq == NULL && arvore->dir == NULL) {
        return 1;
    } else {
        return folhas(arvore->esq) + folhas(arvore->dir);
    }
}

// Função para contar o maior número de nós internos de uma árvore binária (da raiz até a folha)
int altura(Arv arvore) {
    if (arvore == NULL) {
        return 0;
    }
    int alt_arv_esq = altura(arvore->esq);
    int alt_arv_dir = altura(arvore->dir);

    return 1 + (alt_arv_esq > alt_arv_dir ? alt_arv_esq : alt_arv_dir);
}

// Função para pesquisar um valor na árvore binária (não ordenada, parecido com busca linear)
int tem(ITEM valor_x, Arv arvore) {
    if (arvore == NULL) {
        return 0;
    } else if (valor_x == arvore->item) {
        return 1;
    }
    return tem(valor_x, arvore->esq) || tem(valor_x, arvore->dir);
}

int estritamenteBin(Arv arv) {
    if (arv == NULL) return 1;

    int temEsq = (arv->esq != NULL);
    int temDir = (arv->dir != NULL);

    return (temEsq && temDir) || (!temEsq && !temDir);
}

int eb(Arv arv) {
    if (arv == NULL) return 1;

    if (!estritamenteBin(arv)) {
        return 0;
    }

    return eb(arv->esq) && eb(arv->dir);
}

int iguais(Arv a, Arv b) {
    if (a == NULL && b == NULL) return 1;
    if (a == NULL || b == NULL) return 0;
    if (a->item != b->item) return 0;

    return iguais(a->esq, b->esq) && iguais(a->dir, b->dir);
}

// Função para exibir a arvore de busca binaria de forma decrescente
void exibe_de(Arv arvore) {
    if (arvore == NULL) return;
    exibe_de(arvore->dir);
    printf("%d ", arvore->item);
    exibe_de(arvore->esq);
}

// Para uma possivel solução da Q.13.8

int valor(Arv arvore) {
    // Se o no for nulo retorna 0;
    if (arvore == NULL) return 0;
    /*Percebi que os valores em si, estão em folhas, logo faço
    a verificação se é uma folha, se for. Retorno o valor dela transformado
    usando a função atoi da biblioteca ctype.
    */
    if (arvore->esq == NULL && arvore->dir == NULL) {  
        return atoi(arvore->item);
    }
    /*Percebi que os operadores, estão em nós com filhos, logo faço
    a verificação se esse nó tem filhos, se for. Pego recursivamente os
    valores do filhos a esquerda e a direita e uso a função da biblioteca strcmp para
    identificar qual o operador e retorno o valor daquela operação.
    */
    if (arvore->esq != NULL && arvore->dir != NULL) {
        int valor_esq = valor(arvore->esq);
        int valor_dir = valor(arvore->dir);

        if (strcmp(arvore->item, "+") == 0) {
            return valor_esq + valor_dir;
        } else if (strcmp(arvore->item, "-") == 0) {
            return valor_esq - valor_dir;
        } else if (strcmp(arvore->item, "*") == 0) {
            return valor_esq * valor_dir;
        } else if (strcmp(arvore->item, "/") == 0) {
            return valor_esq / valor_dir;
        }
    }
}