#include <stdio.h>
#include <stdlib.h>

#define max(a, b) ((a) > (b) ? (a) : (b))

typedef struct arvore_avl {
    int valor;
    struct arvore_avl* esquerda;
    struct arvore_avl* direita;
    int altura;
} *No;

No criar_No(int valor) {
    No novoNo = (No)malloc(sizeof(struct arvore_avl));
    novoNo->valor = valor;
    novoNo->esquerda = NULL;
    novoNo->direita = NULL;
    novoNo->altura = 1; // Novo no é inicialmente adicionado como folha
    return novoNo;
}

int altura(No no) {
    if (no == NULL) {
        return 0;
    }
    return no->altura;
}

// Rotacao simples para esquerda
No rotacao_simples_esq(No *no_desbalanceado) {
    No pivo = (*no_desbalanceado)->direita;
    No sub_arvore_central = pivo->esquerda;
    
    // Realiza a rotação simples a esquerda
    pivo->esquerda = *no_desbalanceado;
    (*no_desbalanceado)->direita = sub_arvore_central;

    // Atualiza as alturas
    (*no_desbalanceado)->altura = max(altura((*no_desbalanceado)->esquerda), altura((*no_desbalanceado)->direita)) + 1;
    pivo->altura = max(altura(pivo->esquerda), altura(pivo->direita)) + 1;

    return pivo;
}

// Rotacao simples para direita
No rotacao_simples_dir(No *no_desbalanceado) {
    No pivo = (*no_desbalanceado)->esquerda;
    No sub_arvore_central = pivo->direita;

    // Realiza a rotação simples a direita
    pivo->direita = *no_desbalanceado;
    (*no_desbalanceado)->esquerda = sub_arvore_central;

    // Atualiza as alturas
    (*no_desbalanceado)->altura = max(altura((*no_desbalanceado)->esquerda), altura((*no_desbalanceado)->direita)) + 1;
    pivo->altura = max(altura(pivo->esquerda), altura(pivo->direita)) + 1;

    return pivo;
}

int obter_fator_balanceamento(No *no) {
    if (*no == NULL) return 0;
    
    return altura((*no)->esquerda) - altura((*no)->direita);
}

No inserir(No *no, int valor) {
    // Se estiver vazia
    if (*no == NULL) return criar_No(valor);

    // Inserindo como ABB
    if (valor < (*no)->valor) {
        (*no)->esquerda = inserir(&(*no)->esquerda, valor);
    } else if (valor > (*no)->valor) {
        (*no)->direita = inserir(&(*no)->direita, valor);
    } else {
        return (*no);
    }

    // Atualizando a altura do nó atual
    (*no)->altura = 1 + max(altura((*no)->esquerda), altura((*no)->direita));

    // Calculando o fator de balanceamente para ver se precisa rotacionar
    int fb = obter_fator_balanceamento(&(*no));

    // Caso Esq - Esq, rotacao simples
    if (fb > 1 && valor < (*no)->esquerda->valor) {
        return rotacao_simples_dir(&(*no));
    }
    // Caso Dir - Dir, rotacao simples
    if (fb < -1 && valor > (*no)->direita->valor) {
        return rotacao_simples_esq(&(*no));
    }
    // Caso Esq - Dir, rotacao dupla (uma pra esquerda outra pra direita) <
    if (fb > 1 && valor > (*no)->esquerda->valor) {
        (*no)->esquerda = rotacao_simples_esq(&(*no)->esquerda);
        return rotacao_simples_dir(&(*no));
    }
    // Caso Dir - Esq, rotacao dupla (uma pra direita outra pra esquerda) >
    if (fb < -1 && valor < (*no)->direita->valor) {
        (*no)->direita = rotacao_simples_dir(&(*no)->direita);
        return rotacao_simples_esq(&(*no));
    }

    return (*no);
}

void imprimir_em_ordem(No no) {
    if (no != NULL) {
        imprimir_em_ordem(no->esquerda);
        printf("%d ", no->valor);
        imprimir_em_ordem(no->direita);
    }
}

void imprimir_fatores_balanceamento(No *no) {
    if (*no != NULL) {
        imprimir_fatores_balanceamento(&(*no)->esquerda);
        printf("No %d, FB = %d\n", (*no)->valor, obter_fator_balanceamento(&(*no)));
        imprimir_fatores_balanceamento(&(*no)->direita);
    }
}

int main() {
    No raiz = NULL;

    printf("--- Exemplo de Rotacao Dupla (Esquerda-Direita) ---\n\n");

    printf("Inserindo 30...\n");
    raiz = inserir(&raiz, 30);
    printf("Arvore em-ordem: ");
    imprimir_em_ordem(raiz);
    printf("\n\n");

    printf("Inserindo 10...\n");
    raiz = inserir(&raiz, 10);
    printf("Arvore em-ordem: ");
    imprimir_em_ordem(raiz);
    printf("\n");
    printf("Fatores de Balanceamento antes do desbalanceamento:\n");
    imprimir_fatores_balanceamento(&raiz);
    printf("\n");

    printf("Inserindo 20...\n");
    printf("-> Arvore fica desbalanceada no no 30 (FB = -2).\n");
    printf("-> Filho a esquerda (10) tem FB = +1.\n");
    printf("-> Realizando Rotacao Dupla Esquerda-Direita.\n\n");

    raiz = inserir(&raiz, 20);
    printf("--- Arvore Final Balanceada ---\n");
    printf("Nova raiz: %d\n", raiz->valor);
    printf("Arvore em-ordem: ");
    imprimir_em_ordem(raiz);
    printf("\n");
    printf("Fatores de Balanceamento Finais:\n");
    imprimir_fatores_balanceamento(&raiz);

    return 0;
}