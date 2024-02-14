import { question } from 'readline-sync'

console.log('>>> Conversor de segundos em horas, minutos e segundos <<<')
console.log('----------------------------------------------------------')

// Entrada
const segundos = Math.floor(Number(question('Segundos(s): ')))

// Processamento
const horas = Math.floor(segundos / 3600)
const resto = segundos % 3600
const minutos = Math.floor(resto / 60)
const segundos_restantes = resto % 60

// Saída
const resultado = `
----------------------------------------------------------
${segundos}s corresponde a ${horas}h, ${minutos}min e ${segundos_restantes}s
`
console.log(resultado)