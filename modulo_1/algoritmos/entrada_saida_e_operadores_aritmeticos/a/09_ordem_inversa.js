import { question } from 'readline-sync'

console.log('>>> Escrevendo os números na ordem inversa <<<')
console.log('----------------------------------------------')

// Entrada
const numero1 = Number(question('Primeiro número: '))
const numero2 = Number(question('Segundo número: '))

// Saída
const resultado = `
${numero1} e ${numero2} na ordem inversa é igual a ${numero2} e ${numero1}
`
console.log(resultado)
