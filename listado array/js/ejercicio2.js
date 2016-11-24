/**
 * Created by alejandro on 04/11/2016.
 */

let arboles = ["secoya","pino","cedro","roble","arce"];

console.log(0 in arboles); //retorna true

console.log(3 in arboles); //retorna true

console.log(6 in arboles); //retorna false

//Ejemplo de uso con el bucle for in
for(valor in arboles) {
    console.log("Índice: " + valor + " Contenido: " + arboles[valor]);
}