import { question } from 'readline-sync'

console.log('>>> Conversor de minutos em dias, horas e minutos <<<')
console.log('-----------------------------------------------------')

// Entrada
const minutos = Math.floor(Number(question('Minutos(min): ')))

// Processamento
const dias = Math.floor(minutos / 1440)
const resto = minutos % 1440
const horas = Math.floor(resto / 60)
const minutos_restantes = resto % 60

// Saída
const resultado = `
-----------------------------------------------------
${minutos}min corresponde a ${dias} dias, ${horas}h e ${minutos_restantes}min
`
console.log(resultado)
