import {question} from 'readline-sync'

function main(){
  console.log('>>> Maior e menor número <<<')
  
  const numero1 = get_number('Número 1: ')
  const numero2 = get_number('Número 2: ')

  const maior = verificar_maior(numero1, numero2) 
  const menor = verificar_menor(numero1, numero2)

  const resultado = `
  ${maior} é o maior e ${menor} é o menor número
  `

  console.log(resultado)
}

function get_number(mensagem){
  const n = Number(question(mensagem))
  return n
}

function verificar_maior(numero1, numero2){
  if (numero1 > numero2){
    return numero1
  }else{
    return numero2
  }
}

function verificar_menor(numero1, numero2){
  if (numero1 < numero2){
    return numero1
  }else{
    return numero2
  }
}

main()