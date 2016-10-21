/**
 * Created by alejandro on 14/10/2016.
 * Implementa CerosYUnos que lea una secuencia de ceros y unos.
 * Mostrará el número de ceros de la secuencia.
 * Dejará de leer cuando el usuario introduzca el número 2
 */

function contarCeros() {
    let control;
let cadena="";
let numeroDeCeros=0;

while(control != 2) {
    cadena = prompt("Introduce un 1 o un 0. Introduce 2 para terminar");

    if(cadena != 0 && cadena != 1 && cadena != 2) {
        console.log("No has introducido algún número permitido (0,1,2)");
    } else {

        if (cadena == "2") {
            control = 2;
        } else if (cadena == "0") {
            numeroDeCeros++;
        }

    }

}

return console.log("Se han introducido " + numeroDeCeros + " ceros");
}

contarCeros();

