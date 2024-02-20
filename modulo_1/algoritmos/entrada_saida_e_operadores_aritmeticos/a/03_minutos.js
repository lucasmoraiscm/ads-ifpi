import { question } from 'readline-sync'

console.log('>>> Conversor de minutos para horas <<<')
console.log('---------------------------------------')

// Entrada
var minutos = Number(question('Minutos: '))

// Processamento
var horas = Math.floor(minutos/60)
var minutos_restantes = minutos % 60

// Saída
var resultado = `
---------------------------------------
${minutos}min equivale a ${horas}h e ${minutos_restantes}min
`
console.log(resultado)
