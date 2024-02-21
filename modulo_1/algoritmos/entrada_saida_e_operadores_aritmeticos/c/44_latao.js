import { question } from 'readline-sync'

console.log('>>> Calcular a quantidade de cobre e zinco em certa quantidade de latão <<<')
console.log('---------------------------------------------------------------------------')

// Entrada
const quantidade_latao = Number(question('Quantidade de latão(kg): '))

// Processamento
const quantidade_cobre = 0.7 * quantidade_latao
const quantidade_zinco = 0.3 * quantidade_latao

// Saída
const resultado = `
---------------------------------------------------------------------------
${quantidade_latao.toFixed(3)}kg de latão é constituido de ${quantidade_cobre.toFixed(3)}kg de cobre e ${quantidade_zinco.toFixed(3)}kg de zinco
`
console.log(resultado)