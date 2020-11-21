//timers
window.addEventListener("load",function(){
//function interval
let time;
function intervalos(){
 time = setIntercal(function (){
 	let encabezado = document.querySelector("h1");
 	if (encabezado.style.fontSize == "50px"){
 		encabezado.style.fontSize ="20px";
 	}else{
 		encabezado.style.fontSize = "50px";
 	}

 }, 1000);
 return time ;	
}

const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

start.addEventLister("click", function(){
	alert("haz iniciado el intervalo en bucle");
	intervalos();
	console.log("rolling.....");
});

stop.addEvenListener("click",function(){
alert("haz parado el intervalo en bucle");
clearInterval(time);
time = null;
console.log("stop");
});
});