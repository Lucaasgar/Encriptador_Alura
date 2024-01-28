/*
    La letra "a" es convertida para "ai"
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"
*/

const btnEncriptar = document.getElementById('btn-encriptar');
const btnDesencriptar = document.getElementById('btn-desencriptar');
const regex = /^[a-z]+$/;


function hiddenImg() {
    document.getElementById('ocultar-muñeco').style.display = 'none';
    document.getElementById('ocultar-muñeco-texto').style.display = 'none';
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
            
            hiddenImg();
            texto.value = textoEncriptado;
        
        }else {
            alert("No se permiten acentos, caracteres especiales o en mayusculas.");
        }
    }else {
        alert("Debes ingresar un texto");
        
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
    
            texto.value = textoDesencriptado;
        }else {
            alert("No se permiten acentos, caracteres especiales o en mayusculas.");
        }
    }else {
        alert("Debes ingresar algun texto");
    }
    
}

btnEncriptar.addEventListener('click', () => {
    encriptar();
})

btnDesencriptar.addEventListener('click', () => {
    desencriptar();
})