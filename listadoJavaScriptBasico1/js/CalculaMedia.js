/**
 * Created by alejandro on 14/10/2016.
 * Implementa CalculaMedia que pida números hasta que se introduzca uno negativo
 * Entonces, que muestre la media
 */

/**
*Calcula la media de los números que le introducimos
*/
function calcularMedia() {
	let numero_control=0;
let numeros = [];
let suma=0;

while(numero_control >= 0) {
    numero_control = prompt("Introduce un número. Introduce un número negativo para mostrar la media");

    if(isNaN(numero_control)) {
        console.log("No has introducido un número");

    } else if (numero_control < 0){

    } else {
        numeros.push(numero_control);

    }

}

for(i=0;i<numeros.length;i++) {
    suma+= parseInt(numeros[i]);
}

return console.log(suma/numeros.length);
}

calcularMedia();
