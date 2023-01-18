function textoPermitido (texto) {
    
    let permitido = /[a-z]/g;  
    let vacio="";  
      
    if(texto.match(permitido)){
        return true; 
    }else if(texto==vacio){
       alert("Ingrese texto");
        return false;
   }else {
        alert("No se permiten caracteres especiales ni mayusculas");
        return false;
    }
}
document.getElementById("texto-ingresado").focus();
let buttonEncriptar = document.querySelector(".button1");

buttonEncriptar.addEventListener("click",function ()  {
    let texto = document.querySelector(".texto").value;
    let textoIngresado = texto;
   
    if (textoPermitido (textoIngresado) == true) {       
        let Encriptado = encriptar(textoIngresado);
        let resultado = document.querySelector(".text-salida");
        resultado.value = Encriptado;
    } else {        
        texto = "";     
     
    }
               
})

const reglas = { "e":"enter","i":"imes","a":"ai","o":"ober","u":"ufat"};

function encriptar (textoIngresado) {
    let Encriptado = "";
    for (const palabras in reglas) {
        Encriptado = textoIngresado.replaceAll(palabras,reglas[palabras]);
        textoIngresado = Encriptado;        
    }
    return (Encriptado);
}


let buttonCopiar = document.querySelector(".button3");

buttonCopiar.addEventListener("click",function(){        
    let Copiado = document.querySelector(".text-salida").value;
    navigator.clipboard.writeText(Copiado);
    document.querySelector(".texto").value="";

});

let buttonDesencriptar = document.querySelector(".button2");

buttonDesencriptar.addEventListener("click", function(){
    let textoIngresado = document.querySelector(".texto").value;
    let textoEncriptado = textoIngresado

    if (textoEncriptado == "") {
        alert("Ingrese texto");
        return true;
    } else {
        let Desencriptado = desencriptar(textoIngresado);
        let resultado = document.querySelector(".text-salida");
        resultado.value = Desencriptado;
    }
})


function desencriptar (textoIngresado) {
    let Encriptado = "";
    for (const palabras in reglas) {
        Encriptado = textoIngresado.replaceAll(reglas[palabras],palabras);
        textoIngresado = Encriptado;        
    }
    return (Encriptado);
}


