'use strict'

//DOM - Document object mode
//.innerHTML solo para ver el texto del id 


function cambiacolor(color){
	caja.style.background = color;
}
//conseguir elementos con un ID concreto

//var caja = document.getElementById("micaja");
//o tanbien # = id . = class
var caja = document.querySelector("#micaja");

caja.innerHTML = "texto en la caja desde js";

//Insertar estilos de css
caja.style.background = "gray";
caja.style.padding = "20px";
caja.style.color = "white";
//poner una clase en html desde js
caja.className = "hola hola2";

//conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');
//mostrar todos los div
/*append a;ade despues prepend a;ade antes*/
var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");



var  valor;
for(valor in todosLosDivs){
	if (typeof todosLosDivs[valor].textContent == 'string') {
	var parrafo = document.createElement("p");
	var texto = document.createTextNode(todosLosDivs[valor].textContent);
	parrafo.append(texto);
	seccion.append(parrafo);	
	}
	
}
seccion.append(hr);


//mostrar texto del tercer div div
//var contenidoEnTexto = todosLosDivs[2].textContent;
var contenidoEnTexto = todosLosDivs[2];
contenidoEnTexto.innerHTML = "otro texto para el segundo elemento";
contenidoEnTexto.style.background = "gray";

console.log(contenidoEnTexto);


//conseguir elementos por su clase css classname saca todas las clases en array
var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');
divsAmarillos[0].style.background = "yellow";

var div;
for(div in divsRojos){
	if (divsRojos[div].className == "rojo") {
		divsRojos[div].style.background = "red";
	}	
}
console.log(divsRojos);
console.log(caja);

// Query selector solo para una etiqueta
var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelector(".rojo");
console.log(claseRojo);

/* y tanbien existe 
El método querySelectorAll() de un Element devuelve 
una NodeList estática (no viva) que representa una lista de 
elementos del documento que coinciden con el grupo de selectores indicados.
*/