const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let dobro = numeros.map((numero) => numero * 2);
let somatorio = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

console.log(dobro);
console.log(somatorio);
