import {question} from 'readline-sync'

function main(){
  console.log('>>> Maior número <<<<')

  const numero1 = get_number('Número 1:')
  const numero2 = get_number('Número 2:')
  const numero3 = get_number('Número 3:')

  const maior = verificar_maior(numero1, numero2, numero3)

  const resultado = `
  ${maior} é o maior número
  `

  console.log(resultado)
}

function get_number(mensagem){
  const n = Number(question(mensagem))
  return n
}

function verificar_maior(numero1, numero2, numero3){
  if (numero1 > numero2 && numero1 > numero3){
    return numero1
  }else if (numero2 > numero1 && numero2 > numero3){
    return numero2
  }else{
    return numero3
  }
}

main()