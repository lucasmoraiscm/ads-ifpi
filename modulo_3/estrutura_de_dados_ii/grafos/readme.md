# Representação e Busca em Grafos (Q15.1, Q15.3, Q15.4)

## Introdução: O que é um grafo?

Um **grafo** é uma estrutura de dados usada para representar relações entre elementos. Ele é composto por:

* **Vértices (ou nós)**: os pontos (ex: cidades, usuários, páginas)
* **Arestas (ou ligações)**: as conexões entre os vértices (ex: estradas, amizades, links)

### Tipos de grafos:

* **Direcionado**: as arestas têm direção (ex: 0 → 1)
* **Não direcionado**: as arestas não têm direção (ex: 0 — 1)
* **Ponderado**: as arestas têm peso (ex: custo, tempo)
* **Não ponderado**: sem pesos

---

## Q15.1 — Representação de Grafo com Lista de Adjacência

### Objetivo:

Exibir um grafo representado por listas de adjacência.

### Código:

```c
Lista Adj[6] = {
    /* 0 */ no(1, no(2, no(3, NULL))),
    /* 1 */ no(0, no(3, NULL)),
    /* 2 */ no(0, no(3, no(4, NULL))),
    /* 3 */ no(1, no(2, no(5, NULL))),
    /* 4 */ NULL,
    /* 5 */ no(3, no(4, NULL))
};
```

### Saída esperada:

```
Vertice 0 -> 1 2 3
Vertice 1 -> 0 3
Vertice 2 -> 0 3 4
Vertice 3 -> 1 2 5
Vertice 4 -> Beco
Vertice 5 -> 3 4
```

### Fluxograma:

```text
+-----------------------------+
|     Início do Programa     |
+-------------+--------------+
              |
              v
+-----------------------------+
| Cria vetor Adj[6] com Listas|
+-------------+--------------+
              |
              v
+-----------------------------+
|  Para cada vértice i:       |
|    - Mostra "Vertice i ->"  |
|    - Percorre Adj[i]        |
|    - Imprime vizinhos       |
+-------------+--------------+
              |
              v
+-----------------------------+
|     Libera memória          |
+-------------+--------------+
              |
              v
+-----------------------------+
|           FIM               |
+-----------------------------+
```

---

## Q15.3 — BFS (Busca em Largura)

### Objetivo:

Encontrar **todos os caminhos de 0 a 5** com busca em **largura**.

### Fluxo resumido:

```text
Fila ← [0]
Enquanto a fila não está vazia:
    - Remove caminho c
    - Se c termina em w → imprime
    - Senão → adiciona vizinhos ainda não visitados
```

### Fluxograma BFS:

```text
+-----------------------------+
| inicializa Fila            |
| enfileira [0]              |
+-------------+--------------+
              |
              v
+-----------------------------------------+
| Enquanto Fila não está vazia:           |
|    - desenfileira caminho c             |
|    - se c termina em w:                 |
|         → exibe o caminho               |
|    - senão:                             |
|         → para cada vizinho s de c:     |
|             se s não pertence a c:      |
|                enfileira s + clone(c)   |
+-----------------------------------------+
```

---

## Q15.4 — DFS (Busca em Profundidade)

### Objetivo:

Encontrar **todos os caminhos de 0 a 4** com busca em **profundidade**.

### Fluxo resumido:

```text
Pilha ← [0]
Enquanto a pilha não está vazia:
    - Remove caminho c
    - Se c termina em w → imprime
    - Senão → adiciona vizinhos ainda não visitados
```

### Fluxograma DFS:

```text
+-----------------------------+
| inicializa Pilha           |
| empilha [0]                |
+-------------+--------------+
              |
              v
+-----------------------------------------+
| Enquanto Pilha não está vazia:          |
|    - desempilha caminho c               |
|    - se c termina em w:                 |
|         → exibe o caminho               |
|    - senão:                             |
|         → para cada vizinho s de c:     |
|             se s não pertence a c:      |
|                empilha s + clone(c)     |
+-----------------------------------------+
```

---

## Comparativo Visual: BFS vs DFS no mesmo grafo

### Grafo exemplo:
```c
Lista Adj[6] = {
    /* 0 */ no(1, no(2, no(3, NULL))),
    /* 1 */ no(0, no(3, NULL)),
    /* 2 */ no(0, no(3, no(4, NULL))),
    /* 3 */ no(1, no(2, no(5, NULL))),
    /* 4 */ NULL,
    /* 5 */ no(3, no(4, NULL))
};
int n = 6;
```

### BFS — Amplitude (com Fila)

```text
Fila inicial: [ [0] ]
↓
[0] → filhos: [1], [2], [3]
Fila: [0→1], [0→2], [0→3]
↓
[0→1] → filhos: [0], [3]
Fila: [0→2], [0→3], [0→1→3]
↓
[0→2] → filhos: [0], [3], [4]
Fila: [0→3], [0→1→3], [0→2→4]
↓
[0→3] → filhos: [1], [2], [5]
Fila: [0→1→3], [0→2→4], [0→3→5]
↓
[0→3→5] → filhos: [3], [4] → ACHOU 5!
```

**Explora:** 0 → 1 → 2 → 3 → 4 → 5
**Primeiro Print do caminho até 5:** `0 → 3 → 5`

### DFS — Profundidade (com Pilha)

```text
Pilha inicial: [ [0] ]
↓
[0] → filhos: [1], [2], [3]
Pilha: [0→3], [0→2], [0→1]
↓
[0→1] → filhos: [0], [3]
↓
[0→1→3] → filhos: [1], [2], [5]
↓
[0→1→3→2] → filhos: [0], [3], [4] → ACHOU 4!
```

**Explora:** 0 → 1 → 3 → 2 → 4 → 5
**Primeiro Print do caminho até 4:** `0 → 1 → 3 → 2 → 4`

---

## Conclusão final

| Característica        | BFS (com Fila)            | DFS (com Pilha)            |
| --------------------- | ------------------------- | -------------------------- |
| Ordem de visita       | Amplitude (nível a nível) | Profundidade (um caminho)  |
| Garante menor caminho | Sim                       | Nem sempre                 |
| Estrutura usada       | Fila (FIFO)               | Pilha (LIFO)               |
| Útil para             | Encontrar caminhos curtos | Explorar todos os caminhos |
