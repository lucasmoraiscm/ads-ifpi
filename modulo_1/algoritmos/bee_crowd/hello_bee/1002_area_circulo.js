import {question} from 'readline-sync'

function main(){
    const raio = Number(question())

    const area = 3.14159 * raio**2

    console.log(`A=${area.toFixed(4)}`)
}

main()