import { question } from 'readline-sync'

console.log('>>> Inverso de um número inteiro de 3 dígitos <<<')
console.log('-------------------------------------------------')

// Entrada
const numero = Number(question('Número inteiro de 3 dígitos: '))

// Processamento
const primeiro_digito = Math.floor(numero / 100)
const resto = numero % 100
const segundo_digito = Math.floor(resto / 10)
const terceiro_digito = resto % 10

// Saída
const resultado = `
-------------------------------------------------
O inverso de ${numero} é ${terceiro_digito}${segundo_digito}${primeiro_digito}
`
console.log(resultado)