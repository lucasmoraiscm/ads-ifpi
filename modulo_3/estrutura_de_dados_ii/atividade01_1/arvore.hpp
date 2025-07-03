#include <cstdlib>
#include <iostream>
using namespace std;

typedef int Item;

// definir a estrutura da arvore
typedef struct arv{
    struct arv *esquerda;
    Item item;
    struct arv *direita;
}*Arvore;


// funcao que criar a arvore binaria

Arvore criar_arvore(Arvore esquerda, Item valor,Arvore direita){
    Arvore no = (struct arv*)malloc(sizeof(struct arv));
    no->esquerda = esquerda;
    no->item = valor;
    no->direita = direita;
    return no;
}


// tipos de percurssos

// em-ordem
void EmOrdem(Arvore arvore){ // esquerda - raiz - direita
    if(arvore == NULL) return;
    EmOrdem(arvore->esquerda);
    cout << arvore->item << ' ';
    EmOrdem(arvore->direita);
}

// pre-ordem
void PreOrdem(Arvore arvore){ // raiz - esquerda - direita
    if(arvore == NULL) return;
    cout << arvore->item << ' ';
    PreOrdem(arvore->esquerda);
    PreOrdem(arvore->direita);
}

// pos-ordem
void PosOrdem(Arvore arvore){ // esquerda - direita - raiz
    if(arvore == NULL) return;
    PosOrdem(arvore->esquerda);
    PosOrdem(arvore->direita);
    cout << arvore->item << " ";
}


// DESTRUICAO DE UMA ARVORE (usar percusso pos-ordem)

void destruirArvore(Arvore *arvore){
    if(*arvore == NULL) return;
    destruirArvore(&(*arvore)->esquerda);
    destruirArvore(&(*arvore)->direita);
    free(*arvore); //liberar memoria
    *arvore = NULL; // zerar ponteiro
}

// INSERCAO em ARVORE DE BUSCA BINARIA (usar percursso pre-ordem)

void inserirArvore(Arvore *arvore,Item item){
    if(*arvore == NULL) *arvore = criar_arvore(NULL,item,NULL);
    else if(item <= (*arvore)->item) inserirArvore(&(*arvore)->esquerda,item);
    else inserirArvore(&(*arvore)->direita,item);
}

// BUSCAR EM ARVORE DE BUSCA BINARIA

int buscarArvore(Arvore arvore,Item item){
    if(arvore == NULL) return 0;
    else if(arvore->item == item) return 1;
    else if(item <= arvore->item) return buscarArvore(arvore->esquerda,item);
    else return buscarArvore(arvore->direita,item);
}

// REMOCAO EM ARVORE DE BUSCA BINARIA

int removerMaxArvore(Arvore *arvore){
    if(*arvore == NULL) abort();
    while ((*arvore)->direita != NULL) arvore = &(*arvore)->direita;
    Arvore no = *arvore; // no tem referencia do valor max
    Item valorMax = no->item; //guarda valor maximo no x
    *arvore = no->esquerda; //arvore aponta pro filho do valor max agora
    free(no);
    return valorMax;

}


// REMOCAO DE UM ITEM X NA ARVORE DE BUSCAR BINARIA
void remover(Item x, Arvore *arvore) {
    if (*arvore == NULL) return;
    if (x == (*arvore)->item) {
        Arvore no = *arvore;
        if (no->esquerda == NULL) *arvore = no->direita;
        else if (no->direita == NULL) *arvore = no->esquerda;
        else no->item = removerMaxArvore(&no->esquerda);
        if (no != *arvore) free(no);
    }
    else if (x <= (*arvore)->item) remover(x, &(*arvore)->esquerda);
    else remover(x, &(*arvore)->direita);
}


// FUNCAO CONTAR NOS
int nos(Arvore arvore) {
    if (arvore == NULL) return 0;
    else return 1 + nos(arvore->esquerda) + nos(arvore->direita);
}


