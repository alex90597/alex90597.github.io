/**
 * Created by alejandro on 06/11/2016.
 */

let abrirVentanas = document.getElementById("abrirVentanas");

function abreVentanasMultiples() {

     let ventana;
    let left =0;
    let top =0;
    for(i=0; i<5; i++) {
        ventana = window.open("","Ventana" +i,"width=300,height=200,top="+(top+=20)+",left=" + (left+=20));
        ventana.document.open();
        ventana.document.write("<!DOCTYPE html> \n" +
            "<html lang=\"es\"> \n" +
            "<head>\n" +
            "<title>Ventana " + i +"</title>\n" +
            "<meta charset=\"utf-8\">\n" +
            "</title>\n" +
            "<body>\n" +
            "<p>Ventana "+i + "  <button type=\"button\" onclick=\"window.close()\">Cerrar</button</p> \n" +
            "</body>\n" +
            "</html>");
        ventana.document.close();
    }



}



abrirVentanas.addEventListener("click",abreVentanasMultiples);







