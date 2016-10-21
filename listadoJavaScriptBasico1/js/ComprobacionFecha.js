/**
 * Created by alejandro on 16/10/2016.
 * Implementa ComprobacionFecha que solicite el día, el mes y el año e indique si la
 * fecha es correcta. Si lo fuera, ha de monstrar el día después.
 */

function compruebaFecha() {
	let dia = prompt("Introduce un día");
let mes = prompt("Introduce un mes");
let annio = prompt("Introduce un año");

let cadena = annio+"-"+mes+"-"+dia;
let fecha = new Date(cadena);

if (fecha == "Invalid Date") {
    return console.log("La fecha introducida no es válida");
} else  {
    fecha.setSeconds(86400);
    return console.log("Fecha final: " + fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear());
}
}

compruebaFecha();