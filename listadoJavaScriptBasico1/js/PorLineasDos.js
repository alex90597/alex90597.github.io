/**
 * Created by alejandro on 14/10/2016.
 * 19. Implementa PorLineasDos que visualize los números del 0 al 100 separados por comas.
 * Cada múltiplo de 7 o finalizado en 7 ha de comenzar en una línea nueva
 */

var cadena = "";

for(i=0; i<=100;i++) {
    if(i % 7 == 0 || i % 10 == 7) {
        cadena+= "\n"+i + ", ";
    } else {
        cadena+= i + ", ";
    }

}

console.log(cadena);
