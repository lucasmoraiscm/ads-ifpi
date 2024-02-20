import { question } from 'readline-sync'

console.log('>>> Calcular a área de um quadrado <<<')
console.log('--------------------------------------')

// Entrada
const lado = Number(question('Lado do quadrado: '))

// Processamento
const area = lado**2

// Saída
const resultado = `
--------------------------------------
A área do quadrado com lado = ${lado} é igual a ${area}
`
console.log(resultado)
