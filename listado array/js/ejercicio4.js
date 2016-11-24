/**
 * Created by alejandro on 04/11/2016.
 */

let longitud = document.getElementById("longitud");
let enviar = document.getElementById("Enviar");
let contenedor = document.getElementById("contenido");
let array;


enviar.addEventListener("click",function() {
    if(longitud.value <= 0) {
        contenedor.innerHTML = "<p>Debes introducir un número mayor de 0</p>";
    } else {
        array = new Array(parseInt(longitud.value));

        for(i=0; i<array.length; i++) {
            array[i] = i;
        }

        console.log(array);


    }
});