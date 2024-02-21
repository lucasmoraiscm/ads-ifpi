import { question } from 'readline-sync'

console.log('>>> Calcular a expressão com 3 números inteiros e positivos <<<')
console.log('Expressão: D = R + S / 2, onde R = (A + B)² e S = (B + C)²')
console.log('---------------------------------------------------------------')

// Entrada
const numeroA = Number(question('Primeiro número(A): '))
const numeroB = Number(question('Segundo número(B): '))
const numeroC = Number(question('terceiro número(C): '))

// Processamento
const r = (numeroA + numeroB)**2
const s = (numeroB + numeroC)**2
const expressao = (r + s) / 2

// Saída
const resultado = `
---------------------------------------------------------------
R = ${r}

S = ${s}

D = ${r} + ${s} / 2
D = ${expressao}
`
console.log(resultado)