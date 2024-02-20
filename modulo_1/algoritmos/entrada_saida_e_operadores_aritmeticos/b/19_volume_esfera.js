import { question } from 'readline-sync'

console.log('>>> Calcular o volume de uma esfera <<<')
console.log('---------------------------------------')

// Entrada
const raio = Number(question('Raio da esfera: '))

// Processamento
const volume = (4 * 3.14 * raio**3) / 3

// Saída
const resultado = `
---------------------------------------
O volume da esfera com raio = ${raio} é igual a ${volume.toFixed(2)}
`
console.log(resultado)
