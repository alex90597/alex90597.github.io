/**
 * Created by alejandro on 14/10/2016.
 * Implementa Decena que solicite un número entre 0 y 10 e indique:
 * a) Cuántas cifras tiene
 * b) Lo muestre al revés
 */

var numero;
while(isNaN(numero) || numero < 0 || numero >10) {
    numero = prompt("Introduce un número entre 0 y 10");
}

console.log("El número " + numero + " tiene " + numero.length + " cifras");

var array_numeros = new Array(numero.length);
numero.toString();

for(i=0; i<array_numeros.length;i++) {
    array_numeros[i] = numero.substring(i,i+1);
}

console.log(array_numeros.reverse().join(""));
