import { question } from 'readline-sync'

console.log('>>> Conversor de binário para decimal <<<')
console.log('-----------------------------------------')

// Entrada
const binario = Number(question('Binário de 4 dígitos: '))

// Processamento
const primeiro_binario = Math.floor(binario / 1000)
var resto = binario % 1000
const segundo_binario = Math.floor(resto / 100)
resto = resto % 100
const teceiro_binario = Math.floor(resto / 10)
const quarto_binario = resto % 10

const decimal = (primeiro_binario * 2**3) + (segundo_binario * 2**2) + (teceiro_binario * 2**1) + (quarto_binario * 2**0)

// Saída
const resultado = `
-----------------------------------------
${binario} equivale a ${decimal}
`
console.log(resultado)