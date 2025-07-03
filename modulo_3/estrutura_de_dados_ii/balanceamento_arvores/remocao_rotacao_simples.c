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

// Encontra o nó com o menor valor (sucessor em-ordem)
No no_menor_valor(No no) {
    No atual = no;
    while (atual->esquerda != NULL) {
        atual = atual->esquerda;
    }
    return atual;
}

// Função para remover um nó da árvore AVL
No remover(No raiz, int valor) {
    if (raiz == NULL) return raiz;

    // Passo 1: Realizar a remoção padrão de BST
    if (valor < raiz->valor) {
        raiz->esquerda = remover(raiz->esquerda, valor);
    } else if (valor > raiz->valor) {
        raiz->direita = remover(raiz->direita, valor);
    } else {
        // Nó com apenas um filho ou nenhum filho
        if ((raiz->esquerda == NULL) || (raiz->direita == NULL)) {
            No temp = raiz->esquerda ? raiz->esquerda : raiz->direita;
            if (temp == NULL) {
                temp = raiz;
                raiz = NULL;
            } else {
                *raiz = *temp;
            }
            free(temp);
        } else {
            // Nó com dois filhos: obter o sucessor em-ordem
            No temp = no_menor_valor(raiz->direita);
            raiz->valor = temp->valor;
            raiz->direita = remover(raiz->direita, temp->valor);
        }
    }

    if (raiz == NULL) return raiz;

    // Passo 2: Atualizar a altura do nó atual
    raiz->altura = 1 + max(altura(raiz->esquerda), altura(raiz->direita));

    // Passo 3: Obter o fator de balanceamento e rebalancear se necessário
    int fb = obter_fator_balanceamento(&raiz);

    // Caso Esquerda-Esquerda
    if (fb > 1 && obter_fator_balanceamento(&raiz->esquerda) >= 0)
        return rotacao_simples_dir(&raiz);

    // Caso Esquerda-Direita
    if (fb > 1 && obter_fator_balanceamento(&raiz->esquerda) < 0) {
        raiz->esquerda = rotacao_simples_esq(&raiz->esquerda);
        return rotacao_simples_dir(&raiz);
    }

    // Caso Direita-Direita
    if (fb < -1 && obter_fator_balanceamento(&raiz->direita) <= 0)
        return rotacao_simples_esq(&raiz);

    // Caso Direita-Esquerda
    if (fb < -1 && obter_fator_balanceamento(&raiz->direita) > 0) {
        raiz->direita = rotacao_simples_dir(&raiz->direita);
        return rotacao_simples_esq(&raiz);
    }

    return raiz;
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

    printf("--- Exemplo de Remocao com Rotacao Simples ---\n\n");
    printf("Construindo a arvore inicial com os valores: 20, 10, 40, 30, 50\n");
    raiz = inserir(&raiz, 20);
    raiz = inserir(&raiz, 10);
    raiz = inserir(&raiz, 40);
    raiz = inserir(&raiz, 30);
    raiz = inserir(&raiz, 50);

    printf("\nArvore inicial (em-ordem): ");
    imprimir_em_ordem(raiz);
    printf("\nFatores de Balanceamento Iniciais:\n");
    imprimir_fatores_balanceamento(&raiz);

    printf("\n-----------------------------------------------\n");
    printf("\nRemovendo o no 10...\n");
    raiz = remover(raiz, 10);

    printf("-> O no 20 ficou desbalanceado (FB = -2).\n");
    printf("-> Seu filho a direita (40) tem FB = 0.\n");
    printf("-> Realizando Rotacao Simples a Esquerda no no 20.\n");

    printf("\n--- Arvore Final Balanceada ---\n");
    printf("Nova raiz da subarvore: %d\n", raiz->valor);
    printf("Arvore final (em-ordem): ");
    imprimir_em_ordem(raiz);
    printf("\nFatores de Balanceamento Finais:\n");
    imprimir_fatores_balanceamento(&raiz);

    return 0;
}
