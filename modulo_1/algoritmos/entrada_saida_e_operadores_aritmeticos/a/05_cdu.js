import { question } from 'readline-sync'

console.log('>>> Somatório dos elementos de um número <<<')
console.log('--------------------------------------------')

// Entrada
var numero = Number(question('Número de três dígitos: '))

// Processamento
var centena = Math.floor(numero/100)
var resto = numero % 100
var dezena = Math.floor(resto / 10)
var unidade = resto % 10

var somatorio = centena + dezena + unidade

// Saída
var resultado = `
--------------------------------------------
${centena} + ${dezena} + ${unidade} = ${somatorio}
`
console.log(resultado)
