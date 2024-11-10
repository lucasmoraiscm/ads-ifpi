# EXERCÍCIO 02
---
**1.** A diferença entre os tipos de tipagem está na forma como cada uma realiza a verificação dos tipos de dados das variáveis durante a execução. Na tipagem dinâmica, a verificação ocorre em tempo de execução, sendo o tipo da variável determinado pelo valor armazenado, podendo ser alterado ao longo da execução. Já na tipagem estática, a verificação ocorre em tempo de compilação, sendo o tipo da variável declarado explicitamente, não podendo ser alterado ao longo da execução.<br>

**2.** A maior suscetibilidade da variável apresentar erros quanto a seu tipo de dados durante a execução.<br>

**3.** Em alguns sistemas, especialmente em aplicações financeiras, um erro de tipo pode ter graves consequências. Por exemplo, em um sistema de pagamentos, valores financeiros devem ser tratados com precisão como números decimais, mas um valor mal interpretado como string pode levar a cálculos incorretos.<br>

**4.** Apesar de C ter tipagem estática, ela é considerada "fraca" porque permite conversões implícitas entre tipos e manipulação de dados de forma que pode ignorar a segurança de tipos. Um exemplo disso, em C é permitido realizar operações com ponteiros, incluindo conversões explícitas entre diferentes tipos de ponteiro e até a interpretação de ponteiros como inteiros e vice-versa. Essas situações podem levar a comportamentos inesperados e inseguranças, como acesso a locais de memória incorretos.<br>

**5.** Não. Em TypeScript, a tipagem é forte, pois o tipo number é estritamente definido e o sistema de tipos é rigoroso quanto a coerções de tipo.<br>
