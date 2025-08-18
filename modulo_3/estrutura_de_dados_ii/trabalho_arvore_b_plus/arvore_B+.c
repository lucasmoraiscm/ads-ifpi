#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// --- CONFIGURAÇÕES GLOBAIS ---

// Define a "ordem" da árvore. É como o "limite de capacidade" de um nó.
// Com T=3, um nó pode ter no máximo 5 chaves (2*T - 1).
#define T 3 
// Define o nome do arquivo que vai guardar os dados dos clientes.
#define ARQUIVO_CLIENTE "clientes.dat"
// Define o nome do arquivo que vai guardar a estrutura da árvore (o índice).
#define ARQUIVO_ARVOREB "arvore.idx"

// Define um tipo 'bool' para usar 'true' e 'false', o que deixa o código mais legível.
typedef enum { false, true } bool;


// --- ESTRUTURAS DE DADOS ---

// Molde para um registro de Cliente. É assim que guardamos os dados de cada cliente.
typedef struct {
    int codigo;      // A chave principal, o "CPF" do nosso cliente.
    char nome[50];   // O nome do cliente.
} Cliente;

// Molde para um "nó" da nossa Árvore B+. Cada caixinha da árvore segue este modelo.
typedef struct {
    int num_chaves;           // Quantas chaves estão atualmente ocupadas neste nó.
    int chaves[2 * T - 1];    // Onde guardamos os códigos dos clientes.
    long int filhos[2 * T];   // "Ponteiros" que apontam para outros nós ou para os dados.
    bool eh_folha;            // Um marcador que diz: "Este nó é uma folha (base da árvore)?"
    long int prox_irmao;      // Se for uma folha, aponta para a próxima folha na sequência.
} NoArvoreB;


// --- PROTÓTIPOS DAS FUNÇÕES  ---

void inicializar_arvore();
long escrever_cliente(Cliente* cliente);
Cliente ler_cliente(long rrn);
void escrever_no_arvore(NoArvoreB* no, long rrn);
NoArvoreB ler_no_arvore(long rrn);
long pegar_raiz_rrn();
long pegar_novo_no_rrn();
long buscar_cliente_rrn(int chave);
long buscar_recursivo(long no_rrn, int chave);
void inserir_cliente(Cliente c);
void inserir(int chave, long cliente_rrn);
void dividir_filho(long rrn_pai, int indice_filho_cheio);
void inserir_em_no_nao_cheio(long rrn_no, int chave, long rrn_associado);
void listar_em_ordem();
void imprimir_arvore_detalhada();
void imprimir_no_recursivo(long rrn_no, int nivel);


// --- FUNÇÕES DE "INFRAESTRUTURA" ---

void inicializar_arvore() {
    FILE *arquivo_idx = fopen(ARQUIVO_ARVOREB, "rb"); // Tenta abrir o arquivo da árvore.
    if (arquivo_idx == NULL) { // Se não conseguiu (porque não existe)...
        // Cria o primeiro nó, a raiz, que começa vazia e como uma folha.
        NoArvoreB raiz;
        raiz.num_chaves = 0;
        raiz.eh_folha = true;
        raiz.prox_irmao = -1; // -1 significa que não tem irmão.
        
        // Escreve essa raiz inicial no arquivo.
        escrever_no_arvore(&raiz, 0);
    } else { // Se o arquivo já existia, tudo certo.
        fclose(arquivo_idx);
    }
}


long escrever_cliente(Cliente* cliente) {
    FILE *arquivo = fopen(ARQUIVO_CLIENTE, "ab"); // "ab" = Append Binary (adicionar no fim).
    fseek(arquivo, 0, SEEK_END); // Pula para o final do arquivo.
    long posicao_bytes = ftell(arquivo); // Pega a posição atual (tamanho do arquivo).
    
    fwrite(cliente, sizeof(Cliente), 1, arquivo); // Escreve os dados do cliente.
    fclose(arquivo);
    
    // Calcula o RRN: a posição em bytes dividida pelo tamanho de um cliente.
    return posicao_bytes / sizeof(Cliente);
}


