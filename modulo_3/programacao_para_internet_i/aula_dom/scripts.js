function getById(id) {
    return document.getElementById(id);
}

function getBotaoClicavel(id, funcao) {
    getById(id).addEventListener('click', funcao);
    return getById(id);
}

let botaoCriarParagrafo = 
    getBotaoClicavel('botaoCriarParagrafo', criarParagrafo);

function criarParagrafo() {
    let p1 = document.createElement('p');
    p1.innerHTML = "Hello world 2";
    p1.id = 'p1'
    getById('resultado1').appendChild(p1);
}

let botaoCriarElemento = 
    getBotaoClicavel('botaoCriarElemento', criarElemento);

function criarElemento() {
    let tagElemento = getById('tagElemento').value;

    let elemento = document.createElement(tagElemento);

    elemento.id = getById('id').value;
    elemento.innerText = getById('texto').value;

    elemento.setAttribute(getById('atributo').value, getById('valor').value);

    
    let pai = getById('pai').value;
    getById('resultado2').appendChild(elemento); //getById(pai).appendChild(elemento)


}

let botaoAdicionarTarefa = 
    getBotaoClicavel('botaoAdicionarTarefa', adicionarTarefa);

let contador = 1;

function adicionarTarefa() {
    let descricao = getById('descricao').value;
    let percentual = getById('percentual').value;

    let tr = document.createElement('tr');
    tr.id = contador;

    let tdContador = document.createElement('td');
    tdContador.innerText = contador;

    let tdDescricao = document.createElement('td')
    tdDescricao.innerText = descricao;

    let tdPercentual = document.createElement('td');
    tdPercentual.innerText = percentual + "%";

    let tdAcao = document.createElement('td');
    let botaoExcluir = document.createElement('button');
    botaoExcluir.innerText = "Excluir";
    
    tdAcao.appendChild(botaoExcluir);

    tr.appendChild(tdContador);
    tr.appendChild(tdDescricao);
    tr.appendChild(tdPercentual);
    tr.appendChild(tdAcao);

    contador++;

    getById('tarefas').appendChild(tr);
}

function excluirTarefa(id) {
    let tr = getById(id);
    getById('tarefas').removeChild(tr);
}