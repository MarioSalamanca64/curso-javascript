'use strict'

//Eventos del raton

//poner el codigo de vinculacion en el header sin error load => == function
window.addEventListener('load',() => {

	function cambiarColor(){

	var bg = boton.style.background;
	if (bg == "green") {
	boton.style.background = "red";
}else{
	boton.style.background = "green";
}

boton.style.padding = "10px";
boton.style.border = "1px solid #ccc";
return true;
}

var boton = document.querySelector("#boton");
//capturar cualquier evento addEvenListener

//click
boton.addEventListener('click', function(){
	cambiarColor();
	//meter mas configuracion de css
	//boton.style.border = "10px solid black";
	//mas optimo
	console.log(this);
	this.style.border = "10 solid black";
});

//mauser over
boton.addEventListener('mouseover',function(){
	boton.style.background = "lightblue";
});

//mouseout cuando el cursor salga de el boton
boton.addEventListener('mauseout',function(){
	boton.style.barckground = "#ccc";
});

//focus
var input = document.querySelector("#campo_nombre");
input.addEventListener('focus',function(){
	console.log("[focus]Estas dentro del input");
});

//blur
input.addEventListener('blur',function(){
	console.log("[blur]Estas fuera del input");
});

//keydown
input.addEventListener('keydown',function(event){
	console.log("[keydown]Pulsando esta tecla", String.fromCharCode(event.keyCode));
});


//keypress
input.addEventListener('keypress',function(event){
	console.log("[keypress]Tecla presionada", String.fromCharCode(event.keyCode));
});


//keyup
input.addEventListener('keyup',function(event){
	console.log("[keyup]Tecla soltada", String.fromCharCode(event.keyCode));
});


})



