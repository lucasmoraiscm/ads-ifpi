// Questão 01
let botaoErro = document.getElementById('botaoErro');
botaoErro.addEventListener('click', exibirErro);

function exibirErro() {
    let mensagem = document.getElementById('texto').value
    let id = document.getElementById('id').value;

    erro(mensagem, id);
}

function erro(mensagem, id) {
    let componente = document.getElementById(id);

    componente.classList.remove('oculto');

    componente.innerHTML = mensagem

    setTimeout(function() {
        componente.classList.add('oculto');
    }, 3000);
}


// Questão 02
let botaoExibir = document.getElementById('botaoExibir');
botaoExibir.addEventListener('click', exibirConteudo);

function exibirConteudo() {
    let texto = document.getElementById('caixaDeTexto').value;
    let conteudo = document.getElementById('conteudo');

    if (texto.trim().length === 0) {
        erro('O conteúdo do campo não pode ser vazio', 'mensagemErroTexto');
    }
    else {
        conteudo.innerHTML = texto;
    }
}


// Questão 03
let botaoEngajamento = document.getElementById('botaoEngajamento');
botaoEngajamento.addEventListener('click', exibirEngajamento); 

function exibirEngajamento() {
    let interacoes = document.getElementById('interacoes').value;
    let visualizacoes = document.getElementById('visualizacoes').value;
    let engajamento = document.getElementById('resultadoEngajamento');

    if (isNaN(interacoes) || interacoes.length === 0 || isNaN(visualizacoes) || visualizacoes.length === 0) {
        erro('Apenas números são aceitos', 'mensagemErroEngajamento');
    }
    else {
        engajamento.innerHTML = `${calcularEngajamento(interacoes, visualizacoes)}%`;
    }
}

function calcularEngajamento(interacoes, visualizacoes) {
    return (interacoes / visualizacoes) * 100
}


// Questão 04
let botaoCarregarImagem = document.getElementById('botaoCarregarImagem');
botaoCarregarImagem.addEventListener('click', exibirImagem);

function exibirImagem() {
    let arquivoSelecionado = uploadImagem.files[0];
    let resultadoImagem = document.getElementById('resultadoImagem');
    let imagem = document.createElement('img');

    if (arquivoSelecionado === undefined) {
        erro('Imagem não selecionada', 'mensagemErroImagem')
    }
    else {
        imagem.src = URL.createObjectURL(arquivoSelecionado);
        resultadoImagem.appendChild(imagem); 
    }   
}


// Questão 05
let seletorImagem = document.getElementById('selectImagem');
let imagem = document.createElement('img');


seletorImagem.addEventListener('change', function() {
    let resultadoImagem = document.getElementById('resultadoImagem2');
    let valorSelecionado = seletorImagem.value;

    imagem.src = valorSelecionado;
    resultadoImagem.appendChild(imagem);
});


// Questão 06
let botaoCheckbox = document.getElementById('enviarBtn');
let resultadoRedesSociais = document.getElementById('redesSelecionadas');

botaoCheckbox.addEventListener('click', exibirRedesSociais);

function exibirRedesSociais() {
    let todosCheckboxes = document.getElementsByName('redesSociais');

    let valoresSelecionados = [];

    for (let checkbox of todosCheckboxes) {
        if (checkbox.checked) {
            valoresSelecionados.push(checkbox.value);
        }
    }

    if (valoresSelecionados.length === 0) {
        erro('Selecione pelo menos uma rede social', 'mensagemErroCheckbox');
    } 
    else {
        resultadoRedesSociais.textContent = 'Você selecionou: ' + valoresSelecionados.join(', ');
    }
}

// Questão 07
let botaoAdicionarHashtag = document.getElementById('botaoAdicionarHashtag');
botaoAdicionarHashtag.addEventListener('click', adicionarHashtag);

function adicionarHashtag() {
    let hashtag = document.getElementById('caixaDeTextoHashtag').value;
    let select = document.getElementById('selectHashtag')

    if (hashtag.length === 0) {
        erro('Digite uma hashtag', 'mensagemErroHashtag');
    }
    else {
        let option = document.createElement('option');
        option.textContent = hashtag;
        select.appendChild(option);
    }
}

// Questão 08
let botaoAdicionarHashtag2 = document.getElementById('botaoAdicionarHashtag2');
botaoAdicionarHashtag2.addEventListener('click', adicionarHashtag2);

function adicionarHashtag2() {
    let hashtag = document.getElementById('caixaDeTextoHashtag2').value;
    let select = document.getElementById('selectHashtag2')

    let hashtagsAdicionadas = [];

    for (let i = 0; i < select.options.length; i++) {
        let conteudo = select.options[i].textContent;
        hashtagsAdicionadas.push(conteudo);
    }

    if (hashtagsAdicionadas.includes(hashtag)) {
        erro('A hashtag já foi adicionada', 'mensagemErroHashtag')
    }
    else if (hashtag.length === 0) {
        erro('Digite uma hashtag', 'mensagemErroHashtag');
    }
    else if (hashtag.length < 2) {
        erro('Digite uma hashtag com 2 ou mais caracteres', 'mensagemErroHashtag');
    }
    else if (hashtagsAdicionadas.length === 5) {
        erro('Já foram adicionadas 5 hashtags', 'mensagemErroHashtag');
    }
    else {
        let option = document.createElement('option');
        option.textContent = hashtag;
        select.appendChild(option);
    }
}

