import { question } from 'readline-sync'

console.log('>>> Média ponderada das notas <<<')
console.log('---------------------------------')

// Entrada
const nota1 = Number(question('Primeira nota: '))
const peso1 = Number(question('Peso da primeira nota: '))
const nota2 = Number(question('Segunda nota: '))
const peso2 = Number(question('Peso da segunda nota: '))
const nota3 = Number(question('Terceira nota: '))
const peso3 = Number(question('Peso da terceira nota: '))

// Processamento
const media_ponderada = (nota1*peso1 + nota2*peso2 + nota3*peso3) / (peso1 + peso2 + peso3)

// Saída
const resultado = `
---------------------------------
>>> Resultado <<<

Primeira nota e seu peso: ${nota1} e ${peso1}
Segunda nota e seu peso: ${nota2} e ${peso2}
Segunda nota e seu peso: ${nota3} e ${peso3}
---------------------------------
A média ponderada das notas é igual a ${media_ponderada.toFixed(2)}
`
console.log(resultado)