import { question } from 'readline-sync'

console.log('>>> Conversor de temperatura em °C para °F <<<')
console.log('----------------------------------------------')

// Entrada
const temperatura_celsius = Number(question('Temperatura em °C: '))

// Processamento
const temperatura_fahrenheit = (9 * temperatura_celsius + 160) / 5

// Saída
const resultado = `
----------------------------------------------
${temperatura_celsius}°C equivale a ${temperatura_fahrenheit.toFixed(1)}°F
`
console.log(resultado)
