/**
 * Created by alejandro on 13/10/2016.
 * Implementa NumeroPrimo que pida un número e indique si es primo o no
 */

function numeroPrimo() {
    let numero = prompt("Introduce un número");

if (isNaN(numero)) {
    console.log("NO has introducido un número");

} else {

    if (numero == 1 || numero == 2) {
        console.log("El número " + numero + " es primo");
    } else {

        for (i=2;i<numero;i++) {
            if (numero % i == 0) {
                console.log("El número " + numero + " no es primo");
                break;

            } else {
                console.log("El número " + numero + " es primo");
                break;
            }
        }

    }

}
}

numeroPrimo();
