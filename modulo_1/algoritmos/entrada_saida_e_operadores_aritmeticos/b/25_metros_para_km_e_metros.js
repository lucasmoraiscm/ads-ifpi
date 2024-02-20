import { question } from 'readline-sync'

console.log('>>> Conversor de m para km e m <<<')
console.log('----------------------------------')

// Entrada
const metros = Math.floor(Number(question('Valor em metros(m): ')))

// Processamento
const km = Math.floor(metros / 1000)
const m_restantes = metros % 1000

// Saída
const resultado = `
----------------------------------
${metros}m corresponde a ${km}km e ${m_restantes}m
`
console.log(resultado)
