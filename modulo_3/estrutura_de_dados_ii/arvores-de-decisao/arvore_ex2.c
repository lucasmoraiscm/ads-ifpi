#include <stdio.h>

#define tamanho 3

// Vetor com as tarefas (ou elementos) a serem ordenados
char tarefas[tamanho] = {'A','B','C'};

// Vetor que irá armazenar a ordem do melhor caminho encontrado
int melhorCaminho[tamanho];

// Variável para guardar o menor custo encontrado entre todas as permutações
int menorCusto = 999;

// Matriz de custos de troca entre as tarefas
// Exemplo: custoTroca[0][1] é o custo de ir de 'A' para 'B'
int custoTroca[tamanho][tamanho] = 
    {       /* A   B   C*/  
      /*A*/  { 0 , 2 , 4 },
      /*B*/  { 2 , 0 , 1 },
      /*C*/  { 4 , 1 , 0 }
    };

// Função que avalia o custo de um caminho (ordem das tarefas)
// Imprime o caminho e seu custo, e atualiza o melhor caminho se necessário
int avaliarCaminho(int caminho[])
{   
    int custo = 0;

    // Soma os custos de trocar de uma tarefa para a próxima na ordem
    for (int i = 0; i < tamanho - 1; i++)
    {
        custo += custoTroca[caminho[i]][caminho[i + 1]];
    }

    // Imprime o caminho atual e seu custo
    printf("Caminho: ");
    for (int i = 0; i < tamanho; i++)
    {
        printf("%c ",tarefas[caminho[i]]);
    }

    printf("/ Custo foi: %d\n",custo);
    
    // Se o custo atual for menor que o menor já encontrado, atualiza o melhor caminho
    if(custo < menorCusto)
    {
        menorCusto = custo;
        for (int i = 0; i < tamanho; i++)
        {
            melhorCaminho[i] = caminho[i];
        }
        
    }
}

// Função recursiva para gerar todas as permutações possíveis do vetor de tarefas
// Para cada permutação, chama avaliarCaminho para calcular o custo
void permutar(int vetor[], int inicio)
{
    // Caso base: chegou ao final de uma permutação, avalia o caminho
    if(inicio == tamanho - 1)
    {
        avaliarCaminho(vetor);
        return;
    }

    // Gera permutações trocando elementos de posição
    for (int i = inicio; i < tamanho; i++)
    {
        // Troca os elementos
        int temp = vetor[inicio];
        vetor[inicio] = vetor[i];
        vetor[i] = temp;

        // Chama recursivamente para o próximo elemento
        permutar(vetor,inicio + 1);

        // Desfaz a troca para voltar ao estado anterior
        temp = vetor[inicio];
        vetor[inicio] = vetor[i];
        vetor[i] = temp;
    }
    
}

int main()
{
    int caminho[tamanho];

    // Inicializa o vetor caminho com os índices das tarefas
    for (int i = 0; i < tamanho; i++)
    {   
        caminho[i] = i;
    }
    
    // Gera todas as ordens possíveis e verifica qual tem menor custo
    // (simulação da árvore de decisão para encontrar o melhor caminho)
    permutar(caminho,0);

    // Imprime o melhor caminho encontrado e seu custo
    printf("Melhor caminho: ");
    for (int i = 0; i < tamanho; i++)
    {
        printf("%c ", tarefas[melhorCaminho[i]]);
    }
    printf("/ Menor custo foi: %d",menorCusto);
    

    return 0;
}