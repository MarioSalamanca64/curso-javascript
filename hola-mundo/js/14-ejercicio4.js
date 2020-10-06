'use strict'

/*
Mostrar todos los numeros impares que hay entre dos numeros
introducidos por el usuario
*/

var numero1 = parseInt(prompt("Introducir un numero: ",0));
var numero2 = parseInt(prompt("Introducir otro numero: ",0));

while(numero1 < numero2){
numero1++;
if(numero1%2 != 0){
	console.log("El "+numero1+" numero impart es")
}
}