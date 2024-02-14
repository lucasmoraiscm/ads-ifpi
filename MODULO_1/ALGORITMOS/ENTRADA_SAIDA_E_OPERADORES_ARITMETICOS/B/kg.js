import { question } from 'readline-sync'

console.log('>>> Conversor de kg para g <<<')
console.log('------------------------------')

// Entrada
const kg = Number(question('Valor em kg: '))

// Processamento
const g = kg * 1000

// Saída
const resultado = `
------------------------------
${kg}kg equivale a ${Math.floor(g)}g
`
console.log(resultado)