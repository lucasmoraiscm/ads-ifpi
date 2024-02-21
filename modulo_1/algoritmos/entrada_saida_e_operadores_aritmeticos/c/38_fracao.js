import { question } from 'readline-sync'

console.log('>>> Calcular a soma de duas frações <<<')
console.log('---------------------------------------')

// Entrada
const numerador1 = Number(question('Numerador da primeira fração: '))
const denominador1 = Number(question('Denominador da primeira fração: '))
const numerador2 = Number(question('Numerador da segunda fração: '))
const denominador2 = Number(question('Denominador da segunda fração: '))

// Processamento
const soma_fracoes = (numerador1 / denominador1) + (numerador2 / denominador2)
const numerador_resultado = Math.floor(soma_fracoes.toFixed(1) * 10)

// Saída
const resultado = `
---------------------------------------
${numerador1}/${denominador1} + ${numerador2}/${denominador2} = ${numerador_resultado}/10
`
console.log(resultado)