function getById(id) {
    return document.getElementById(id);
}

function getByTag(tag) {
    return document.getElementsByTagName(tag);
}

let paragrafo1 = getById('paragrafo1');
let paragrafo2 = getById('paragrafo2');
let resultado = getById('resultado');

let divParagrafos = getById('divParagrafos');
let paragrafos = divParagrafos.children;

let listaParagrafos = getByTag('p');

let contador = 0;

for (let i = 0; i < paragrafos.length; i++) {
    contador++
}

resultado.innerText = 'Número de paragrafos: ' + contador;
