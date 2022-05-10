const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");
let copyText= document.querySelector(".copy-text");

function copy() {
    let copyText = document.querySelector(".mensagem");
    copyText.select();
    document.execCommand("copy");
    copySuccessfully();
  }

function btnEncriptar(){
    textoEncriptado = encriptar(inputTexto.value);
    mensagem.value = textoEncriptado;
    mensagem.style.backgroundImage="none";
}

function btnDesencriptar(){
    textoDesencriptado = desencriptar(inputTexto.value);
    mensagem.value = textoDesencriptado;
    mensagem.style.backgroundImage="none";
}


function encriptar(stringEncriptada){
    let matrizCodigo = [["a", "ai"],["e","enter"], ["i","imes"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["ai", "a"],["enter","e"], ["imes","i"], ["ober","o"], ["ufat","u"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][0])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringDesencriptada;
}