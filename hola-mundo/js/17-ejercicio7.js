
/*
Tabla de multiplicar de un numero introducido por pantalla
*/

var numero = parseInt(prompt('De que numero quieres la tabla',1));

document.write("<h1>tabla del "+numero+"</h1><br/>");
for (var i = 1; i <= 10; i++){
	var multiplicar = (i*numero)
	document.write(i+' x '+numero+' = '+multiplicar+"<br/>");
}


//Todas las tablas de multiplicar




