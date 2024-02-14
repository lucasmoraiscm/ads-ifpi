import { question } from 'readline-sync'

console.log('>>> Conversor de km para m <<<')
console.log('------------------------------')

// Entrada
const km = Number(question('Valor em km: '))

// Processamento
const metros = km * 1000

// Saída
const resultado = `
------------------------------
${km}km equivale a ${Math.floor(metros)}m
`
console.log(resultado)