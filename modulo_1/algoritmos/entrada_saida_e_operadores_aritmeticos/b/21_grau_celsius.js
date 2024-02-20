import { question } from 'readline-sync'

console.log('>>> Conversor de temperatura em °F para °C <<<')
console.log('----------------------------------------------')

// Entrada
const temperatura_fahrenheit = Number(question('Temperatura em °F: '))

// Processamento
const temperatura_celsius = (5 * temperatura_fahrenheit - 160) / 9

// Saída
const resultado = `
----------------------------------------------
${temperatura_fahrenheit}°F equivale a ${temperatura_celsius}°C
`
console.log(resultado)
