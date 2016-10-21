/**
 * Created by alejandro on 16/10/2016.
 * Implementa ComprobacionHora que solicite los segundos, minutos y hora e indique si
 * es correcta. Si lo fuera, ha de mostrar la hora un segundo después
 */

function comprobacionHora() {
    let horas = prompt("Introduce las horas");
let minutos = prompt("Introduce los minutos");
let segundos = prompt("Introduce los segundos");

if (isNaN(horas) || isNaN(minutos) || isNaN(segundos)) {
    console.log("No has introducido valores numéricos");

} else {
    if (horas < 0 || horas > 24) {
        return console.log("Hora invalida");
    }else if (minutos < 0 || minutos > 59) {
        return console.log("Minutos invalidos") ;
    }else if (segundos <0 || segundos > 59) {
        return console.log("Segundos invalidos");
    }else{
        let tiempo = new Date(1991,03,30,horas,minutos,segundos);
        tiempo.setSeconds(tiempo.getSeconds()+1);
        return console.log("H: "+tiempo.getHours()+" M: "+tiempo.getMinutes()+" S: "+tiempo.getSeconds());
    }
}
}

comprobacionHora();
