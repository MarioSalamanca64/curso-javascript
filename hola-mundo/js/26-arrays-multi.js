'use strict'

var categorias =['Accion','Terror','Comedia'];

var peliculas = ['La verdad duele','La vida es bella','Gran torino'];

/*ordenar arrays*/
peliculas.sort();/*Nombre alfabetico*/
/*peliculas.reverse();/*Poner las lista al reves*/
console.log(peliculas);


var cine = [categorias,peliculas];

/*acceder ala categoria terror*/
//console.log(cine[0][1]);
//console.log(cine[1][2]);
/*
var elementos = "";

do{
	elementos = prompt("Introduce tu pelicula: ");
	peliculas.push(elementos);
}while(elementos != "ACABAR");

/*A;adir una array*/
/*varariable.push*/
/*Eliminar el ulrimo elemento ACABAR*/
//peliculas.pop();

/*Eliminar un elemento del array*/
var indice = peliculas.indexOf('Gran torino');
/*console.log(indice);/*Ver donde esta el elemento situdado*/
if(indice > -1){
	peliculas.splice(indice,1);
}
/*volver un array a un string*/

var peliculas_string = peliculas.join();

console.log(peliculas_string);

console.log(peliculas);

/*string a array*/

var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");

console.log(cadena_array);


/*Pasar por el array FORMA 3*/
for(let leguaje in lenguajes){

}
