import { question } from 'readline-sync'

console.log('>>> Conversor de horas em semanas, dias e horas <<<')
console.log('---------------------------------------------------')

// Entrada
const horas = Math.floor(Number(question('Horas(h): ')))

// Processamento
const semanas = Math.floor(horas / 168)
const resto = horas % 168
const dias = Math.floor(resto / 24)
const horas_restantes = resto % 24

// Saída
const resultado = `
---------------------------------------------------
${horas}h correspondem a ${semanas} semanas, ${dias} dias e ${horas_restantes}h
`
console.log(resultado)