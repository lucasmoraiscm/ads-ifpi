import { question } from 'readline-sync'

console.log('>>> Calcular a distância entre 2 pontos no plano <<<')
console.log('----------------------------------------------------')

// Entrada
const x1 = Number(question('x do ponto 1: '))
const y1 = Number(question('y do ponto 1: '))
const x2 = Number(question('x do ponto 2: '))
const y2 = Number(question('y do ponto 2: '))

// Processamento
const distancia = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2)

// Saída
const resultado = `
----------------------------------------------------
A distância no plano entre o ponto 1 e o ponto 2 é igual a ${distancia.toFixed(2)}
`
console.log(resultado)