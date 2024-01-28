/*
    La letra "a" es convertida para "ai"
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"
*/

function displayImg(text) {
    document.getElementById('ocultar-muñeco').style.display = 'none';
    document.getElementById('ocultar-muñeco-texto').style.display = 'none';
    document.getElementById('result').textContent = text;
    document.getElementById('copy').removeAttribute('hidden');
}

let text = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'