Cliente ler_cliente(long rrn) {
    FILE *arquivo = fopen(ARQUIVO_CLIENTE, "rb"); // "rb" = Read Binary (ler).
    // Pula diretamente para a posição do cliente, sem ler o arquivo todo. É a mágica do RRN!
    fseek(arquivo, rrn * sizeof(Cliente), SEEK_SET);

    Cliente client;
    fread(&client, sizeof(Cliente), 1, arquivo); // Lê os dados daquela posição.
    fclose(arquivo);
    return client;
}

void escrever_no_arvore(NoArvoreB* no, long rrn) {
    // "rb+" = Read/Write Binary. Permite ler e escrever no mesmo arquivo sem apagá-lo.
    FILE *arquivo = fopen(ARQUIVO_ARVOREB, "rb+"); 
    if (arquivo == NULL) { // Se falhar (não existe), cria com "wb".
        arquivo = fopen(ARQUIVO_ARVOREB, "wb");
    }
    
    fseek(arquivo, rrn * sizeof(NoArvoreB), SEEK_SET); // Pula para a posição do nó.
    fwrite(no, sizeof(NoArvoreB), 1, arquivo); // Escreve o nó lá.
    fclose(arquivo);
}

NoArvoreB ler_no_arvore(long rrn) {
    FILE *arquivo = fopen(ARQUIVO_ARVOREB, "rb");
    fseek(arquivo, rrn * sizeof(NoArvoreB), SEEK_SET); // Pula para a posição do nó.
    
    NoArvoreB no;
    fread(&no, sizeof(NoArvoreB), 1, arquivo); // Lê o nó daquela posição.
    fclose(arquivo);
    return no;
}

long pegar_novo_no_rrn() {
    FILE *arquivo = fopen(ARQUIVO_ARVOREB, "rb");
    if (!arquivo) return 1; // Se o arquivo não existe, o primeiro RRN livre é 1 (0 é a raiz).

    fseek(arquivo, 0, SEEK_END); // Pula para o fim do arquivo.
    long pos_bytes = ftell(arquivo); // Pega o tamanho total.
    fclose(arquivo);
    
    // Calcula o RRN.
    return pos_bytes / sizeof(NoArvoreB);
}


// --- FUNÇÕES DE BUSCA ---

long buscar_cliente_rrn(int chave) {
    long raiz_rrn = 0; // A gente sabe que a raiz está sempre na posição 0.
    return buscar_recursivo(raiz_rrn, chave);
}

long buscar_recursivo(long no_rrn, int chave) {
    NoArvoreB no = ler_no_arvore(no_rrn);

    // Encontra o caminho certo a seguir dentro do nó.
    int i = 0;
    while (i < no.num_chaves && chave > no.chaves[i]) {
        i++;
    }

    if (no.eh_folha) { // Se chegamos a uma folha...
        if (no.eh_folha) {
            // Percorre linearmente as chaves da folha para encontrar a chave exata.
            for (int j = 0; j < no.num_chaves; j++) {
                if (no.chaves[j] == chave) {
                    return no.filhos[j]; // Retorna o RRN do cliente.
                }
            }
            return -1; // Chave não encontrada na folha.
        }
    } else { // Se não é folha, continua descendo pela árvore.
        return buscar_recursivo(no.filhos[i], chave);
    }
}


// --- FUNÇÕES DE INSERÇÃO ---

void inserir_cliente(Cliente c) {
    // 1. Salva o cliente no arquivo de dados e pega seu RRN.
    long cliente_rrn = escrever_cliente(&c);
    // 2. Chama a função que vai inserir a chave e o RRN na árvore.
    inserir(c.codigo, cliente_rrn);
}

