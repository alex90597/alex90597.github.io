/**
 * Created by alejandro on 14/10/2016.
 * 17. Implementa PiramideDos que mediante un bucle for visualice una pirámide del siguiente tipo:
 * 1
 * 12
 * 123
 * 1234
 * 12345
 * 123456
 * 1234567
 * 12345678
 * 123456789
 * 1234567890
 */

var cadena="";

for(i=1; i < 10; i++) {
    cadena+= i;
    console.log(cadena);
}

console.log(cadena+0);
