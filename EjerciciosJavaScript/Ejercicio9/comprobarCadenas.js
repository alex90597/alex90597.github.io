/*Comprueba una cadena que se le pasa como argumento y determina si está formada solo por mayúsculas, minúsculas o ambas.
*/

//Comprueba la cadena introducida y devuelve si está toda en mayúsculas,minúsculas o ambas.
function CompruebaCadena(cadena) {

	if (cadena == cadena.toUpperCase()) {
		return "La cadena está formada solo por letras mayúsculas";

	} else if (cadena == cadena.toLowerCase()) {
		return "La cadena está formada solo por letras minúsculas";

	} else {
		return "La cadena está formada por una combinación de letras mayúsculas y minúsculas o números";
	}
}


var cadena = prompt("Introduce una cadena de texto:");
alert(CompruebaCadena(cadena));