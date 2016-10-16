/**
 * Created by alejandro on 16/10/2016.
 * 10.Implementa DeNumericoATexto que solicite un número del 0 al 99 y lo muestre escrito.
 * Por ejemplo, para 12 mostrar: doce, para 44 mostrar: cuarenta y cuatro
 */
var expReg = new RegExp("[A-Za-z]");

var numero="";
var cadena="";
var longitud;

while (numero.length<1 || numero.length>= 3 || numero.match(expReg)) {
    numero = prompt("Introduce un número entre 0 y 99");
}
longitud = numero.length;

if(longitud == 1) {
    numerosDel1al10();
    console.log(cadena);

} else {
    pasarACadena();
    console.log(cadena);
}



function pasarACadena(){
    primerDigito();
    if(numero.charAt(0) != "1"){
        segundoDigito();
    }
}



function delDiezAlDiecinueve(){
    switch(numero.charAt(1)){
        case "0":
            cadena = "diez";
            break;
        case "1":
            cadena = "once";
            break;
        case "2":
            cadena = "doce";
            break;
        case "3":
            cadena = "trece";
            break;
        case "4":
            cadena = "catorce";
            break;
        case "5":
            cadena = "quince";
            break;
        case "6":
            cadena += "seis";
            break;
        case "7":
            cadena += "siete";
            break;
        case "8":
            cadena += "ocho";
            break;
        default:
            cadena += "nueve";
            break;
    }
}



function segundoDigito(){
    switch(numero.charAt(1)){
        case "1":
            cadena += "uno";
            break;
        case "2":
            cadena += "dos";
            break;
        case "3":
            cadena += "tres";
            break;
        case "4":
            cadena += "cuatro";
            break;
        case "5":
            cadena += "cinco";
            break;
        case "6":
            cadena += "seis";
            break;
        case "7":
            cadena += "siete";
            break;
        case "8":
            cadena += "ocho";
            break;
        case "9":
            cadena += "nueve";
            break;
        default:
            if (numero.charAt(0)=="2") {
                cadena = "veinte";
            }
            else{
                cadena = cadena.replace("y", "").trim();
            }
    }
}


function primerDigito(){
    switch(numero.charAt(0)){
        case "0":
            cadena = "";
            break;
        case "1":
            cadena = "dieci";
            delDiezAlDiecinueve();
            break;
        case "2":
            cadena = "veinti";
            break;
        case "3":
            cadena = "treinta y ";
            break;
        case "4":
            cadena = "cuarenta y ";
            break;
        case "5":
            cadena = "cincuenta y ";
            break;
        case "6":
            cadena = "sesenta y ";
            break;
        case "7":
            cadena = "setenta y ";
            break;
        case "8":
            cadena = "ochenta y ";
            break;
        case "9":
            cadena = "noventa y ";
            break;

    }
}

function numerosDel1al10() {
    switch (numero.charAt(0)) {
        case "0":
            cadena = "Cero";
            break;

        case "1":
            cadena = "Uno";
            break;

        case "2":
            cadena = "Dos";
            break;

        case "3":
            cadena = "Tres";
            break;

        case 4:
            cadena = "Cuatro";
            break;

        case "5":
            cadena = "Cinco";
            break;

        case "6":
            cadena = "Seis";
            break;

        case "7":
            cadena = "Siete";
            break;

        case "8":
            cadena = "Ocho";
            break;

        case "9":
            cadena = "Nueve";
            break;
    }
}