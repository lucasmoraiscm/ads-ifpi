import { question } from 'readline-sync'

console.log('>>> Calcular 70% de um valor (R$) <<<')
console.log('-------------------------------------')

// Entrada
const valor_reais = Number(question('Valor (R$): '))

// Processamento
const porcentagem_valor = valor_reais * 0.7

// Saída
const resultado = `
-------------------------------------
70% de R$ ${valor_reais.toFixed(2)} é igual a R$ ${porcentagem_valor.toFixed(2)}
`
console.log(resultado)
