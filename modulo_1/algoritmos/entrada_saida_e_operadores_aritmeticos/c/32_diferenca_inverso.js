import { question } from 'readline-sync'

console.log('>>> Calcular a diferença entre o número e seu inverso <<<')
console.log('---------------------------------------------------------')

// Entrada
const numero = Math.floor(Number(question('Número de 3 dígitos: ')))

// Processamento
const primeiro_digito = Math.floor(numero / 100)
const resto = numero % 100
const segundo_digito = Math.floor(resto / 10)
const terceiro_digito = resto % 10

const numero_inverso = Number(`${terceiro_digito}${segundo_digito}${primeiro_digito}`)

const diferenca = numero - numero_inverso

// Saída
const resultado = `
---------------------------------------------------------
${numero} - ${numero_inverso} = ${diferenca}
`
console.log(resultado)