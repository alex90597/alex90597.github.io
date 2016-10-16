/**
 * Created by alejandro on 13/10/2016.
 * Implementa MultiplosDeCinco que pida 7 números e indique si alguno es múltiplo de 5
 */


/**
  * @type {Array}
 */
var numeros = new Array(7);

for(i=0; i<numeros.length;i++) {
    numeros[i] = prompt("Introduce un número:");

}

for(i=0;i<numeros.length;i++) {
    if(numeros[i] % 5 == 0) {
        console.log("El número "+numeros[i] + " es múltiplo de 7");
    }
}
