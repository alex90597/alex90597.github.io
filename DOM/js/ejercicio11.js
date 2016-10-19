/**
 * Created by alejandro on 18/10/2016.
 * A partir de la página web proporcionada y utilizando las funciones DOM, mostrar por pantalla la
 * siguiente información:
 * 1. Número de enlaces de la página
 * 2. Dirección a la que enlaza el penúltimo enlace
 * 3. Número de enlaces que enlazan a http://prueba
 * 4. Número de enlaces del tercer párrafo
 */

/**
 * Obtiene todos los enlaces del documento
 */
function obtenerEnlaces() {
    let enlaces = document.getElementsByTagName("a");

    return console.log("El número de enlaces de la página es "+ enlaces.length);

}

/**
 * Muestra a donde enlaza el penúltimo enlace
 */
function penultimoEnlace() {
    let enlaces = document.getElementsByTagName("a");
    let penultimoEnlace = enlaces[5];

    return console.log("La dirección a la que enlaza el penúltimo enlace es: " + penultimoEnlace.href);
}

/**
 * Muestra el número de enlaces que llevan a http://prueba
 */
function numeroEnlacesQueEnlazan() {
    let enlaces = document.getElementsByTagName("a");
    let contador =0;
    for(i=0;i<enlaces.length;i++) {
        if(enlaces[i].href == "http://prueba" || enlaces[i].href == "http://prueba/") {
            contador++;
        }
    }

    return console.log("El número de enlaces que enlazan a http://prueba es: " + contador);
}

/**
 * Muestra el número de enlaces que contiene el tercer párrafo
 */
function numeroEnlacesTercerParrafo() {
    let parrafos = document.getElementsByTagName("p");
    let enlaces = parrafos[2].getElementsByTagName("a");

    return console.log("El número de enlaces del tercer párrafo es: "+enlaces.length);
}

obtenerEnlaces();
penultimoEnlace();
numeroEnlacesQueEnlazan();
numeroEnlacesTercerParrafo();