//CONTAR FOLHAS DA ARVORE
int folhas(Arvore arvore){
    if(arvore == NULL) return 0;
    else if(arvore->esquerda == NULL && arvore->direita == NULL) return 1;
    else return folhas(arvore->esquerda) + folhas(arvore->direita);
}

// FUNCAO CONTAR ALTURA da arvore em relacao a numero maximo de nos

int altura(Arvore arvore){
    if(arvore == NULL) return 0;
    int arvEsqu = altura(arvore->esquerda);
    int arvDir = altura(arvore->direita);

    return 1 + (arvEsqu > arvDir ? arvEsqu : arvDir); 
}


// FUNCAO TEM ONDE RETORNAR SE O ITEM X ESTA NA ARVORE OU NAO
//valor pode estar no lado esquerdo OU lado direito
int tem(Arvore arvore, Item x){
    if(arvore == NULL) return 0; //não achei
    else if(arvore->item == x) return 1; //Se o valor que eu quero for igual ao valor aqui 
    else {
        return tem(arvore->esquerda,x) || tem(arvore->direita,x); //Ei, esquerda, você viu esse número? OU Ei, direita, você viu esse número????
    }
}


// FUNCAO PARA SABER SE ARVORE EH ESTRITAMENTE BINARIA, SE EM CADA Nó POSSUI 0 FILHOS OU 2 FILHOS
int ehEstritBinaria(Arvore arvore){
    if(arvore == NULL) return 1; // árvore vazia é considerada estritamente binária, pois nao viola a regra dos 0 ou 2 filhos
    else if((arvore->esquerda == NULL && arvore->direita != NULL) || (arvore->esquerda != NULL && arvore->direita == NULL)){ //verificar se arvore possui 1 filho
        return 0;
    }else{
        return ehEstritBinaria(arvore->esquerda) && ehEstritBinaria(arvore->direita);
    }
    return 1;
}

int ehEstritBinaria2(Arvore arvore){
    if(arvore == NULL) return 1; // árvore vazia é considerada estritamente binária, pois nao viola a regra dos 0 ou 2 filhos
    else if(!(arvore->esquerda == NULL && arvore->direita == NULL) && !(arvore->esquerda != NULL && arvore->direita != NULL)){ //verificar se arvore não é folha ou binaria
        return 0;
    }else{
        return ehEstritBinaria(arvore->esquerda) && ehEstritBinaria(arvore->direita);
    }
    return 1;
}

// FUNCAO PARA SABER SE ARVORE(A) E ARVORE(B) TEM A MESMA FORMA E MESMO ITENS
int ehIgual(Arvore arvore1,Arvore arvore2){
    if(arvore1 == NULL && arvore2 == NULL) return 1; //sao iguais
    if(arvore1->item != arvore2->item) return 0; //tiverem itens diferentes
    if(arvore1 == NULL || arvore2 == NULL) return 0; //tiverem formatos diferentes

    return ehIgual(arvore1->esquerda,arvore2->esquerda) && ehIgual(arvore1->direita,arvore2->direita);
}


// FUNCAO PARA AVALIAR UMA EXPRESSAO NUMERICA EM ARVORE
#define MAIS   -1
#define MENOS  -2
#define MULT   -3
#define DIV    -4

int valor(Arvore a) {
    if (a->esquerda == NULL && a->direita == NULL) {
        return a->item; // eii,devolve esse numero entao
    }

    int valEsq = valor(a->esquerda); //numero retornado aqui
    int valDir = valor(a->direita); // aqui tbm

    if (a->item == MAIS) return valEsq + valDir;
    else if (a->item == MENOS) return valEsq - valDir;
    else if (a->item == MULT) return valEsq * valDir;
    else if (a->item == DIV) return valEsq / valDir;

    return 0;
}


//FUNCAO PARA EXIBIR ARVORE DE BUSCA BINARIA EM ORDEM DECRESCENTE

void exibirArvoreDesc(Arvore arvore){
    if(arvore == NULL) return;
    exibirArvoreDesc(arvore->direita); //visita primeiro os maiores
    cout << arvore->item << " " << endl; //depois mostra
    exibirArvoreDesc(arvore->esquerda); //depois visita os menores
}