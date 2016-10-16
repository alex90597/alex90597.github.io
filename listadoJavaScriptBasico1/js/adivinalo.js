/**
 * Created by alejandro on 13/10/2016.
 * Implementar el juego "Adivínalo". Consiste en que el usuario ha de adivinar un número entre 1 y el 100.
 * Mostrará un mensaje para indicar que has acertado o para indicar si la solución es mayor o menor.
 * Al finalizar se le preguntará al usuario si quiere repetir el juego.
 */

/**
 * Función que devuelve un número aleatorio comprendido entre a y b
 * @param a
 * @param b
 * @returns {number}
 */
function numeroAleatorio(a,b) {
   return Math.round(Math.random()*(b-a));
}


var jugar="s";

/**
 * Comprueba el número introducido por el usuario y lo compara con el generado por el sistema
 */
function comprobacion() {
    let n1= numeroAleatorio(1,100);
    let n2 = prompt("Introduce un número entero entre 1 y 100:");
    if (isNaN(n2)) {

        alert("NO has introducido un número");

    } else {
        if (n2 % 1 != 0) {

            alert("El número introducido es un número decimal");

        } else {
            if (n2 < 1 || n2 > 100) {
                alert("Has introducido un número menor de 1 o mayor de 100");
            } else {
                if (n1 == n2) {
                    alert("ENHORABUENA has acertado");
                } else if (n1 < n2) {
                    alert("No has acertado. El número introducido(" + n2 + ") es mayor que el número generado (" + n1 + ")");
                } else if (n1 > n2) {
                    alert("No has acertado. El número introducido(" + n2 + ") es menor que el número generado (" + n1 + ")");
                }
            }

        }
    }

    jugar = prompt("¿Quieres jugar otra vez? s/n");


}

while (jugar == "s") {
    comprobacion();
}

   





