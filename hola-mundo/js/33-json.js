'use strict'

// JSON - javaScript Object Notation

var pelicula = {
	titulo: 'Batman vs Superman',
	year: 2017,
	pais: 'Estados unidos'
};
//array
var peliculas =[
	{titulo:"La verdad duele",year:2016,pais:"fracia"},
	pelicula
];

//cambiar el valor de una propiedad
pelicula.titulo = "superman begins";
//acceder auna propiedad peliucla.titulo sepracion con el punto 
console.log(peliculas);

var caja_peliculas = document.querySelector("#peliculas");
var index;
for(index in peliculas){
	var p = document.createElement("p");
	p.append(peliculas[index].titulo + " - " + peliculas[index].year);
	caja_peliculas.append(p);
}
