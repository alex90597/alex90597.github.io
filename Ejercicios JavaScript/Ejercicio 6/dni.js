// Script que comprueba el número del DNI y la letra

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N',
'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var numero = prompt("Introduza su DNI sin letra:");
var letra = prompt("Introduzca la letra de su DNI:");

if (numero < 0 || numero > 99999999) {
	alert("El número de DNI introducido no es válido");
} else {
	var resto = numero%23;
	var letraCorrespondiente = letras[resto];

	if (letraCorrespondiente != letra) {
		alert("La letra introducida no se corresponde con el número de DNI introducido");
	} else {
		alert("El DNI y la letra introducidas son correctos");
	}
}