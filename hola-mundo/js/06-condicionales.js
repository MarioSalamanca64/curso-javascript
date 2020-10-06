'use strict'

//Condicional IF 
//si A es igual a B entonces haz algo

/*var edad1 = 10;
var edad2 = 12;


//Si pasa esto 
if(edad1 > edad2){
	//Ejecuta esto
	console.log("Edad uno es mayor que edad dos");
}else{
	console.log("Edad uno es menor a edad dos");
}
*/

/*Operadores relacionales 
	Mayor >
	menor < 
	mayor o igual  >=
	menor o igual <=
	igual == 
	distinto !=
*/

var edad = 10;

var nombre = 'David Suarez';

if (edad >= 18){
	// Es mayor de edad
	console.log(nombre+" Tiene "+edad+" años, es mayor de edad.");
	if (edad <= 33) {
		console.log('Todavia eres millenial.');
	}
	else if (edad >= 70){
		console.log("Eres anciano");
	}
	else{
		console.log("Ya no eres millenial");
	}
}else{
	// Es menor de edad
	console.log(nombre+" Tiene "+edad+" años, es menor de edad.");
	if (edad<=18) {
		console.log("Eres muy joven")
	}
}

/*
//Operadores logicos
AND(Y): &&
OR(O): || 
Negacion: !
*/
var year = 2018;
//Negacion 

if (year != 2016) {
	console.log ("El a;o no es 2016 realmente es "+year);
}

//AND
if(year >= 2000 && year <= 2020 && year != 2018){
	console.log("Estamos en la era actual");
}
else{
	console.log("Estamos en la era post moderna")
}

//OR

if(year == 2008 || (year >= 2018 || year == 2028)){
	console.log("El a;o acaba en 8");
}else{
	console.log("a;o no registrado");
}
