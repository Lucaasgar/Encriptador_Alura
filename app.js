/*
    La letra "a" es convertida para "ai"
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"
*/

const btnEncriptar = document.getElementById('btn-encriptar');
const btnDesencriptar = document.getElementById('btn-desencriptar');
const regex = /^[a-z\s]+$/;
const textArea = document.querySelector('textarea');
const sol = document.getElementById('sol');
let modoClaro = true;

sol.addEventListener('click', () => {
    if(modoClaro){
        sol.setAttribute('src', 'Imagenes/moon.png');
        document.getElementById('container').style.backgroundColor = '#555555';
        document.getElementById('right').style.backgroundColor = '#777777';
        textArea.style.backgroundColor = '#777777';
        modoClaro = false;
    }else {
        sol.setAttribute('src', 'Imagenes/sun.png');
        document.getElementById('container').style.backgroundColor = '#F3F5FC';
        modoClaro = true;
    }
})

textArea.addEventListener('click', () => {
    textArea.value= '';
    document.getElementById('ocultar-muñeco').setAttribute('src', 'Imagenes/Search.png');
    document.getElementById('titulo-right').textContent = 'Ningún mensaje fue encontrado';
    document.getElementById('parrafoImg').textContent = 'Ingresa el texto que desees encriptar o desencriptar.';
})

function errorImg(){
    document.getElementById('ocultar-muñeco').setAttribute('src', 'Imagenes/Error.png');
}

function foundImg(){
    document.getElementById('ocultar-muñeco').setAttribute('src', 'Imagenes/Launch.png');
}

function encriptar() {
    let texto = document.getElementById('input');

    if(texto.value.length != 0){
        if(regex.test(texto.value)){
            let textoEncriptado = texto.value
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g , 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
        
            foundImg();
            document.getElementById('titulo-right').textContent = 'El mensaje fue encriptado';

            texto.value = textoEncriptado;
        
        }else {
            errorImg();
            document.getElementById('titulo-right').textContent = 'Ningún mensaje fue encontrado';
            document.getElementById('parrafoImg').textContent = 'Solo letras minúsculas y sin acento.';
        }   
    }else {
        errorImg();
        document.getElementById('titulo-right').textContent = 'Ningún mensaje fue encontrado';
        document.getElementById('parrafoImg').textContent = 'Debes ingresar un texto.';
    }
    
}

function desencriptar() {
    let texto = document.getElementById('input');

    if(texto.value.length != 0){
        if(regex.test(texto.value)) {
            let textoDesencriptado = texto.value
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
            
            foundImg();
            document.getElementById('titulo-right').textContent = 'El mensaje fue desencriptado';
            texto.value = textoDesencriptado;
        }else {
            errorImg();
            document.getElementById('titulo-right').textContent = 'Ningún mensaje fue encontrado';
            document.getElementById('parrafoImg').textContent = 'Solo letras minúsculas y sin acento.';
        }
    }else {
        errorImg();
        document.getElementById('titulo-right').textContent = 'Ningún mensaje fue encontrado';
        document.getElementById('parrafoImg').textContent = 'Debes ingresar un texto.';
    }
    
}

btnEncriptar.addEventListener('click', () => {
    encriptar();
})

btnDesencriptar.addEventListener('click', () => {
    desencriptar();
})
