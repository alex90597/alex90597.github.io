/**
 * Created by alejandro on 14/10/2016.
 * 18. Implementa PorLineas que visualize los números del 0 al 100 separados por comas
 * Cada múltiplo de 7 ha de comenzar en una línea nueva
 */

var cadena = "";

for(i=0; i<=100;i++) {
    if(i % 7 == 0) {
        cadena+= "\n"+i + ", ";
    } else {
        cadena+= i + ", ";
    }

}

console.log(cadena);
