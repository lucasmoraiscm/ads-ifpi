var botaoFundoPreto = document.getElementById("botaoFundoPreto");
var botaoResetar = document.getElementById("botaoResetar");

botaoFundoPreto.addEventListener("click", function(){
    document.body.style.background = 'black';
    document.body.style.color = 'white';
});

botaoResetar.addEventListener("click", function(){
    document.body.style.background = 'white';
    document.body.style.color = 'black';
});