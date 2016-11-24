/**
 * Created by alejandro on 04/11/2016.
 */

function devuelveArray() {
    let array = [];

    for(i=0; i<arguments.length; i++) {

        if(Array.isArray(arguments[i])) {
            for(elemento in arguments[i]) {
                array.push(arguments[i][elemento]);
            }
        } else {
            array[i] = arguments[i];
        }
    }

    return array;
}

let a = ["Alejandro","Carrillo"];
let c = ["hOLA","ADIOS",true,false];

let b = devuelveArray(a,12,34,c);

console.log(b);

