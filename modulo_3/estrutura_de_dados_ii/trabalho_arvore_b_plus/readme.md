# Sistema de Clientes com Árvore B+

---

## Conceitos Fundamentais

### Arquivo de Dados (`clientes.dat`)

* Armazena registros binários com `struct Cliente`.
* Cada cliente ocupa uma posição identificada por RRN (Relative Record Number).

### O que é RRN?

* É o "índice lógico" do cliente no arquivo.
* Exemplo: cliente no RRN 3 está em `3 * sizeof(Cliente)` bytes a partir do início do arquivo.
* Usado com `fseek()` para acesso direto e eficiente.

### O que é uma Árvore B+?

* Uma estrutura balanceada de indexação ideal para arquivos em disco.
* Os dados reais (RRNs) estão **somente nos nós folha**.
* Os nós internos contêm apenas chaves para navegação.
* As folhas estão encadeadas, facilitando a ordenação.

---

## Conceitos Fundamentais com analogias

Para entender o projeto, três conceitos são essenciais: Arquivos Binários, o RRN e as Árvores B/B+.

### 1. O "Depósito" - Arquivos Binários e Registros de Tamanho Fixo

Pense no nosso arquivo `clientes.dat` como um grande depósito.

-   **O que ele guarda?** Ele não guarda texto simples, mas sim "blocos" de dados brutos e perfeitamente medidos. Cada bloco é uma `struct Cliente`, que tem um tamanho fixo em bytes.
-  **Acesso Lento:** Se quiséssemos encontrar um cliente, o jeito mais simples seria olhar bloco por bloco, desde o início do arquivo, até encontrar o cliente desejado. Para um arquivo com milhões de registros, isso seria inviável.

### 2. O "Endereço" - RRN (Relative Record Number)

Para resolver o problema do acesso lento, criamos um sistema de "endereçamento" para cada registro. Esse é o papel do RRN.

-   **O que é?** O RRN é o número da posição lógica de um registro. O primeiro registro é o 0, o segundo é o 1, e assim por diante.
-  **Acesso Direto:** Como cada registro de `Cliente` tem o mesmo tamanho, podemos calcular a posição exata (em bytes) de qualquer registro usando a fórmula: `posicao_em_bytes = rrn * sizeof(Cliente)`.
-  **A Mágica do `fseek`:** Com esse endereço, usamos a função `fseek` da linguagem C para pular o cursor de leitura diretamente para o registro desejado, sem precisar ler o que vem antes. Isso transforma uma busca que levaria minutos em uma que leva milissegundos.
-  **Vantagens:** Essa abordagem é eficiente (acesso direto), simples (o índice só guarda números inteiros) e portável (os endereços não quebram se o arquivo for movido).

### 3. O "Catálogo Inteligente" - Árvores B e B+

Agora que temos endereços (RRNs), como sabemos qual é o RRN de um cliente a partir de seu código? Precisamos de um catálogo, um índice. É aqui que entram as Árvores B e B+.

-   **O que são?** São estruturas de dados em árvore projetadas especificamente para serem eficientes quando os dados estão em disco. Elas são sempre balanceadas, o que garante que o tempo de busca seja sempre curto e previsível.

-   **A Diferença Crucial (B vs. B+):**
    -  **Árvore B:** Pode armazenar os "endereços" (RRNs) tanto nos nós internos (galhos) quanto nos nós folha.
    -   **Árvore B+ (nossa implementação):** É mais especializada. Os "endereços" (RRNs) que apontam para os dados reais no arquivo `clientes.dat` estão **exclusivamente nos nós folha**. Os nós internos servem apenas como um mapa, contendo chaves que nos guiam para o caminho certo.

-  **Vantagem da Árvore B+:** Todos os nós folha são ligados entre si, formando uma lista encadeada. Isso torna a operação de **busca ordenada** (listar todos os clientes em ordem de código) extremamente rápida. Uma vez que encontramos a primeira folha, simplesmente seguimos essa "corrente" de folhas até o final, sem precisar subir e descer pela árvore novamente.

