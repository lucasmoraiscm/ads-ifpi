import { question } from 'readline-sync'

console.log('>>> Calcular a soma dos elementos que compõem um número <<<')
console.log('-----------------------------------------------------------')

// Entrada
const numero = Math.floor(Number(question('Número de 4 dígitos: ')))

// Processamento
const primeiro_elemento = Math.floor(numero / 1000)
var resto = numero % 1000
const segundo_elemento = Math.floor(resto / 100)
resto = resto % 100
const terceiro_elemento = Math.floor(resto / 10)
const quarto_elemento = resto % 10
const soma = primeiro_elemento + segundo_elemento + terceiro_elemento + quarto_elemento

// Saída
const resultado = `
-----------------------------------------------------------
${primeiro_elemento} + ${segundo_elemento} + ${terceiro_elemento} + ${quarto_elemento} = ${soma}
`
console.log(resultado)