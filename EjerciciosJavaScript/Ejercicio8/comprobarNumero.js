//Crear una función que reciba por parámetro un entero y deveulva una cadena indicando si es par o impar


//Funcion que recibe un número y comprueba si es par o impar
function CompruebaNumero(numero) {
	if (numero%1 !=0) {
		alert("No has introducido un número entero");
		return "Se ha producido un error";

	} else {

		if (numero%2 == 0) {
			return "El número es par";

		} else {
			return "El número es impar";
		}
	}
}

var numero = prompt("Introduce un número entero:");
alert(CompruebaNumero(numero));