'use strict'

//Operadores
var numero1 = 7;
var numero2 = 12;
var operacion = numero1 / numero2
/*% en una operacion es el residuo de una divicion*/
alert("Es resultado de la operacion es : "+operacion);

//Tipo de datos
var numero_entero = 44;
/*texto string*/
var cadena_texto = "Hola que tal";
/*booleano true fals*/
var verdadero_o_falso = true;

var numero_falso = "44.5555";

/*volver string a numero desimal o cual quier otro*/
console.log(Number(numero_falso)+7);
/*colver a solo entero*/
console.log(parseInt(numero_falso)+7);
/*volver a un float*/
console.log(parseFloat(numero_falso)+7);
/*numero a string*/
console.log(String(numero_entero)+4);

/*ver datos de las bariables string boolean int etc*/
console.log(typeof numero_entero);
console.log(typeof cadena_texto);
console.log(typeof verdadero_o_falso);
console.log(typeof numero_falso);