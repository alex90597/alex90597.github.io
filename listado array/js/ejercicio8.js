/**
 * Created by alejandro on 06/11/2016.
 */

let array = ["Alejandro",43,564,false,true,"Carrillo"];

//Ejemplo de forEach
array.forEach(function(value, index, array){
    console.log("Índice: " + index + " Contenido: " + value);
});

//Ejemplo de every()
function esSuficientementeGrande(elemento, indice, arrreglo) {
    return elemento >= 10;
}

let array2 =[12, 5, 8, 130, 44];
let array3 =[12, 54, 18, 130, 44];

console.log("La función every() en array2 devuelve: "+array2.every(esSuficientementeGrande));
console.log("La función every() en array3 devuelve: "+array3.every(esSuficientementeGrande));

//Ejemplo de some()
function isBiggerThan10(element, index, array) {
    return element > 10;
}
let array4 =[2, 5, 8, 1, 4];
let array5 =[12, 5, 8, 1, 4];

console.log("La función some() en array4 devuelve: "+array4.some(isBiggerThan10));
console.log("La función some() en array5 devuelve: "+array5.some(isBiggerThan10));

//Ejemplo de filter()
var filtrados = [12, 5, 8, 130, 44].filter(esSuficientementeGrande);

console.log("filter() nos devuelve: " + filtrados);