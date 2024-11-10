function exibir(...itens: string[]): string {
    let resultado: string = '';

    itens.forEach((item, index) => {
        resultado += item;

        if (index < itens.length - 1){
            resultado += ', ';
        }
    });

    return resultado;
}

console.log(exibir("a", "b")); //a, b
console.log(exibir("a", "b", "c")); //a, b, c
console.log(exibir("a", "b", "c", "d")); //a, b, c, d
