const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");

//      La letra "e" es convertida para "enter"
//      La letra "i" es convertida para "imes"
//      La letra "a" es convertida para "ai"
//      La letra "o" es convertida para "ober"
//      La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const TextoEncriptado = encriptar(inputTexto.value);
    mensaje.value = TextoEncriptado;
    mensaje.style.backgroundImage ="none"
    inputTexto.value = ""
}

function btnDesencriptar(){
    const TextoEncriptado = desencriptar(inputTexto.value);
    mensaje.value = TextoEncriptado;
    inputTexto.value = ""
}

function btnCopiar(){
    const mensaje = copiar("");
    alert("Mensaje Copiado");
}

function encriptar(stringEncriptada){
    let codigoMatriz = [["e", "enter"],["i", "imes"],["a", 'ai'],["o", "ober"],["u", "ufat"]];

        for(let i = 0; i < codigoMatriz.length; i++){
            if(stringEncriptada.includes(codigoMatriz[i][0])){
                stringEncriptada = stringEncriptada.replaceAll
                (codigoMatriz[i][0],codigoMatriz[i][1])
        }
    }
    return stringEncriptada;
}

function desencriptar(stringDesencriptada){

    let codigoMatriz = [["e", "enter"],["i", "imes"],["a", 'ai'],["o", "ober"],["u", "ufat"]];

    for( let i = 0; i < codigoMatriz.length; i++){
        if(stringDesencriptada.includes(codigoMatriz[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll
            (codigoMatriz[i][1], codigoMatriz[i][0])
            }
    }
    return stringDesencriptada;
}

function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value);
}