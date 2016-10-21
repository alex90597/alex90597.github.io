/**
 * Created by alejandro on 14/10/2016.
 * Implementa MuestraDelUnoAN que pida un número entero y que muestre la secuencia del 1 al número indicado.
 * En caso de no poder generarse la secuencia (menor que 1) que lo indique.
 */

function mostrarNumeros() {
	let numero = prompt("Introduce un número entero mayor que 1");

if (isNaN(numero)) {
    console.log("NO has introducido un número");

} else {


    if (numero <= 1) {
        console.log("Has introducido un número menor que 1");

    } else {
        for(i=0;i<=numero;i++) {
            console.log(i);
        }
    }

}
}

mostrarNumeros();
