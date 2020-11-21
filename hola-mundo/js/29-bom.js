'use strict'

//BOM - browser object model

//vertama;o de navegador o de ventana altura 
//console.log(window.innerHeight);
//ancho
//console.log(window.innerWidth);
// o tanbien mas exacto 
function getBom(){
console.log(screen.width);
console.log(screen.height);
//lugardonde esta guardado la pagina
console.log(window.location);
}

/*funcion para que te dirija a otra pagina*/
function redirect(url){
	window.location.href = url;
}

/*abrir una ventana nueva de tama;o peque;o son las medidas seria una ventana normal*/
function abrirVentana(url){
	window.open(url,"","width=400,height=300");
}