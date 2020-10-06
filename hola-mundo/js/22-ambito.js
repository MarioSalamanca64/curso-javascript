'use strict'



function holamundo(texto){
	//variable local no puedes acceder fuera de la funcion
	var hola_mundo = "Texto dentro de funcion";

	console.log(texto);
	console.log(/*mensiona q tipo es strin int etc*/typeof 
		numero.toString()/*convierte un numero en letras string*/);
	console.log(hola_mundo);
}

var numero = 12;
var texto = "Hola mundo soy una variable global";
holamundo(texto);
//error no esta definida global mente 
console.log(hola_mundo);