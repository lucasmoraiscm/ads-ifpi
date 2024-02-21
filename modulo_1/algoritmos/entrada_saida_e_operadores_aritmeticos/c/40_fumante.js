import { question } from 'readline-sync'

console.log('>>> Calcular a quantidade de dinheiro gasta por um fumante <<<')
console.log('--------------------------------------------------------------')

// Entrada
const anos_fumante = Number(question('Há quantos anos você fuma: '))
const cigarros_dia = Number(question('Número de cigarros fumados por dia: '))
const preco_carteira = Number(question('Preço de uma carteira de cigarros: '))

// Processamento
const total_cigarros = anos_fumante * 365 * cigarros_dia
const carteiras_cigarros = Math.floor(total_cigarros / 20)
const total_gasto = preco_carteira * carteiras_cigarros

// Saída
const resultado = `
--------------------------------------------------------------
Você já gastou mais de R$ ${total_gasto.toFixed(2)} com cigarros!
`
console.log(resultado)