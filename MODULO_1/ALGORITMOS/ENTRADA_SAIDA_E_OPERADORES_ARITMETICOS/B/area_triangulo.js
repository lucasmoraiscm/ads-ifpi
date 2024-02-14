import { question } from 'readline-sync'

console.log('>>> Calcular a área de um triângulo <<<')
console.log('---------------------------------------')

// Entrada
const base = Number(question('Base do triângulo: '))
const altura = Number(question('Altura do triângulo: '))

// Processamento
const area = (base * altura) / 2

// Saída
const resultado = `
---------------------------------------
A área do triângulo com base = ${base} e altura = ${altura} é igual a ${area}
`
console.log(resultado)