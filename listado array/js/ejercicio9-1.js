/**
 * Created by alejandro on 06/11/2016.
 */

let array = new Array(10);

//Push
for (i=0; i<10; i++) {
    array.push(i);
}

//unshift
for(i=0; i<10; i++) {
    array.unshift("Elemento " + i);
}

console.log(array);
