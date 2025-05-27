var botaoAumentarFonte = document.getElementById("botaoAumentar");
var botaoDiminuirFonte = document.getElementById("botaoDiminuir");
var estiloComputado = window.getComputedStyle(document.body);
var tamanhoFonteAtual = parseFloat(estiloComputado.fontSize);

botaoAumentarFonte.addEventListener("click", function(){
    tamanhoFonteAtual += 1;
    document.body.style.fontSize = tamanhoFonteAtual + "px";
});

botaoDiminuirFonte.addEventListener("click", function(){
    tamanhoFonteAtual -= 1;
    document.body.style.fontSize = tamanhoFonteAtual + "px";
});