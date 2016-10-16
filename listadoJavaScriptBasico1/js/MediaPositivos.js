/**
 * Created by alejandro on 14/10/2016.
 * Implementa MediaPositivos que calcule la media de una serie de números positivos introducidos por teclado
 * Dejará de leer cuando el usuario introduzca el 0
 */

var numero_control;
var numeros = [];
var suma=0;

while(numero_control != 0) {
    numero_control = prompt("Introduce un número. Introduce el 0 para mostrar la media");

    if(isNaN(numero_control) || numero_control < 0) {
        console.log("No has introducido un número o el número introducido es menor que 0");

    } else if (numero_control == 0){

    } else {
        numeros.push(numero_control);

    }

}

for(i=0;i<numeros.length;i++) {
    suma+= parseInt(numeros[i]);
}

console.log(suma/numeros.length);
