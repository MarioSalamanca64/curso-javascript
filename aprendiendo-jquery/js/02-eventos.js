/*Este codigo pertenece a eventos*/


$(document).ready(function(){
	//evento MouseOver y MouseOut

	var caja = $("#caja");
	/*
	//this es donde se aplica en la variable el evento
	caja.mouseover(function(){
		$(this).css("background","red");
	});
	//this hace referencia a caja -- funciones anonimas 
	caja.mouseout(function(){
		$(this).css("background","green");
	});
	*/
	//evento hover

	function cambiaRojo(){
		$(this).css("background","red");
	}
	function cambiaVerde(){
		$(this).css("background","green");
	}

	caja.hover(cambiaRojo,cambiaVerde);

	//click, doble click
	//un click
	caja.click(function(){
		$(this).css("background","blue")
			   .css("color","white");
	});
	//doble click
	caja.dblclick(function(){
		$(this).css("background","pink")
			   .css("color","yello");
			});
	//focus y blur al hacerle focus aun formulario
	var nombre = $("#nombre");
	var datos = $("#datos");

	nombre.focus(function(){
		$(this).css("border","2px solid red");
	});

	nombre.blur(function(){
		$(this).css("border","2px solid blue");
		//sacar lo que hay en this o lo que escribas en value con .val
		//mostrar elemento show text volver texto
		datos.text($(this).val()).show();
	});
	//mousedown y el mouseup cuando preciones la tecla cuando dejas de precionar
	datos.mousedown(function(){
		$(this).css("border-color","gray");
	});

	datos.mouseup(function(){
		$(this).css("border-color","black");
	});

	//mousemove dice las cordenadas del mause
	$(document).mousemove(function(){
		/*var sigueme = $("#sigueme");
		console.log("en x"+event.clientX);
		console.log("en y"+event.clientY);
		//desirle que te siga al puntero del mause
		sigueme.css("left",event.clientX);
		sigueme.css("top",event.clientY);*/

		//quitar el cursos tienes que seleccionar el body
		$('body').css("cursor","none");		

		//o tanbien 
		$("#sigueme").css("left", event.clientX)
					 .css("top",event.clientY);


	});

});