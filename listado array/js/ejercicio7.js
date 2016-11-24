/**
 * Created by alejandro on 05/11/2016.
 */

function eliminaUndefined(array) {
    for(i=0; i<array.length; i++) {
        if(array[i] == undefined) {
            array.splice(i,i);
        }
    }

    return array;
}

let a = ["Alejandro","Carrillo",undefined,undefined,23,54,false,true];

console.log(eliminaUndefined(a));
