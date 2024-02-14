import { question } from 'readline-sync'

console.log('>>> Quociente e resto da divisão de 2 números inteiros <<<')
console.log('----------------------------------------------------------')

// Entrada
const numero1 = Math.floor(Number(question('Primeiro número: ')))
const numero2 = Math.floor(Number(question('Segundo número: ')))

// Processamento
const quociente = Math.floor(numero1 / numero2)
const resto = numero1 % numero2

// Saída
const resultado = `
----------------------------------------------------------
A divisão de ${numero1} por ${numero2} apresenta quociente = ${quociente} e resto = ${resto}
`
console.log(resultado)