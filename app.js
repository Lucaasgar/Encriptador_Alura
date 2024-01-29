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
const logo = document.getElementById('logo');
const btnCopy = document.getElementById('copy');

function errorImg(){
    document.getElementById('ocultar-muñeco').setAttribute('src', 'Imagenes/Error.png');
    btnCopy.setAttribute('hidden');
}

function foundImg(){
    document.getElementById('ocultar-muñeco').setAttribute('src', 'Imagenes/Launch.png');
    btnCopy.removeAttribute('hidden');
}
function encriptar() {
    let texto = document.getElementById('input');

    if(texto.value.length != 0 ){
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

let modoClaro = true;

sol.addEventListener('click', () => {
    if(modoClaro){
        sol.setAttribute('src', 'Imagenes/moon.svg');
        sol.style.backgroundColor = '#040D12';
        sol.style.fill = '#5C8374';

        document.getElementById('container').style.backgroundColor = '#040D12';
        document.getElementById('right').style.backgroundColor = '#5C8374';

        logo.style.fill = '#5C8374';

        textArea.style.backgroundColor = '#5C8374';
        textArea.style.color = '#040D12';

        btnDesencriptar.style.backgroundColor = '#5C8374';
        btnDesencriptar.style.borderColor = '#5C8374';
        btnDesencriptar.style.color = '#040D12';

        btnEncriptar.style.backgroundColor = '#5C8374';
        btnEncriptar.style.color = '#040D12';

        btnCopy.style.backgroundColor = '#346751';
        btnCopy.style.borderColor = '#5C8374';
        btnCopy.style.color = '#040D12';

        modoClaro = false;
    }else {
        sol.setAttribute('src', 'Imagenes/sun.png');
        sol.style.backgroundColor = '#F3F5FC';

        document.getElementById('container').style.backgroundColor = '#F3F5FC';
        document.getElementById('right').style.backgroundColor = '#fff';

        logo.style.fill = '#0A3871';

        textArea.style.backgroundColor = '#F3F5FC';
        textArea.style.color = '#0A3871';

        btnDesencriptar.style.backgroundColor = '#D8DFE8';
        btnDesencriptar.style.borderColor = '#0A3871';

        btnEncriptar.style.backgroundColor = '#0A3871';
        btnEncriptar.style.color = '#fff';

        btnCopy.style.backgroundColor = '#0A3871';
        btnCopy.style.borderColor = '#0A3871';
        btnCopy.style.color = '#D8DFE8';

        modoClaro = true;
    }
})

textArea.addEventListener('click', () => {
    textArea.value= '';
    btnCopy.setAttribute('hidden', 'true');
    document.getElementById('ocultar-muñeco').setAttribute('src', 'Imagenes/Search.png');
    document.getElementById('titulo-right').textContent = 'Ningún mensaje fue encontrado';
    document.getElementById('parrafoImg').textContent = 'Ingresa el texto que desees encriptar o desencriptar.';
})



btnEncriptar.addEventListener('click', () => {
    encriptar();
})

btnDesencriptar.addEventListener('click', () => {
    desencriptar();
})
