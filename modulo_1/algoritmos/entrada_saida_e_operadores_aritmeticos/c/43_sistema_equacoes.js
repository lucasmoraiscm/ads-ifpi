import { question } from 'readline-sync'

console.log('>>> Calcular o sistema de equações lineares <<<')
console.log('-----------------------------------------------')
console.log('ax + by = c')
console.log('dx + ey = f')

// Entrada
const a = Number(question('O valor de a: '))
const b = Number(question('O valor de b: '))
const c = Number(question('O valor de c: '))
const d = Number(question('O valor de d: '))
const e = Number(question('O valor de e: '))
const f = Number(question('O valor de f: '))

// Processamento
const x = (c*e - b*f) / (a*e - b*d)
const y = (a*f - c*d) / (a*e - b*d)

// Saída
const resultado = `
-----------------------------------------------
O valor de x é igual a ${x.toFixed(2)}
O valor de y é igual a ${y.toFixed(2)}
`
console.log(resultado)