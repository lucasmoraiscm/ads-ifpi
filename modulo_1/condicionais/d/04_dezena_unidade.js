import {question} from 'readline-sync'

function main(){
  console.log('>>> Verificar se os algarismos da dezena e da unidade são iguais <<<')

  const numero = get_number('Numero: ')

  const dezena = get_dezena(numero)
  const unidade = get_unidade(numero)
  const verificacao = verificar_iguais(dezena, unidade)

  const resultado = `
  Os algarismos da dezena e da unidade são ${verificacao} 
  `

  console.log(resultado)
}

function get_number(mensagem){
  const n = Number(question(mensagem))
  return n
}

function get_dezena(numero){
  const algarismo_dezena = Math.floor(numero / 10)
  return algarismo_dezena
}

function get_unidade(numero){
  const algarismo_unidade = numero % 10
  return algarismo_unidade
}

function verificar_iguais(dezena, unidade){
  if (dezena === unidade){
    return 'iguais'
  }else{
    return 'diferentes'
  }
}

main()