'use strict'

// Parametros REST y SPREAD

//REST
function listadoFrutas(fruta1,fruta2, /*un paramaetro despues de lo dicho 
	3 puntos los pone en un array*/...resto_de_frutas){
	console.log("fruta 1:",fruta1);
	console.log("fruta 2:",fruta2);
	console.log(resto_de_frutas);
}
listadoFrutas("naranjas","manzana","sandia","pera","melon","coco");

//spread que naranja y manzana los vea como parametros como fruta1 y fruta2
var frutas =["naranjas","manzana"];
listadoFrutas( /*para que tome naraja y manzana como parametro*/
	...frutas,"sandia","pera","melon","coco");