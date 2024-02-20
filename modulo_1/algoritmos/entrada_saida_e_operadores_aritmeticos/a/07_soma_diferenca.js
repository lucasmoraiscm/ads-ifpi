import { question } from 'readline-sync'

console.log('>>> Calculadora da soma e diferença dos números <<<')
console.log('---------------------------------------------------')

// Entrada
const numero1 = Number(question('Primeiro número: '))
const numero2 = Number(question('Segundo número: '))
const numero3 = Number(question('Terceiro número: '))

// Processamento
const soma = numero1 + numero2
const diferenca = numero2 - numero3

// Saída
const resutado = `
---------------------------------------------------
A soma de ${numero1} com ${numero2} é igual a ${soma}
A diferença entre ${numero2} e ${numero3} é igual a ${diferenca}
`
console.log(resutado)
