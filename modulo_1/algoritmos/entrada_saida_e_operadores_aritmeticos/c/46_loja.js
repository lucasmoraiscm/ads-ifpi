import { question } from 'readline-sync'

console.log('>>> Sistema de entrada e prestações na venda de um produto <<<')
console.log('--------------------------------------------------------------')

// Entrada
const valor_produto = Number(question('Valor do produto: '))

// Processamento
const prestacoes = Math.floor(valor_produto / 3)
const acrescimo_entrada = valor_produto % 3
const entrada = prestacoes + acrescimo_entrada

// Saída
const resultado = `
--------------------------------------------------------------
Valor da entrada: R$ ${entrada.toFixed(2)}
Valor das prestações: R$ ${prestacoes.toFixed(2)}
`
console.log(resultado)