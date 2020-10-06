'use strict'

/*
Calculadora;
- pida dos numeros por pantalla
- si metemos uno mal que no lo vuleva a preguntar
- resultado en el cuerpo de la pagina, en un a;erta y por la consola el resultado 
de suma restar multiplicar y dividir 
*/

var numero1 = parseInt(prompt("Inserta el primer numero",0));
var numero2 = parseInt(prompt("Inserta el segundo numero",0));

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
var numero1 = parseInt(prompt("Inserta el primer numero",0));
var numero2 = parseInt(prompt("Inserta el segundo numero",0));


}
/*
var suma = (numero1+numero2);
var resta = (numero1-numero2);
var multiplacacion = (numero1*numero2);
var dividir = (numero1/numero2); 

document.write(
"La suma ="+suma+"</br>"+
"La resta ="+resta+"<br/>"+
"La multiplacacion ="+multiplacacion+"</br>"+
"La divicion ="+dividir+"<br>"
	);
console.log("La suma = "+suma);
console.log("La resta = "+resta);
console.log("La multiplacacion = "+multiplacacion);
console.log("La divicion = "+dividir);
*/
// o tanbien 

var resultado = "La suma es :"+(numero1+numero2)+"<br/>"+
				"La resta es :"+(numero1-numero2)+"<br/>"+
				"La multiplacacion es :"+(numero1*numero2)+"<br/>"+
				"La divicion es :"+(numero1/numero2)+"<br/>";

var resultadoCMD = "La suma es :"+(numero1+numero2)+"\n"+
				"La resta es :"+(numero1-numero2)+"\n"+
				"La multiplacacion es :"+(numero1*numero2)+"\n"+
				"La divicion es :"+(numero1/numero2)+"\n";

document.write(resultado);

alert(resultadoCMD);

console.log(resultadoCMD);