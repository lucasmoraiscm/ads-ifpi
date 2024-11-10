function separarArray(array: number[]): string {
    let arraySeparado: string = '';

    array.forEach((numero, index) => {
        arraySeparado += numero.toString();

        if (index < array.length - 1){
            arraySeparado += '-';
        }
    });

    return arraySeparado;
}

let arrayNumeros: number[] = [1, 2, 3, 4, 5];
console.log(separarArray(arrayNumeros));
