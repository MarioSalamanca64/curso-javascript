'use strict'

//Funciones anonimas
//Es una funcion que no tiene nombre

/*var pelicula = function(nombre){
	return "La pelicula es "+ nombre;
}*/

//Callback es una funcion que se ejecuta dentro de otra

function sumame(numero1,numero2, sumaymuestra, sumapordos){
	var sumar = numero1 + numero2;

	sumaymuestra(sumar);
	sumapordos(sumar);

	return sumar;
}
sumame(5,7, function(dato){
	console.log("La suma es:",dato);
},
function(dato){
	console.log("La suma por dos es:",(dato*2));
});

/*Funciones flecha*/
/*
sumame(5,7, dato => {
	console.log("La suma es:",dato);
},
function dato => {
	console.log("La suma por dos es:",(dato*2));
});
*/