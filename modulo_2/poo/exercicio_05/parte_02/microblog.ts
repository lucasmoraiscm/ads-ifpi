class Postagem {
    id: number;
    texto: String;
    quantidadeCurtidas: number;

    constructor(id: number, texto: String, quantidadeCurtidas: number) {
        this.id = id;
        this.texto = texto;
        this.quantidadeCurtidas = quantidadeCurtidas;
    }

    curtir(): void {
        this.quantidadeCurtidas++;
    }

    toString(): String {
        return `
    Texto: ${this.texto}
    Quantidade de curtidas: ${this.quantidadeCurtidas}`
    }
}

class Microblog {
    postagens: Postagem[];

    constructor() {
        this.postagens = [];
    }

    inserir(postagem: Postagem): void {
        this.postagens.push(postagem);
    }

    consultar(id: number): Postagem {
        let postagemProcurada!: Postagem;

        for (let postagem of this.postagens) {
            if (postagem.id == id) {
                postagemProcurada = postagem;
                return postagemProcurada;
            }
        }

        return postagemProcurada;
    }

    consultarIndice(id: number): number {
        let indice: number = -1;

        for (let i: number = 0; i < this.postagens.length; i++) {
            if (this.postagens[i].id == id) {
                indice = i;
                return indice;
            }
        }

        return indice;
    }

    excluir(id: number): void {
        let indice: number = this.consultarIndice(id);

        if (indice != -1) {
            for (let i: number = indice; i < this.postagens.length - 1; i++) {
                this.postagens[i] = this.postagens[i + 1];
            }
            this.postagens.pop();
        }
    }

    maisCurtida(): Postagem {
        let maisCurtida: Postagem = this.postagens[0];

        for (let postagem of this.postagens) {
            if (postagem.quantidadeCurtidas > maisCurtida.quantidadeCurtidas) {
                maisCurtida = postagem;
            }
        }

        return maisCurtida;
    }

    curtir(id: number) {
        let postagemProcurada: Postagem = this.consultar(id);

        if (postagemProcurada) {
            postagemProcurada.curtir();
        }
    }

    toString(): String {
        let postagens: String = 'Postagens:';

        for (let postagem of this.postagens) {
            postagens += `\n${postagem.toString()}`
        }

        return postagens;
    }
}


let p1 = new Postagem(1, "Olá, POO!", 0);
let p2 = new Postagem(2, "Bom dia, devs!", 0);

p1.curtir();
console.log(p1.toString());
console.log(p2.toString());

let mb1 = new Microblog();

mb1.inserir(p1);
mb1.inserir(p2);
console.log(mb1.maisCurtida());
console.log(mb1.toString());
mb1.curtir(1);
mb1.excluir(2)
console.log(mb1.toString());