## Fluxo de Inserção de Clientes na Árvore B+
A seguir, apresentamos o fluxo de inserção de novos clientes na Árvore B+ e suas respectivas divisões. 
```
+---------------------------------------------+
| Início: Inserir novo Cliente(código, nome)  |
+---------------------------------------------+
                     |
                     v
+---------------------------------------------+
| 1. Grava o registro completo do Cliente     |
|    no arquivo `clientes.dat` e obtém seu RRN. |
|    [Função: escrever_cliente]                 |
+---------------------------------------------+
                     |
                     v
+---------------------------------------------+
| 2. Inicia a busca pelo local de inserção    |
|    a partir do NÓ RAIZ da Árvore B+.        |
|    [Função: inserir]                        |
+---------------------------------------------+
                     |
                     v
+---------------------------------------------+
| Laço de Descida:                            |
| O nó atual é uma FOLHA?                     |
+---------------------+-----------------------+
           | (NÃO)                             | (SIM)
           v                                   v
+-----------------------------+      +---------------------------+
| É um NÓ INTERNO.            |      | É uma FOLHA.              |
| Encontra o filho correto    |      | O nó tem espaço?          |
| para onde descer.           |      +-------------+-------------+
|                             |           | (SIM)                  | (NÃO)
| ANTES de descer, verifica:  |           v                        v
| O nó filho está CHEIO?      | +-------------------+    +----------------------------+
+-------------+-------------+ | Inserir a chave e |    | NÓ ESTOUROU!               |
    | (SIM)         | (NÃO)   | o RRN na folha.   |    | A folha precisa ser dividida.|
    v               v         | FIM.              |    | [Função: dividir_filho]    |
+-----------+ +-----------+   +-------------------+    +----------------------------+
| Dividir o | | Descer    |                                          |
| filho     | | para o    |                                          v
| PRIMEIRO. | | filho.    |                       +----------------------------------+
| Promover  | | Volta ao  |                       | 1. Chave do meio é PROMOVIDA.    |
| chave p/  | | Laço de   |                       | 2. Metade dir. vai p/ NÓVO IRMÃO.|
| o pai.    | | Descida.  |                       | 3. Inserir a chave promovida no  |
+-----------+ +-----------+                       |    nó PAI (pode causar mais     |
                                                  |    divisões). FIM.               |
                                                  +----------------------------------+
```

---

## Exemplo Guiado da `main()` (Exemplo)

### Parte 1: Inserção e Crescimento da Árvore

1. Inserir Cliente código **10** (Natiele):

```text
> A árvore contém: {10} na raiz (folha)
```

2. Inserir Clientes **20, 50, 60, 40**:

```text
> A folha (raiz) chega a capacidade máxima:
> Chaves = {10, 20, 40, 50, 60}
```

### Parte 2: Divisão de Nó

3. Inserir Cliente código **30** (Lincoln):

```text
> Como a folha está cheia:
  - A chave do meio (40) é promovida para nova raiz
  - Duas folhas são formadas:
    {10, 20, 30}   ← RRN 2
    {40, 50, 60}   ← RRN 1
  - Estrutura final:

--- ESTRUTURA ATUAL DA ÁRVORE B+ ---
Nó (RRN 0) [Lvl:0] INTERNO: Chaves(1) = {40}
  Nó (RRN 2) [Lvl:1] FOLHA: Chaves(3) = {10, 20, 30}
  Nó (RRN 1) [Lvl:1] FOLHA: Chaves(3) = {40, 50, 60}
-------------------------------------
```

### Parte 3: Busca por Código

4. Buscar código **60**:

```text
> Inicia na raiz → 60 > 40 → vai para o filho direito
> Encontra 60 diretamente na folha
> Exibe cliente: Código: 60 | Nome: Thalisson
```

### Parte 4: Busca Ordenada

5. Listar todos os clientes:

```text
> Percorre folhas encadeadas:
> Imprime em ordem: 10, 20, 30, 40, 50, 60
```

### Fluxo da listagem ordenada:

```text
1. Desce até a folha mais à esquerda
2. Para cada folha:
   - Lê os RRNs
   - Exibe os dados
   - Vai para a próxima folha via prox_irmao
```

---

## Arquivos Utilizados

* `clientes.dat`: armazena os registros reais dos clientes
* `arvore.idx`: armazena a estrutura da árvore B+
