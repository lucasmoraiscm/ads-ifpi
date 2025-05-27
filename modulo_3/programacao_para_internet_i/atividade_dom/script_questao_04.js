// selecione o botão usando o método getElementById
var botao = document.getElementById("botao");

// selecione o parágrafo usando o método getElementById
var paragrafo = document.getElementById("paragrafo");

// adicione um evento de clique ao botão
botao.addEventListener("click", function() {
    // altere o texto do parágrafo
    paragrafo.textContent = "O texto deste parágrafo foi alterado!";
});

// selecione o botão de limpar
var botaoLimpar = document.getElementById("botao_limpar");

// adicione um evento de clique ao botão
botaoLimpar.addEventListener("click", function() {
    // limpar o texto do parágrado
    paragrafo.textContent = "";
});