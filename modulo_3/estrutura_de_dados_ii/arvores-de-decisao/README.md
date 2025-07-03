# 📊 Árvores de Decisão



## 🌳 O que são Árvores de Decisão no Contexto de Ordenação?

Qualquer **algoritmo de ordenação baseado em comparações** pode ser representado por uma árvore de decisão, na qual:

- **Nós internos (não terminais):** representam uma comparação entre dois elementos (ex.: `a < b?`).

- **Arcos (ramos):** representam os possíveis resultados da comparação (normalmente rotulados como **Sim/Não** ou **Verdadeiro/Falso**).

- **Folhas (nós terminais):** indicam uma das possíveis **ordenações finais** da matriz de entrada.

➡️ O **caminho** da raiz até uma folha corresponde à **sequência de comparações** realizadas para uma dada ordem inicial dos elementos.

> 📌 **Importante:** árvores de decisão **diferentes** precisam ser desenhadas para matrizes de **tamanhos diferentes**.

---

## 🧮 Número de Folhas e Permutações

Para uma matriz com **n elementos distintos**, existem exatamente **n! (n fatorial)** formas diferentes de ordená-los, ou seja, **n! permutações possíveis**.

Cada uma dessas ordenações deve ser representada por **pelo menos uma folha** na árvore de decisão.

### ❗️ Observações importantes:

- O número de folhas **nunca é menor que n!**, mas pode ser **maior**, devido a:

  - **Folhas de falha:** caminhos que levam a estados **impossíveis ou inconsistentes**, mas que ainda podem ser representados como folhas.

  - **Repetição de ordenações:** algumas permutações podem aparecer em **mais de uma folha**, dependendo da estrutura das comparações no algoritmo.

**Exemplos:**

- **Ordenação por inserção** de `[a, b, c]`, com `3! = 6` folhas (todas as permutações possíveis).

```
                      b < a
                    /       \
                 SIM         NAO
                /              \
             c < a              c < b
            /     \            /     \
            SIM    NAO        SIM      NAO
            /       \         /         \
        c < b     [b a c]    c < a    [a b c]
        /   \                /  \
       SIM   NAO           SIM   NAO
       /      \            /      \
     [c b a]  [b a c]   [c a b]   [a c b]
```

---

## 📏 Profundidade da Árvore e Número de Comparações

A profundidade de uma árvore de decisão está diretamente relacionada ao número de **comparações necessárias** para ordenar os elementos.

- O **caminho mais longo** da raiz até a folha mais distante (nível `i`) corresponde ao número **máximo de comparações** no **pior caso**.

Sabemos que: 

Uma árvore de i níveis possui no máximo 2^(i-1) folhas.

```
Como o número de folhas `m` deve ser pelo menos `n!`:
```

2^(i-1) ≥ n!

```
Isolando `i - 1`:
```

i - 1 ≥ log₂(n!)

```
Ou seja, o número mínimo de comparações no pior caso é: ⌈ log₂(n!) ⌉
```


Portanto, **O(n log n)** representa o **limite inferior teórico** para o número de comparações em **qualquer algoritmo de ordenação baseado em comparação**, seja no **caso médio** ou **pior caso**.

➡️ Assim, algoritmos, como a **ordenação por inserção**, que têm complexidade de **O(n²)** no caso médio e pior caso, são **menos eficientes** para grandes conjuntos de dados.

**Resumindo:**

- Se um jeito de ordenar faz perguntas perto desse número mágico nlgn, ele é um jeito "esperto" e rápido! 

- Se ele faz muito mais perguntas, tipo n 2, ele é mais lento, especialmente se você tiver muitas cartas para ordenar.

![Tabela sobre a eficiencia dos algoritmos](/96.jpg)

- Olhando para a tabela, imagina ordenar 100 cartas. O jeito "esperto" **O(n log n)** faria umas **664 perguntas**, mas os jeitos mais simples fariam umas 2.500 ou até 4.950 perguntas! É muita diferença!

---


## ✅ Conclusão

As **árvores de decisão** oferecem:

- Um **modelo visual** para entender o comportamento de algoritmos de ordenação.
- Uma base teórica para determinar o **número mínimo de comparações** necessárias.

**Resumo:**

- Estabelecem **O(n log n)** como um **marco de eficiência**.
- Demonstram os **limites e potencial** de diferentes algoritmos de ordenação.