void inserir(int chave, long cliente_rrn) {
    long rrn_raiz = 0;
    NoArvoreB raiz = ler_no_arvore(rrn_raiz);

    // Se a raiz está lotada, a árvore precisa crescer em altura.
    if (raiz.num_chaves == 2 * T - 1) {
        // A raiz atual (que está lotada) vai ser dividida em duas.
        // Precisamos de uma NOVA raiz acima dela.

        // 1. Cria o novo nó que será a nova raiz.
        NoArvoreB nova_raiz;
        nova_raiz.eh_folha = false; // A nova raiz nunca é uma folha.
        nova_raiz.num_chaves = 1; // Terá uma chave (a que foi promovida).

        // 2. Cria um novo nó para ser o "irmão direito" da divisão.
        NoArvoreB novo_irmao;
        novo_irmao.eh_folha = raiz.eh_folha; // Ambos os filhos terão o mesmo status de folha.
        novo_irmao.num_chaves = T - 1;
        long rrn_novo_irmao = pegar_novo_no_rrn(); // Pega um RRN livre para o novo irmão.

        // 3. Divide a raiz cheia em duas folhas (ou dois filhos), redistribuindo as chaves
        int total_chaves = raiz.num_chaves;
        int metade = total_chaves / 2;

        novo_irmao.num_chaves = total_chaves - metade;
        raiz.num_chaves = metade;

        for (int j = 0; j < novo_irmao.num_chaves; j++) {
            novo_irmao.chaves[j] = raiz.chaves[metade + j];
            novo_irmao.filhos[j] = raiz.filhos[metade + j];
        }

        if (raiz.eh_folha) {
            // Atualiza o encadeamento entre folhas
            novo_irmao.prox_irmao = raiz.prox_irmao;
            raiz.prox_irmao = rrn_novo_irmao;
        } else {
            // Se não for folha, também copia os ponteiros extras dos filhos
            for (int j = 0; j <= novo_irmao.num_chaves; j++) {
                novo_irmao.filhos[j] = raiz.filhos[metade + j];
            }
        }

        // 4. Define a chave-guia que será promovida à nova raiz (menor do novo irmão)
        nova_raiz.chaves[0] = novo_irmao.chaves[0];

        // 5. Copia os RRNs correspondentes (seja para dados ou para outros nós).
        if (raiz.eh_folha) {
            for (int j = 0; j < T; j++) {
                novo_irmao.filhos[j] = raiz.filhos[j + T];
            }
            // Atualiza a corrente de folhas
            novo_irmao.prox_irmao = raiz.prox_irmao;
            raiz.prox_irmao = rrn_novo_irmao;
        } else {
            for (int j = 0; j < T; j++) {
                novo_irmao.filhos[j] = raiz.filhos[j + T];
            }
        }
        
        // 6. Atualiza a raiz antiga para conter apenas a primeira metade das chaves.
        raiz.num_chaves = T - 1;
        
        // 7. A raiz antiga será movida para uma nova posição para dar lugar à nova raiz em RRN 0.
        long rrn_raiz_antiga_movida = pegar_novo_no_rrn();
        if (rrn_raiz_antiga_movida == rrn_novo_irmao) { // Garante que não peguemos o mesmo RRN
            rrn_raiz_antiga_movida++;
        }
        
        // 8. Define os filhos da nova raiz.
        nova_raiz.filhos[0] = rrn_raiz_antiga_movida;
        nova_raiz.filhos[1] = rrn_novo_irmao;

        // 9. Salva tudo no disco.
        escrever_no_arvore(&raiz, rrn_raiz_antiga_movida); // Salva a raiz antiga (agora filho esquerdo) em seu novo local.
        escrever_no_arvore(&novo_irmao, rrn_novo_irmao);   // Salva o novo irmão.
        escrever_no_arvore(&nova_raiz, rrn_raiz);         // Salva a nova raiz na posição 0.

        // 10. Agora, com a árvore reestruturada, insere a chave original no lugar certo.
        inserir_em_no_nao_cheio(rrn_raiz, chave, cliente_rrn);

    } else { 
        // Se a raiz tem espaço, o caminho é simples.
        inserir_em_no_nao_cheio(rrn_raiz, chave, cliente_rrn);
    }
}

