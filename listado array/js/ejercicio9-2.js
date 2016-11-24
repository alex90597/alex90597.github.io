/**
 * Created by alejandro on 06/11/2016.
 */

let array = new Array(10);
array[0] = "Alejandro";





for (i=0; i<10; i++) {
    array.push(i);
}


for(i=0; i<10; i++) {
    array.unshift("Elemento " + i);
}

for(i=0; i<10; i++) {
    array.pop();
}

for(i=0; i<10; i++) {
    array.shift();
}

console.log(array);