// Questão 09
let botaoAdicionarHashtag3 = document.getElementById('botaoAdicionarHashtag3');
botaoAdicionarHashtag3.addEventListener('click', adicionarHashtag3);

let botaoRemoverHashtag = document.getElementById('botaoRemoverHashtag');
botaoRemoverHashtag.addEventListener('click', removerHashtag);

function adicionarHashtag3() {
    let hashtag = document.getElementById('caixaDeTextoHashtag3').value;
    let select = document.getElementById('selectHashtag3')

    let hashtagsAdicionadas = [];

    for (let i = 0; i < select.options.length; i++) {
        let conteudo = select.options[i].textContent;
        hashtagsAdicionadas.push(conteudo);
    }

    if (hashtagsAdicionadas.includes(hashtag)) {
        erro('A hashtag já foi adicionada', 'mensagemErroHashtag2')
    }
    else if (hashtag.length === 0) {
        erro('Digite uma hashtag', 'mensagemErroHashtag2');
    }
    else if (hashtag.length < 2) {
        erro('Digite uma hashtag com 2 ou mais caracteres', 'mensagemErroHashtag2');
    }
    else if (hashtagsAdicionadas.length === 5) {
        erro('Já foram adicionadas 5 hashtags', 'mensagemErroHashtag2');
    }
    else {
        let option = document.createElement('option');
        option.textContent = hashtag;
        select.appendChild(option);
    }
}

function removerHashtag() {
    let select = document.getElementById('selectHashtag3');
    let selecionados = Array.from(select.selectedOptions);

    for (let selecionado of selecionados) {
        select.removeChild(selecionado);
    }
}

// Questão 10
let moverParaDireitaBtn = document.getElementById('moverParaDireitaBtn');
moverParaDireitaBtn.addEventListener('click', moverParaDireita);

let moverParaEsquerdaBtn = document.getElementById('moverParaEsquerdaBtn');
moverParaEsquerdaBtn.addEventListener('click', moverParaEsquerda);

function moverParaDireita() {
    let selectAtivosDisponiveis = document.getElementById('ativosDisponiveis');
    let selectCarteiraInvestimentos = document.getElementById('carteiraInvestimentos');
    let ativosDisponiveisSelecionados = Array.from(selectAtivosDisponiveis.selectedOptions);
    
    for (let ativo of ativosDisponiveisSelecionados) {
        selectCarteiraInvestimentos.appendChild(ativo);
    }
}

function moverParaEsquerda() {
    let selectCarteiraInvestimentos = document.getElementById('carteiraInvestimentos');
    let selectAtivosDisponiveis = document.getElementById('ativosDisponiveis');
    let carteiraInvestimentosSelecionados = Array.from(selectCarteiraInvestimentos.selectedOptions);

    for (let ativo of carteiraInvestimentosSelecionados) {
        selectAtivosDisponiveis.appendChild(ativo);
    }
}

// Questão 11
document.addEventListener('DOMContentLoaded', function() {
    let moverParaDireitaBtn2 = document.getElementById('moverParaDireitaBtn2');
    moverParaDireitaBtn2.addEventListener('click', moverParaDireita2);

    let moverParaEsquerdaBtn2 = document.getElementById('moverParaEsquerdaBtn2');
    moverParaEsquerdaBtn2.addEventListener('click', moverParaEsquerda2);

    let selectAtivosDisponiveis = document.getElementById('ativosDisponiveis2');

    let selectCarteiraInvestimentos = document.getElementById('carteiraInvestimentos2');

    function atualizarBotoes() {
        let temOpcoesNaEsquerda = selectAtivosDisponiveis.options.length > 0;
        let temOpcoesNaDireita = selectCarteiraInvestimentos.options.length > 0;

        moverParaDireitaBtn2.disabled = !temOpcoesNaEsquerda;
        moverParaEsquerdaBtn2.disabled = !temOpcoesNaDireita;
    }

    function moverParaDireita2() {
        let ativosDisponiveisSelecionados = Array.from(selectAtivosDisponiveis.selectedOptions);
        
        if (ativosDisponiveisSelecionados.length !== 0) {
            for (let ativo of ativosDisponiveisSelecionados) {
                selectCarteiraInvestimentos.appendChild(ativo);
            }
        }

        atualizarBotoes();
    }

    function moverParaEsquerda2() {
        let carteiraInvestimentosSelecionados = Array.from(selectCarteiraInvestimentos.selectedOptions);

        if (carteiraInvestimentosSelecionados.length !== 0) {
            for (let ativo of carteiraInvestimentosSelecionados) {
                selectAtivosDisponiveis.appendChild(ativo);
            }
        }

        atualizarBotoes();
    }

    atualizarBotoes();
});
