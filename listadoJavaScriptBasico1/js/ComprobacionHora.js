/**
 * Created by alejandro on 16/10/2016.
 * Implementa ComprobacionHora que solicite los segundos, minutos y hora e indique si
 * es correcta. Si lo fuera, ha de mostrar la hora un segundo después
 */

var horas = prompt("Introduce las horas");
var minutos = prompt("Introduce los minutos");
var segundos = prompt("Introduce los segundos");

if (isNaN(horas) || isNaN(minutos) || isNaN(segundos)) {
    console.log("No has introducido valores numéricos");

} else {
    if (horas < 0 || horas > 24) {
        console.log("Hora invalida");
    }else if (minutos < 0 || minutos > 59) {
        console.log("Minutos invalidos") ;
    }else if (segundos <0 || segundos > 59) {
        console.log("Segundos invalidos");
    }else{
        var tiempo = new Date(1991,03,30,horas,minutos,segundos);
        tiempo.setSeconds(tiempo.getSeconds()+1);
        console.log("H: "+tiempo.getHours()+" M: "+tiempo.getMinutes()+" S: "+tiempo.getSeconds());
    }
}
