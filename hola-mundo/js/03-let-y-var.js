'use strict'

//Pruebas con let y var 

// PUEBA CON var 
var numero = 40;
console.log(numero); // valor 40

if(true){
	var numero = 50;
	console.log(numero);// valor 50
}

console.log(numero); //valor 50

//PRUEBA CON let
var texto = "Curso JS MarioSalmanca";
console.log(texto); //valor js

if(true){
	let texto = "curso laravel 5 MarioSalamanca"
	console.log (texto); // valor larravel 5
}

console.log(texto); //valor js