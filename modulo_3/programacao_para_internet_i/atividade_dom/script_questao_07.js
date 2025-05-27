var textoOriginal = document.getElementById("textoOriginal");
var textoCaixaAlta = document.getElementById("textoCaixaAlta");
var botao = document.getElementById("botao");


botao.addEventListener("click", function() {
    const texto = textoOriginal.value;
    textoCaixaAlta.value = texto.toUpperCase();
});
