/**
 * Created by alejandro on 13/10/2016.
 * Implementa OrdenaTres que pida tres números y los muestre ordenados de menor a mayor
 */



function ejemplo() {

    var numeros = new Array(3);

    for(i=0;i<numeros.length;i++) {
        numeros[i] = prompt("Introduce un número:");
    }
    var msg ='El array original es: ' + numeros +'\n';
    msg = msg + 'Ordenado de mayor a menor es ' + numeros.sort(deMayorAMenor)+'\n';
    msg = msg + 'Ordenado de menor a mayor es ' + numeros.sort(deMenorAMayor)+'\n';
    console.log(msg);
}
function deMenorAMayor(elem1, elem2) {return elem1-elem2;}
function deMayorAMenor(elem1, elem2) {return elem2-elem1;}

ejemplo();
