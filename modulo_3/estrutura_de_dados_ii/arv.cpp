#include <iostream>
using namespace std;

typedef int Item;

typedef struct arvore{
    Item valor;
    struct arvore* sae;
    struct arvore* sad;
}*Arvore;

//funcao criar arvore

Arvore criar_arvore(Arvore esquerda,Item valor, Arvore direita){
    Arvore no = (struct arvore*)malloc(sizeof(struct arvore));
    no->valor = valor;
    no->sae = esquerda;
    no->sad = direita;
    return no;

}

//se esta vazia
int eh_vazia(Arvore arv){
        return arv == NULL;
}

//
void percorrerOrdem(Arvore no){
    if(!(eh_vazia(no))){
        percorrerOrdem(no->sae);
        cout << no->valor << ' ';
        percorrerOrdem(no->sad); 
    }

}

//percorrer pre-ordem
void percorrerPreOrdem(Arvore no){
    if(!(eh_vazia(no))){
        cout << no->valor << " ";
        percorrerPreOrdem(no->sae);
        percorrerPreOrdem(no->sad);
    }
}

void percorrerPosOrdem(Arvore no){
    if(!(eh_vazia(no))){
        percorrerPosOrdem(no->sae);
        percorrerPosOrdem(no->sad);
        cout << no->valor << ' ';
    }
}


//liberar nos
void destroi(Arvore *no){
    if(*no == NULL) return;
    destroi(&(*no)->sae);
    destroi(&(*no)->sad);
    free(*no);
    *no = NULL;
}

//insercao de busca binaria
void inserir(Item item,Arvore *arv){
    if(*arv == NULL) *arv = criar_arvore(NULL,item,NULL);
    else if(item <= (*arv)->valor) inserir(item,&(*arv)->sae);
    else inserir(item,&(*arv)->sad);
}

//busca binaria

int buscar(Item item,Arvore arv){
    if(arv == NULL) return 0;
    if(item == arv->valor) return 1;
    if(item <= arv->valor) return buscar(item,arv->sae);
    else return buscar(item,arv->sad);
}

//remocao

int remover(Arvore *arv){
    if(*arv == NULL) abort();
    while ((*arv)->sad != NULL) arv = &(*arv)->sad;
    Arvore n = *arv;
    int x = n->valor;
    *arv = n->sae;
    free(n);
    return x;
    
}

main(){

    Arvore arv = criar_arvore(criar_arvore(criar_arvore(NULL,
                                4,NULL), 
                            2, 
                            criar_arvore(NULL, 
                                5, 
                                NULL)), 
                        1, 
                        criar_arvore(NULL, 
                            3, 
                            criar_arvore(NULL, 
                                6, 
                                NULL)));

    // Arvore int4 = criar_arvore(NULL,4,NULL);
    // Arvore int3 = criar_arvore(NULL,3,NULL);
    // Arvore int2 = criar_arvore(int3,2,int4);
    // Arvore int1 = criar_arvore(NULL,1,int2);
    percorrerOrdem(arv);
    cout << '\n';
    percorrerPreOrdem(arv);
    cout << '\n';
    percorrerPosOrdem(arv);


    inserir(7,&arv);
    cout << '\n';
    percorrerOrdem(arv);
    cout << '\n';   
    cout << buscar(7,arv) << ' ';

    

}