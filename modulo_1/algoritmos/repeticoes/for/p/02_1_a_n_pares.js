import { show } from "../../../utils/io_utils.js"
import { get_positive_number } from "../../../utils/math_utils.js"

function main(){
    const n = get_positive_number('Digite valor de N: ')

    for (let i = 1; i <= n; i++){
        if (i % 2 == 0){
            show(i)
        }
    }
}

main()