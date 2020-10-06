'use strict'

//arrays (areglos)(matrices) meter cual quier tipo de dato

var nombre = "Mario salamanca";
var nombres = ["mario","pedro","juan","salco",52,true];
//				0		1		2		3		4	5

var lenguajes = new Array("PHP","JS","GO","JAVA","C#","C");

/*sacar un solo elento de la matriz con[]*/
//console.log(nombres.length);/*ver cuantos elementos tiene el array*/
//console.log(lenguajes);
/*
var elementos = parseInt(prompt("Que elemeto del array quieres??",0));
if(nombres.length >= elementos){
	alert("El usuario selecionado es: "+nombres[elementos]);
}else{
	alert("Introduse el numero correcto menor que "+nombres.length);
}
*/

document.write("<h1>Lenguajes de programacion 2020</h1>");
document.write("</ul>");
/*Primer metodo*/
/*
for (var i = 0;i < lenguajes.length; i++) {
	document.write("<li>"+lenguajes[i]+"</li>");
}
*/
/*segundo metodo*/
lenguajes.forEach((elemento/*esto hace mortar los arrays*/,indice/*pone indices*/,arr /*imprime en consola*/)=>{
	console.log(arr);
	document.write("<li>"+indice+" - "+elemento+"</li>");
});


/*Metodo 3*/

for(let lenguaje in lenguajes){
	document.write("<li>"+lenguajes[lenguaje]+"</li>");
}

document.write("</ul>");

//Busquedas array

var busqueda = lenguajes.find(function(lenguaje){
	return lenguaje == "PHP";
});

/*RESUMEN*/
var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");
/*o su numero*/
var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "JS");

console.log(busqueda);

/*Array de numeros*/

var precios = [10,20,50,80,12];

var busquedaprecios = precios.some(precios => lenguaje >= 81);/*da true o falce*/