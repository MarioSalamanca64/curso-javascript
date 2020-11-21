'use strict'
//,() => {} == function
window.addEventListener('load',function(){

	//timers aplicar un troso de codigo en sierto tiempo o segundo == setInsterval 3000==3sg
	//setTimeout solo se ejecuta una vez y ya jamas lo hace
	//sertInterval paresido a un bucle

	function intervalo(){
		var tiempo = setInterval(function(){

		console.log("set interval ajecutando");

		var encabezado = document.querySelector("h1");
		if (encabezado.style.fontSize == "50px") {
		encabezado.style.fontSize = "30px";	
		}else{
		encabezado.style.fontSize = "50px";	
	}
			
	}, 3000);
		return tiempo;
	}
	
	var tiempo = intervalo();
	//clearInterval pararia el parpadeo
	var start = document.querySelector("#start");

	start.addEventListener("click",function(){
		alert("haz iniciado el intervalo en bucle");
		tiempo = intervalo();
	});

	var stop = document.querySelector("#stop");

	stop.addEventListener("click",function(){
		alert("haz parado el intervalo en bucle");
		clearInterval(tiempo);
	});

	

});