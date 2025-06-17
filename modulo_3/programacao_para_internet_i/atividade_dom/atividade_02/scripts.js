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
    let todosCheckboxes = document.querySelectorAll('input[name="redesSociais"]');

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