void inserir_em_no_nao_cheio(long rrn_no, int chave, long rrn_associado) {
    NoArvoreB no = ler_no_arvore(rrn_no);

    if (no.eh_folha) { // Se chegamos na folha...
        // "Abre espaço" empurrando as chaves maiores para a direita.
        int i = no.num_chaves - 1;
        while (i >= 0 && chave < no.chaves[i]) {
            no.chaves[i + 1] = no.chaves[i];
            no.filhos[i + 1] = no.filhos[i];
            i--;
        }
        // Encaixa a nova chave no lugar vago.
        no.chaves[i + 1] = chave;
        no.filhos[i + 1] = rrn_associado;
        no.num_chaves++;
        escrever_no_arvore(&no, rrn_no);
    } else { // Se não é folha, decide para qual filho descer.
        int i = no.num_chaves - 1;
        while (i >= 0 && chave < no.chaves[i]) {
            i--;
        }
        i++;
        
        // Antes de descer, verifica se o filho está lotado.
        NoArvoreB filho = ler_no_arvore(no.filhos[i]);
        if (filho.num_chaves == 2 * T - 1) {
            dividir_filho(rrn_no, i); // Se estiver, divide ele PRIMEIRO.
            no = ler_no_arvore(rrn_no); // Recarrega o pai, que mudou.
            if (chave >= no.chaves[i]) { // Reavalia o caminho.
                i++;
            }
        }
        // Agora, desce com a certeza de que o próximo nó terá espaço.
        inserir_em_no_nao_cheio(no.filhos[i], chave, rrn_associado);
    }
}

void dividir_filho(long rrn_pai, int indice_filho_cheio) {
    // Carrega o pai e o filho que será dividido
    NoArvoreB pai = ler_no_arvore(rrn_pai);
    long rrn_filho_cheio = pai.filhos[indice_filho_cheio];
    NoArvoreB filho_cheio = ler_no_arvore(rrn_filho_cheio);

    // Cria o novo nó irmão
    NoArvoreB novo_irmao;
    novo_irmao.eh_folha = filho_cheio.eh_folha;
    novo_irmao.prox_irmao = -1;
    long rrn_novo_irmao = pegar_novo_no_rrn();

    int total_chaves = filho_cheio.num_chaves;
    int metade = total_chaves / 2;

    // Copia metade das chaves e filhos para o novo irmão
    novo_irmao.num_chaves = total_chaves - metade;
    for (int j = 0; j < novo_irmao.num_chaves; j++) {
        novo_irmao.chaves[j] = filho_cheio.chaves[metade + j];
        novo_irmao.filhos[j] = filho_cheio.filhos[metade + j];
    }

    // Atualiza o número de chaves no filho original (metade)
    filho_cheio.num_chaves = metade;

    // Se for folha, atualiza o encadeamento entre as folhas
    if (filho_cheio.eh_folha) {
        novo_irmao.prox_irmao = filho_cheio.prox_irmao;
        filho_cheio.prox_irmao = rrn_novo_irmao;
    }

    // Move as chaves e filhos no pai para abrir espaço
    for (int j = pai.num_chaves; j > indice_filho_cheio; j--) {
        pai.chaves[j] = pai.chaves[j - 1];
        pai.filhos[j + 1] = pai.filhos[j];
    }

    // Insere a menor chave do novo irmão no pai (como guia)
    pai.chaves[indice_filho_cheio] = novo_irmao.chaves[0];
    pai.filhos[indice_filho_cheio + 1] = rrn_novo_irmao;
    pai.num_chaves++;

    // Salva as alterações no disco
    escrever_no_arvore(&filho_cheio, rrn_filho_cheio);
    escrever_no_arvore(&novo_irmao, rrn_novo_irmao);
    escrever_no_arvore(&pai, rrn_pai);
}

// --- FUNÇÕES DE EXIBIÇÃO ---

