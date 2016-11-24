/**
 * Created by alejanro on 06/11/2016.
 */

let abrirVentana = document.getElementById("abrirVentana");

abrirVentana.addEventListener("click",nuevaVentana);

function nuevaVentana() {
    let ventana = window.open("","Ventana de Prueba","width=300,height=200,top=0,left=0");
    ventana.document.write("<!DOCTYPE html> \n" +
        "<html lang=\"es\"> \n" +
        "<head>\n" +
        "<title>Ventana de Prueba</title>\n" +
        "<meta charset=\"utf-8\">\n" +
        "</title>\n" +
        "<body>\n" +
        "<p>Se han utilizado las propiedades:</p> \n" +
        "<ul>\n" +
        "<li>height=200</li>\n" +
        "<li>width=300</li>\n" +
        "</ul>\n" +
        "</body>\n" +
        "</html>");
    ventana.document.close();
}
