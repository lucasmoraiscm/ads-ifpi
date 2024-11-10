function saudacao(nome: string, pronome: string = "Sr."): string {
    return `${pronome} ${nome}`;
}

console.log(saudacao('Lucas'));
console.log(saudacao('Lucas', 'Analista'));
