'use strict'

//funciones
//Una funcion es una agrupacion reutilizable de un conjunto de instrucciones

//Defino la funcion
function calculadora/*poner parametros en los parentecis*/(numero1,numero2, mostrar = false){
	//conjunto de instruciones a ejecutar
	if(mostrar==false){
	//return "Hola soy la calculadora!!"; o tanbien
	console.log("suma "+(numero1+numero2));
	console.log("resta "+(numero1-numero2));
	console.log("multiplicacion "+(numero1*numero2));
	console.log("divicion "+(numero1/numero2));
	console.log("***********************");
}else{
	document.write("suma "+(numero1+numero2)+"<br/>");
	document.write("resta "+(numero1-numero2)+"<br/>");
	document.write("multiplicacion "+(numero1*numero2)+"<br/>");
	document.write("divicion "+(numero1/numero2)+"<br/>");
	document.write("***********************");

}

	//return "Hola soy la calculadoras";


	//console.log("si soy yo");
}

//Invocar o llamar ala funcion
//console.log(calculadora(),calculadora(),calculadora(),calculadora());
//poner los parametros en los parentecis
/*calculadora(15,8);
calculadora(98,2);*/
calculadora(1,4);
calculadora(4,5,true);
calculadora(10,15,true);
calculadora(25,10);

/*
for(var i = 1 ;i <=10 ; i++){
	console.log(i);
	calculadora(i, 8);
}
*/
//o se puede poner en una variable
//var resultado = calculadora();



/*Buen acomodo seria*/

function porconsola(numero1,numero2){
	console.log("suma "+(numero1+numero2));
	console.log("resta "+(numero1-numero2));
	console.log("multiplicacion "+(numero1*numero2));
	console.log("divicion "+(numero1/numero2));
	console.log("***********************")

}

function porpantalla(numero1,numero2){
	document.write("suma "+(numero1+numero2)+"<br/>");
	document.write("resta "+(numero1-numero2)+"<br/>");
	document.write("multiplicacion "+(numero1*numero2)+"<br/>");
	document.write("divicion "+(numero1/numero2)+"<br/>");
	document.write("***********************");

}
function calculadora/*poner parametros en los parentecis*/(numero1,numero2, mostrar = false){

if(mostrar == false){
	porconsola(numero1,numero2);
}else{
	porpantalla(numero1,numero2);
}
return true;
}