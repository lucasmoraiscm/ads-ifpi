import { question } from 'readline-sync'

console.log('>>> Calcular o custo ao consumidor de um carro novo <<<')
console.log('-------------------------------------------------------')

// Entrada
const custo_fabrica = Number(question('Custo de fábrica: '))

// Processamento
const porcentagem_distribuidor = 0.28 * custo_fabrica
const porcentagem_impostos = 0.45 * custo_fabrica
const custo_consumidor = custo_fabrica + porcentagem_distribuidor + porcentagem_impostos

// Saída
const resultado = `
-------------------------------------------------------
Custo de fábrica: R$ ${custo_fabrica.toFixed(2)}
Porcentagem do distribuidor: R$ ${porcentagem_distribuidor.toFixed(2)}
Porcentagem dos impostos: R$ ${porcentagem_impostos.toFixed(2)}

O custo ao consumidor do carro novo é R$ ${custo_consumidor.toFixed(2)}
`
console.log(resultado)