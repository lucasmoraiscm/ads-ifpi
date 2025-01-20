class Produto {
    private _id: number;
    private _descricao: string;
    private _quantidade: number;
    private _valorUnitario: number;

    constructor(id: number, descricao: string, quantidade: number, valorUnitario: number) {
        this._id = id;
        this._descricao = descricao;
        this._quantidade = quantidade;
        this._valorUnitario = valorUnitario;
    }

    public get id(): number {
        return this._id;
    }

    public get descricao(): string {
        return this._descricao;
    }

    public get quantidade(): number {
        return this._quantidade;
    }

    public set quantidade(quantidade: number) {
        this._quantidade = quantidade
    }

    public get valorUnitario(): number {
        return this._valorUnitario;
    }

    public repor(quantidade: number): boolean {
        this.quantidade += quantidade;
        return true;
    }

    public darBaixa(quantidade: number): boolean {
        if (this.quantidade >= quantidade) {
            this.quantidade -= quantidade;
            return true;
        }

        return false;
    }
}

class ProdutoPerecivel extends Produto {
    private _dataValidade: Date;

    constructor(id: number, descricao: string, quantidade: number, valorUnitario: number, dataValidade: Date) {
        super(id, descricao, quantidade, valorUnitario);
        this._dataValidade = dataValidade;
    }

    public get dataValidade(): Date {
        return this._dataValidade;
    }

    public estaValido(): boolean {
        let dataAtual: Date = new Date();

        if (this.dataValidade >= dataAtual) {
            return true;
        }

        return false;
    }

    public repor(quantidade: number): boolean {
        if (this.estaValido()) {
            this.quantidade += quantidade;
            return true;
        }

        return false;
    }

    public darBaixa(quantidade: number): boolean {
        if (this.estaValido()) {
            this.quantidade -= quantidade;
            return true;
        }
        
        return false;
    }
}

class Estoque {
    private _produtos: Produto[];

    constructor() {
        this._produtos = [];
    }

    public get produtos(): Produto[] {
        return this._produtos;
    }

    public existeId(id: number): boolean {
        for (let produto of this.produtos) {
            if (produto.id == id) {
                return true;
            }
        }

        return false;
    }

    public existeDescricao(descricao: string): boolean {
        for (let produto of this.produtos) {
            if (produto.descricao == descricao) {
                return true;
            }
        }

        return false;
    }

    public inserir(produto: Produto): boolean {
        if (!this.existeId(produto.id) && !this.existeDescricao(produto.descricao)) {
            this.produtos.push(produto);
            return true
        }

        return false;
    }

    public consultarProduto(id: number): Produto {
        let produtoProcurado!: Produto;

        for (let produto of this.produtos) {
            if (produto.id == id) {
                produtoProcurado = produto
                return produtoProcurado;
            }
        }

        return produtoProcurado;
    }

    public consultarIndice(id: number): number {
        let indiceProcurado: number = - 1;

        for (let i: number = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].id == id) {
                indiceProcurado = i;
                return indiceProcurado;
            }
        }

        return indiceProcurado;
    }

    public excluir(id: number): boolean {
        if (this.existeId(id)) {
            let indiceProcurado: number = this.consultarIndice(id);

            for (let i: number = indiceProcurado; i < this.produtos.length - 1; i++) {
                this.produtos[i] = this.produtos[i + 1];
            }
            this.produtos.pop();
            return true;
        }

        return false;
    }

    public reporProduto(id: number, quantidade: number): boolean {
        if (this.existeId(id)) {
            let produtoProcurado: Produto = this.consultarProduto(id);
            produtoProcurado.repor(quantidade);
            return true;
        }
        
        return false;
    }

    public darBaixaProduto(id: number, quantidade: number): boolean {
        if (this.existeId(id)) {
            let produtoProcurado = this.consultarProduto(id);
            produtoProcurado.darBaixa(quantidade);
            return true;
        }

        return false;
    }

    public listarProdutosVencidos(): void {
        console.log('Produtos perecíveis vencidos: ')
        for (let produto of this.produtos) {
            if (produto instanceof ProdutoPerecivel) {
                if (!produto.estaValido()) {
                    console.log(`ID: ${produto.id} - Quantidade: ${produto.quantidade} - Valor unitário: R$ ${produto.valorUnitario.toFixed(2)}`)
                }
            }
        }
    }
}

let prod1: Produto = new Produto(111, 'Smartphone', 10, 1000);
let prod2: Produto = new Produto(222, 'SmartTV 32 polegadas', 5, 1100);
let prod3: ProdutoPerecivel = new ProdutoPerecivel(333, 'Arroz 5kg', 20, 30, new Date('2025-03-01'));
let prod4: ProdutoPerecivel = new ProdutoPerecivel(444, 'Feijão 1kg', 15, 10, new Date('2025-01-01'));

prod1.repor(2);
console.log(prod1.quantidade);
prod2.darBaixa(3);
console.log(prod2.quantidade);
console.log(prod3.estaValido());
prod3.repor(10);
console.log(prod3.quantidade);
console.log(prod4.estaValido());
prod4.darBaixa(5);
console.log(prod4.quantidade);


let est1: Estoque = new Estoque();
est1.inserir(prod1);
est1.inserir(prod2);
est1.inserir(prod3);
est1.inserir(prod4);
console.log(est1.existeId(111));
console.log(est1.existeDescricao('Arroz 5kg'));
console.log(est1.existeDescricao('Macarrão 1kg'));
console.log(est1.consultarProduto(111));
est1.excluir(222);
console.log(est1.consultarProduto(222));
est1.reporProduto(111, 10);
console.log(est1.consultarProduto(111));
est1.darBaixaProduto(444, 2);
console.log(est1.consultarProduto(444));
est1.listarProdutosVencidos();
