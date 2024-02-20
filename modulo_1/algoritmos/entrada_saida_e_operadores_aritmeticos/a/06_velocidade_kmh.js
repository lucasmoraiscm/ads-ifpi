import { question } from 'readline-sync'

console.log('>>> Conversor de km/h para m/s <<<')
console.log('----------------------------------')

// Entrada
const kmh = Number(question('Velocidade em km/h: '))

// Processamento
const ms = kmh / 3.6

// Saída
const resultado = `
----------------------------------
${kmh}km/h equivale a ${ms}m/s
`
console.log(resultado)
