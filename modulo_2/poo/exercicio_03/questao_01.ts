function verificarNumero(numero: number): boolean {
    if (numero % 2 == 0){
        return true;
    }
    else {
        return false;
    }
}

console.log(verificarNumero(2));
console.log(verificarNumero(3));
