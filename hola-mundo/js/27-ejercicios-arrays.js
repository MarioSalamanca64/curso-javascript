'use strict'

/*
1.Pida 6 numero por pantalla y los meta en un array
2. Mostrar el array entero / todo los elementos en el cuerpo de la pagina 
y en la consola 
3.Ordenar y mostarlo
4.Invertir su orden y mostrarlo
5.Mostrar cuantos elementos tiene el array
6.Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice 
*/
/*decirle que estra bacio pero con 6 contenidos*/

/*crear una funcion para no copiar codigo*/
function mostrarArray(elementos,textoCustom = "") {
	document.write("<h1>Contenido del array"+textoCustom+"</h1>");
	document.write("<ul>");
elementos.forEach((elemento, index) => {
	document.write("<li>"+elemento+"</li>");
});
document.write("</ul>");
}
//pedir 6 numeros
var numeros = new Array(6);

for (var i = 0;i <= 5;i++) {
	numeros[i] = parseInt(prompt("Introduce un numero", 0));
}
//Mostrar en el cuerpo de la pagina
mostrarArray(numeros,);

//mostrar ne la consola
console.log(numeros);

/*o tanbien
var numeros = [];
for(var i = 0; i <= 5; i++){
	numeros.push(parsenInt(prompt("Introduce un numero", 0))) 
}*/

// Ordenar y mostrar 
numeros.sort(function(a,b){return a-b/*asendente o desendente seria b-a*/});
mostrarArray(numeros," ordenados");

//Invertir y mostrar 
numeros.reverse();
mostrarArray(numeros,' alrevez');

//Contar elementos
document.write("<h1>El array tiene: "+numeros.length+" elementos </h1>");

// busqueda
var busqueda = parseInt(prompt("Busca un numero", 0));

var posicion = numeros.findIndex(numero => numero == busqueda);

if (posicion && posicion != -1) {
document.write("<hr/><h1>ENCONTRADO</h1>");
document.write("<h1>Posicion de la busqueda: "+posicion+"</h1><hr/>");
}else{
	document.write("<hr/><h1> NO ENCONTRADO</h1><hr/");
}




