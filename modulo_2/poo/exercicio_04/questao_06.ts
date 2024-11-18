class Saudacao {
    texto: String;
    destinatario: String;

    constructor(texto: String, destinatario: String) {
        this.texto = texto;
        this.destinatario = destinatario;
    }

    obterSaudacao(): String {
        return `${this.texto}${this.destinatario}`
    }
}

let s1: Saudacao = new Saudacao("Bom dia, ", "João");
console.log(s1.obterSaudacao())
