import { question } from 'readline-sync'

console.log('>>> Conversor de dolar($) para real(R$) <<<')
console.log('-------------------------------------------')

// Entrada
var cotacao_dolar = Number(question('Cotação do dólar: '))
var dolar = Number(question('Valor em dólar: '))

// Processamento
var real = cotacao_dolar * dolar

// Saída
var resultado = `
-------------------------------------------
Cotação atual do dólar($) -> ${cotacao_dolar}
Valor em dólar($) -> ${dolar}
$ ${dolar} equivale a R$ ${real.toFixed(2)}
`
console.log(resultado)
