/**
 * Created by alejandro on 14/10/2016.
 * 16. Immplementa Piramide que mediante un bucle for visualize una pirámide del siguiente tipo:
 * 1
 * 22
 * 333
 * 4444
 * 55555
 * 666666
 * 7777777
 * 88888888
 * 999999999
 * 0000000000
 */
var cadena="";

for (var i = 0; i <= 9; i++) {
    cadena+="\n";

    for (var x = 0; x < i; x++) {
        cadena+= i;

    }
}

cadena+="\n";
cadena+="0000000000";

var fecha = new Date();

console.log(cadena);








