import { question } from 'readline-sync'

console.log('>>> Conversor de idade em dias para anos, meses e dias <<<')
console.log('----------------------------------------------------------')

// Entrada
const idade = Number(question('Idade em dias: '))

// Processamento
const anos = Math.floor(idade / 365)
const resto = idade % 365
const meses = Math.floor(resto / 30)
const dias = resto % 30

// Saída
const resultado = `
----------------------------------------------------------
Sua idade é de ${idade} dias e equivale a ${anos} anos, ${meses} meses e ${dias} dias
`
console.log(resultado)