void listar_em_ordem() {
    printf("\n--- Listagem de Clentes em Ordem ---\n");
    long rrn_no = 0;
    NoArvoreB no = ler_no_arvore(rrn_no);

    // 1. Desce até a primeira folha (a mais à esquerda).
    while (!no.eh_folha) {
        rrn_no = no.filhos[0];
        no = ler_no_arvore(rrn_no);
    }

    // 2. Percorre a "corrente" de folhas usando o ponteiro 'prox_irmao'.
    while (rrn_no != -1) {
        for (int i = 0; i < no.num_chaves; i++) {
            Cliente client = ler_cliente(no.filhos[i]);
            printf("  Codigo: %d | Nome: %s\n", client.codigo, client.nome);
        }
        rrn_no = no.prox_irmao; // Pula para a próxima folha.
        if (rrn_no != -1) {
            no = ler_no_arvore(rrn_no);
        }
    }
    printf("--- Fim da Listagem ---\n");
}

void imprimir_arvore_detalhada() {
    printf("\n--- ESTRUTURA ATUAL DA ARVORE B+ ---\n");
    imprimir_no_recursivo(0, 0); // Começa a impressão pela raiz (RRN 0, nível 0).
    printf("-------------------------------------\n");
}

void imprimir_no_recursivo(long rrn_no, int nivel) {
    if (rrn_no == -1) return;
    NoArvoreB no = ler_no_arvore(rrn_no);

    // Imprime espaços para criar um efeito de "árvore" (indentação).
    for (int i = 0; i < nivel; i++) { printf("  "); }

    // Imprime os dados do nó atual.
    printf("No (RRN %ld) [Lvl:%d] %s: Chaves(%d) = {", rrn_no, nivel, no.eh_folha ? "FOLHA" : "INTERNO", no.num_chaves);
    for (int i = 0; i < no.num_chaves; i++) {
        printf("%d%s", no.chaves[i], (i == no.num_chaves - 1) ? "" : ", ");
    }
    printf("}\n");

    // Se não for folha, chama a si mesma para imprimir os filhos.
    if (!no.eh_folha) {
        for (int i = 0; i <= no.num_chaves; i++) {
            imprimir_no_recursivo(no.filhos[i], nivel + 1);
        }
    }
}


// --- FUNÇÃO PRINCIPAL  ---

int main() {
    inicializar_arvore(); // Prepara os arquivos antes de começar.
    int opcao = -1;

    while (opcao != 0) {
        printf("\n--- SISTEMA DE CLIENTES COM ARVORE B+ ---\n");
        printf("1. Inserir Cliente\n");
        printf("2. Buscar Cliente por Codigo\n");
        printf("3. Listar Clientes em Ordem\n");
        printf("4. Imprimir Estrutura da Arvore\n");
        printf("0. Sair\n");
        printf("Escolha uma opcao: ");
        scanf("%d", &opcao);

        switch (opcao) {
            case 1: { 
                Cliente c;
                printf("\nDigite o codigo do cliente: ");
                scanf("%d", &c.codigo);
                printf("Digite o nome do cliente: ");
                while(getchar() != '\n'); // Limpa o buffer do teclado.
                fgets(c.nome, sizeof(c.nome), stdin);
                c.nome[strcspn(c.nome, "\n")] = 0; // Remove o '\n' do final do nome.
                
                if (buscar_cliente_rrn(c.codigo) != -1) {
                    printf("\nERRO: Codigo de cliente ja existente!\n");
                } else {
                    inserir_cliente(c);
                    printf("\nCliente inserido com sucesso!\n");
                }
                break;
            }
            case 2: { 
                int codigo_busca;
                printf("\nDigite o código a ser buscado: ");
                scanf("%d", &codigo_busca);
                long rrn = buscar_cliente_rrn(codigo_busca);
                if (rrn != -1) {
                    Cliente c = ler_cliente(rrn);
                    printf("\nCliente encontrado!\n");
                    printf("  Codigo: %d | Nome: %s\n", c.codigo, c.nome);
                } else {
                    printf("\nCliente com codigo %d nao encontrado.\n", codigo_busca);
                }
                break;
            }
            case 3: 
                listar_em_ordem();
                break;
            case 4: 
                imprimir_arvore_detalhada();
                break;
            case 0: 
                printf("\nSaindo...\n");
                break;
            default: 
                printf("\nOpção invalida!\n");
                break;
        }
    }
    return 0;
}