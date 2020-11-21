'use strict'

//Localstorage sesiones o guardar informacion en el navegador en el backkend

//ver si el navegador es compatible Localstorage
if(typeof(Storage) !== 'undefined'){
	console.log("Localstorage disponible");
}else{
	console.log("Incopatible Localstorage");
}

//Guardar datos
localStorage.setItem("titulo", "Codigo en js con Mario Salamanca");

//Recuperar elementos
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

//guardar objetos
var usuario = {
	nombre: "Mario Salamanca",
	email: "Mario@hotmail.com",
	web:"mariosalamanca.com"
};
//JSON.stringify trasforma en JSON string para que lo puedas leer 
localStorage.setItem("usuario",JSON.stringify(usuario));

//recuperar objeto trasformar a un objeto para porder usar 
 var userjs = JSON.parse(localStorage.getItem("usuario"));

 console.log(userjs);
 document.querySelector("#datos").append(" "+userjs.web+" - "+userjs.nombre);
//borrar en localStore se aplica el codigo pero ya no esta en el navegador 
 localStorage.removeItem("usuario");
 //o borrar todo con 
 localStorage.clear();