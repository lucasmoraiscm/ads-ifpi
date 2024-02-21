import { question } from 'readline-sync'

console.log('>>> Conversor de idade em anos, meses e dias para dias <<<')
console.log('--------------------------------------------------------')
console.log('Sua idade tem quantos')

// Entrada
const anos = Number(question('Anos: '))
const meses = Number(question('Meses: '))
const dias = Number(question('Dias: '))

// Processamento
const idade_dias = anos*365 + meses*30 + dias

// Saída
const resultado = `
--------------------------------------------------------
Sua idade tem ${anos} anos, ${meses} meses e ${dias} dias e equivale a ${idade_dias} dias
`
console.log(resultado)