import { question } from 'readline-sync'

console.log('>>> Aumento de salário <<<')
console.log('--------------------------')

// Entrada
const salario_atual = Number(question('Salário atual: '))

// Processamento
const aumento = salario_atual * 0.25
const novo_salario = salario_atual + aumento

// Saída
const resultado = `
--------------------------
Parabéns! Você recebeu um aumento de salário!
O valor do seu novo salário é ${novo_salario.toFixed(2)}R$
`
console.log(resultado)