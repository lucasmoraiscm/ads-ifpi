#define fmt "%d"
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <iostream>
using namespace std;

typedef int Item;

typedef struct arv {
	struct arv *esq;
	Item item;
	struct arv *dir;
}*Arv;

Arv arv(Arv e, Item x, Arv d){
	Arv n = (struct arv*)malloc(sizeof(struct arv));
	n->esq=e;
	n->item=x;
	n->dir=d;
	return n;	
}

// raiz -esquerda -direita
void percorre(Arv A){
	if (A==NULL) return;
	cout<<A->item<<" ";
	percorre(A->esq);
	percorre(A->dir);	
}

main(){
    Arv n12 = arv(NULL,12,NULL);
    Arv n29 = arv(NULL,29,NULL);
    Arv n20 = arv(n12,20,n29);
    percorre(n20);
	
}

