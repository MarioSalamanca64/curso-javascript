'use strict'

var formulario = document.querySelector("#formpeliculas");

formulario.addEventListener('submit',function(){
	
	var titulo = document.querySelector('#addpeliculas').value;
	//si no hay informacion no la salta
	if (titulo.length >= 1 ) {
	localStorage.setItem(titulo,titulo);	
	}
});


//mostrar en pagina lo que pongas en el form
var ul = document.querySelector('#peliculas-list');
for(var i in localStorage){

	//tiene que ser un string
	if (typeof localStorage[i] == 'string') {
	var li = document.createElement("li");
	li.append(localStorage[i]);
	ul.append(li);
	}
	
}


//borrar peliculas
var formulariob = document.querySelector("#formborrarpeliculas");

formulariob.addEventListener('submit',function(){
	
	var titulo = document.querySelector('#borrarpeliculas').value;
	//si no hay informacion no la salta
	if (titulo.length >= 1 ) {
	localStorage.removeItem(titulo,titulo);	
	}
});