/**
 * Created by alejandro on 14/10/2016.
 * Implementa CalculaMedia que pida números hasta que se introduzca uno negativo
 * Entonces, que muestre la media
 */

var numero_control=0;
var numeros = [];
var suma=0;

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

console.log(suma/numeros.length);
