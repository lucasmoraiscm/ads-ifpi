import { question } from 'readline-sync'

console.log('>>> Conversor de horas para minutos <<<')
console.log('---------------------------------------')

// Entrada
var horas = Number(question('Horas: '))
var minutos = Number(question('Minutos: '))

// Processamento
var minutos_equivalentes = horas * 60 + minutos

// Saída
var resultado = `
---------------------------------------
${horas}h e ${minutos}min equivale a ${minutos_equivalentes}min
`
console.log(resultado)