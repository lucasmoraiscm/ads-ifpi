import {question} from 'readline-sync'

function main(){
  console.log('>>> Ordenar os números em ordem crescente <<<')

  const numero1 = get_number('Número 1: ')
  const numero2 = get_number('Número 2: ')
  const numero3 = get_number('Número 3: ')

  const maior = get_maior(numero1, numero2, numero3)
  const menor = get_menor(numero1, numero2, numero3)
  const medio = get_medio(maior, menor, numero1, numero2, numero3)
  
  const resultado = `
  Os números em ordem crescentes são: ${menor}, ${medio} e ${maior}
  `
  console.log(resultado)
}

function get_number(mensagem){
  const n = Number(question(mensagem))
  return n
}

function get_maior(n1, n2, n3){
  if (n1 > n2 && n1 > n3){
    return n1
  }else if (n2 > n1 && n2 > n3){
    return n2
  }else{
    return n3
  }
}

function get_menor(n1, n2, n3){
  if (n1 < n2 && n1 < n3){
    return n1
  }else if (n2 < n1 && n2 < n3){
    return n2
  }else{
    return n3
  }
}

function get_medio(maior, menor, n1, n2, n3){
  if (n1 != maior && n1 != menor){
    return n1
  }else if (n2 != maior && n2 != menor){
    return n2
  }else{
    return n3
  }
}

main()