import { question } from 'readline-sync'

console.log('>>> Calcular área de um retângulo <<<')
console.log('-------------------------------------')

// Entrada
const base = Number(question('Base do retângulo: '))
const altura = Number(question('Altura do retângulo: '))

// Processamento
const area = base * altura

// Saída
const resultado = `
-------------------------------------
A área do retângulo com base = ${base} e altura = ${altura} é igual a ${area}
`
console.log(resultado)