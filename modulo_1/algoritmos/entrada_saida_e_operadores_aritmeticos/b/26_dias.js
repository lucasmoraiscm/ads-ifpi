import { question } from 'readline-sync'

console.log('>>> Conversor de dias em semanas e dias <<<')
console.log('---------------------------------------------')

// Entrada
const dias = Math.floor(Number(question('Dias: ')))

// Processamento
const semanas = Math.floor(dias / 7)
const dias_restantes = dias % 7

// Saída
const resultado = `
---------------------------------------------
${dias} dias corresponde a ${semanas} semanas e ${dias_restantes} dias
`
console.log(resultado)
