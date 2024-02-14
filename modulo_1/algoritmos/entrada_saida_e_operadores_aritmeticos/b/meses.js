import { question } from 'readline-sync'

console.log('>>> Conversor de meses em anos e meses <<<')
console.log('------------------------------------------')

// Entrada
const meses = Math.floor(Number(question('Meses: ')))

// Processamento
const anos = Math.floor(meses / 12)
const meses_restantes = meses % 12

// Saída
const resultado = `
------------------------------------------
${meses} meses corresponde a ${anos} anos e ${meses_restantes} meses
`
console.log(resultado)