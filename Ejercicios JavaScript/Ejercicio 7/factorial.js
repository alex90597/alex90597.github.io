//Script que calcula el factorial de un número introducido por el usuario

var numero = prompt("Introduce un número entero para calcular el factorial");
var resultado=1;

if(numero % 1 !=0) {
	alert("No has introducido un número entero");
} else {

	for(var i=1;i<=numero;i++) {
		resultado*= i;
	}

	alert(resultado);
}