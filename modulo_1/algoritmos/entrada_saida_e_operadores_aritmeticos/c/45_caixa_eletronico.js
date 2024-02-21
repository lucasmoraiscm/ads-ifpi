import { question } from 'readline-sync'

console.log('>>> Caixa eletrônico <<<')
console.log('------------------------')

// Entrada
const valor_solicitado = Number(question('Valor do saque: '))

// Processamento
const notas_200 = Math.floor(valor_solicitado / 200)
var resto = valor_solicitado % 200
const notas_100 = Math.floor(resto / 100)
resto = resto % 100
const notas_50 = Math.floor(resto / 50)
resto = resto % 50
const notas_20 = Math.floor(resto / 20)
resto = resto % 20
const notas_10 = Math.floor(resto / 10)
resto = resto % 10
const notas_5 = Math.floor(resto / 5)
resto = resto % 5
const notas_2 = Math.floor(resto / 2)
const notas_1 = resto % 2

// Saída
const resultado = `
------------------------
${notas_200} notas de R$ 200;
${notas_100} notas de R$ 100;
${notas_50} notas de R$ 50;
${notas_20} notas de R$ 20; 
${notas_10} notas de R$ 10;
${notas_5} notas de 5 R$;
${notas_2} notas de 2 R$;
${notas_1} notas de 1 R$.
`
console.log(resultado)