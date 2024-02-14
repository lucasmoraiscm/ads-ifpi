import { question } from 'readline-sync'

console.log('>>> Conversor de m para cm <<<')
console.log('------------------------------')

// Entrada
const metros = Number(question('Valor em metros(m): '))

// Processamento
const cm = metros * 100

// Saída
const resultado = `
------------------------------
${metros}m equivale a ${Math.floor(cm)}cm
`
console.log(resultado)