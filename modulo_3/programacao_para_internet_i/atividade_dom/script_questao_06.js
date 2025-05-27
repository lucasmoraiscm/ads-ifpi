// selecione o botão usando o método getElementById
var botao = document.getElementById("botao");
var div = document.getElementById("minhaDiv");

// adicione um evento de clique ao botão
botao.addEventListener("click", function() {
    // altere a cor da DIV
    div.style.background = 'red'
    div.innerHTML = 'A cor da DIV agora é vermelha'
});