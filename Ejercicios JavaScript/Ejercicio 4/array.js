
var valores = [true,5,false,"hola","adios",2];


//Apartado 1
if(valores[3].length > valores[4].length) {
	alert("1. La palabra "+valores[3] + " es más larga que "+valores[4]);

} else if (valores[4].length > valores[3].length) {
	alert("1. La palabra "+valores[4] + " es más larga que "+valores[3]);

} else {
	alert("Las palabras introducidas son de la misma longitud o se han introducido valores erróneos en el array");
}

//Fin Apartado 1

//Apartado 2
var resultadoTrue = valores[0] || valores[2];
var resultadoFalse = valores[0] && valores[2];

alert("2. \n"+valores[0]+" o "+valores[2]+" da como resultado "+resultadoTrue+"\n" + valores[0]+" y "+valores[2]+" da como resultado "+resultadoFalse);

//Fin Apartado 2

//Apartado 3
var suma = valores[1]+valores[5];
var resta = valores[1]-valores[5];
var multiplicacion = valores[1]*valores[5];
var division = valores[1]/valores[5];

alert("3. \n" + valores[1] +" + "+ valores[5] + " = "+ suma + "\n"
	+ valores[1] +" - "+ valores[5] + " = "+ resta + "\n"
	+ valores[1] +" * "+ valores[5] + " = "+ multiplicacion + "\n"
	+ valores[1] +" / "+ valores[5] + " = "+ division + "\n");
