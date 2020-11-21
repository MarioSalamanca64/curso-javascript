'use strict'

window.addEventListener('load',function(){
	console.log("DOM cargado");

	var formulario = document.querySelector("#formulario");
	var box_dashed = document.querySelector(".dashed");
	//ocultar recuadro antes del submit	
	box_dashed.style.display = 'none';

	//capturar el evento 
	formulario.addEventListener('submit',function(){
		console.log("Evento submit capturado");
		//value saca el elemento que pongas
		var nombre = document.querySelector("#nombre").value;
		var apellidos = document.querySelector("#apellidos").value;
		var edad =	 parseInt(document.querySelector("#edad").value);

		//trim para q no haya espacion ni adelante ni atras
		//trim no se usa en datos numericos
		if (nombre.trim() == null || nombre.trim().length == 0){
			alert("El nombre no es valido");
			document.querySelector("#errornombre").innerHTML = "El nombre no es valido";
			return false;
		}else{
			document.querySelector("#error_nombre").style.display ="none" ;
		}

		if (apellidos.trim() == null || apellidos.trim().length == 0){
			alert("El apellidos no son valido");
			return false;
		}
		//isNaN para saber si es numero o tanbien isNaN(edad) == false 
		//isNaN en el caso que no sea un numero asi queda
		
		if (edad == null || edad <= 0 || isNaN(edad)){
			alert("La edad no es valida");
			return false;
		}

		box_dashed.style.display = 'block';

		//seleccionas el span que hay en html
		var p_nombre = document.querySelector("#p_nombre span");
		var p_apellidos = document.querySelector("#p_apellidos span");
		var p_edad = document.querySelector("#p_edad span");
		
		p_nombre.innerHTML = nombre;
		p_apellidos.innerHTML = apellidos;
		p_edad.innerHTML = edad;


		/*
		// valor de append es poner los elementos que escribes
		var datos_usuario = [nombre, apellidos,edad];
		var indice;
		for(indice in datos_usuario){
			var parrafo = document.createElement("p");
			parrafo.append(datos_usuario[indice]);
			box_dashed.append(parrafo);
		}	*/
	});
});