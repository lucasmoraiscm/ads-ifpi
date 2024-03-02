import {question} from 'readline-sync'

function main(){
    console.log('>>> Verificar as coordenadas cartesianas e calcular a área de um retângulo <<<')

    const x1 = get_number('X1: ')
    const y1 = get_number('Y1: ')
    const x2 = get_number('X2: ')
    const y2 = get_number('Y2: ')

    if (x1 > x2){
        if (y1 > y2){
            const diferenca_x = calcular_diferenca(x1, x2)
            const diferenca_y = calcular_diferenca(y1, y2)
            const area = calcular_area(diferenca_x, diferenca_y)
            console.log(`A área é igual a ${area}`)
        }else{
            const diferenca_x = calcular_diferenca(x1, x2)
            const diferenca_y = calcular_diferenca(y2, y1)
            const area = calcular_area(diferenca_x, diferenca_y)
            console.log(`A área é igual a ${area}`)
        }
    }else{
        if (y1 > y2){
            const diferenca_x = calcular_diferenca(x2, x1)
            const diferenca_y = calcular_diferenca(y1, y2)
            const area = calcular_area(diferenca_x, diferenca_y)
            console.log(`A área é igual a ${area}`)
        }else{
            const diferenca_x = calcular_diferenca(x2, x1)
            const diferenca_y = calcular_diferenca(y2, y1)
            const area = calcular_area(diferenca_x, diferenca_y)
            console.log(`A área é igual a ${area}`)
        }
    }
}

function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
}

function calcular_diferenca(v1, v2){
    return v1 - v2
}

function calcular_area(v1, v2){
    return v1 * v2
}

main()