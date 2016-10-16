/**
 * Created by alejandro on 16/10/2016.
 * Implementa ComprobacionFecha que solicite el día, el mes y el año e indique si la
 * fecha es correcta. Si lo fuera, ha de monstrar el día después.
 */

var dia = prompt("Introduce un día");
var mes = prompt("Introduce un mes");
var annio = prompt("Introduce un año");

var cadena = annio+"-"+mes+"-"+dia;
var fecha = new Date(cadena);

if (fecha == "Invalid Date") {
    console.log("La fecha introducida no es válida");
} else  {
    fecha.setSeconds(86400);
    console.log("Fecha final: " + fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear());
}