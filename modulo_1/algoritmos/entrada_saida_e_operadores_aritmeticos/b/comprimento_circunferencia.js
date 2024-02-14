import { question } from 'readline-sync'

console.log('>>> Calcular comprimento de uma circunferência <<<')
console.log('--------------------------------------------------')

// Entrada
const raio = Number(question('Raio da circunferência: '))

// Processamento
const comprimento = 2 * 3.14 * raio

// Saída
const resultado = `
--------------------------------------------------
O comprimento da circunferência com raio = ${raio} é igual a ${comprimento.toFixed(2)}
`
console.log(resultado)