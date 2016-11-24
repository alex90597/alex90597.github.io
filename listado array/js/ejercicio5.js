/**
 * Created by alejandro on 04/11/2016.
 */

function devuelveArray() {
    let array = [];

    for(i=0; i<arguments.length; i++) {
        array[i] = arguments[i];
    }

    return array;
}

let contenido = devuelveArray("Alejandro","aa",34,542,false,78.4,true);

console.log(contenido);
