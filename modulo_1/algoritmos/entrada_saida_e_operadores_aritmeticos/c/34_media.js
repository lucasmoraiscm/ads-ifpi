import { question } from 'readline-sync'

console.log('>>> Calcular a média de 3 números <<<')
console.log('-------------------------------------')

// Entrada
const numero1 = Number(question('Primeiro número: '))
const numero2 = Number(question('Segundo número: '))
const numero3 = Number(question('Terceiro número: '))

// Processamento
const media = (numero1 + numero2 + numero3) / 3

// Saída
const resultado = `
-------------------------------------
A média entre ${numero1}, ${numero2} e ${numero3} é igual a ${media}
`
console.log(resultado)