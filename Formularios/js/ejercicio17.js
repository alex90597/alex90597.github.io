/**
 * Created by alejandro on 21/10/2016.
 */

function limita(Elevento,maximoCaracteres) {
    let elemento = document.getElementById("texto");

    let evento = Elevento;
    let tecla = evento.charCode || evento.keyCode;

    //Permitimos la utilización de las flechas horizontales
    if(tecla == 37 || tecla == 39 || tecla == 8 || tecla == 46) {
        return true;
    } else if(elemento.value.length >= maximoCaracteres) {
        return false;
    } else {
        return true;
    }
}


function actualizaNumeroCaracteres(maximoCaracteres) {
    let texto = document.getElementById("texto");
    let divInfo = document.getElementById("info");

    if(texto.value.length >= maximoCaracteres) {
        divInfo.innerHTML = "Máximo "+maximoCaracteres+" caracteres";
    } else {
        info.innerHTML = "Puedes escribir hasta "+(maximoCaracteres-texto.value.length)+" caracteres adicionales";
    }
}

