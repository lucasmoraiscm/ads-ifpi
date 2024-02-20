import { question } from 'readline-sync'

console.log('>>> Divisão da soma pela subtração de 2 números <<<')
console.log('---------------------------------------------------')

// Entrada
const numero1 = Number(question('Primeiro número: '))
const numero2 = Number(question('Segundo número: '))

// Processamento
const soma = numero1 + numero2
const subtracao = numero1 - numero2
const divisao = soma / subtracao

// Saída
const resultado = `
---------------------------------------------------
A divisão da soma pela subtração de ${numero1} e ${numero2} é igual a ${divisao}
`
console.log(resultado)
