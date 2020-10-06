'use strict'

//Trasformacion de textos
var numero = 444;
var texto1 = "Bienvenido al curso de Javascript curso";
var texto2 = "Es muy buen curso";

/*Buscar una palabra primera aparicion/*.indexOf() o .search()*//*ultima aparicion .lastIndexOf()*/
var busqueda = texto1.indexOf("curso");
console.log(busqueda);
var ultimaBusqueda = texto1.lastIndexOf("curso");
console.log(ultimaBusqueda);

/*menciona todo donde esta ubicado array etc/*.martch("")*/
var todosloselementos = texto1.match("curso");
console.log(todosloselementos);

/*ver cuantas beces se repite esa palabra en la var*/
var busquedaglobal = texto1.match(/curso/gi);
console.log(busquedaglobal);

/*le dices que te saque de la letra 14 5 letras en adelante*/
var subtraer = texto1.substr(14,5);
console.log(subtraer);

/*sacar una letra en espesifico*/
var letrabusqueda = texto1.charAt(44);
console.log(letrabusqueda);
/*buscar palabras en inicio .startsWith("") o al final .endsWith("") devuelve true o false*/
/*Remplazar texto*/

var Remplazartexto = texto1.replace("Javascript","Phyton");
console.log(Remplazartexto);
/*pedir que comience aleer des de sierta parte un string*/
var leerdesde = texto1.slice(14/*delante*/,22/*atras*/);
console.log(leerdesde);

/*juntar y separar en un array por el espacio*/
var juntarpalabrasenarray = texto1.split(" ");
console.log(juntarpalabrasenarray);

/*quitar espacios adelante y atras de un string para que quede con un solo espacio*/
var quitarespaciosinesesarios = texto1.trim();
console.log(quitarespaciosinesesarios);









//PARTE 1

/*var dato = numero.toString();/*trans formar numero a string (texto)*/
	/*dato = texto1.toUpperCase(); /*Convertir a mayusculas*/
	/*dato = texto1.toLowerCase(); /*convertir a minusculas*//*typeof que tipo es*/
/*console.log(dato);

// calcular longitud
var nombre ="mario";
var nombre2 = ["hola","hola"]
console.log(nombre.lenght);/*cuantas lestras tiene el contenido/*.lenght*/
/*console.log(nombre.length);/*numero de lestras desde el 0/*.length*/
/*console.log(nombre2.lenght);
console.log(nombre2.length);

//Concatenar Unir texto

//var textototal = texto1+" "+texto2.toLowerCase(); o
var textototal = texto1.concat(" "+texto2.toLowerCase());
console.log(textototal);
*/