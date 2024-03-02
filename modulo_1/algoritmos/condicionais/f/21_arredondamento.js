import {question} from 'readline-sync'

function main(){
  console.log('>>> Arrendondar o número indicado <<<')

  const numero = get_number('Número: ')

  const decimal = calcular_decimal(numero)
  const numero_arredondado = calcular_arredondamento(numero, decimal)

  const resultado = `
  O número ${numero} arredondado é igual a ${numero_arredondado}
  `
  console.log(resultado)
}

function get_number(mensagem){
  const n = Number(question(mensagem))
  return n
}

function calcular_decimal(num){
  return num - Math.floor(num)

}

function calcular_arredondamento(num, dec){
  if (dec >= 0.5){
    return Math.floor(num) + 1
  }else{
    return Math.floor(num)
  }
}

main()