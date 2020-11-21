$(document).ready(function(){
	//Load	peticion get y pone en un div carga todo el html en el div
	//$("#datos").load("https://reqres.in/");
	//Get y post solo jQuery
	$.get("https://reqres.in/api/users?page=2",/*json*/{page: 3},function(response){
		/*data es donde estan los usuarios -- elemento -- index indice -- api dentro de response*/
		response.data.forEach((element, index) =>{
			/*append a;adir -- first_name esta en el api*/
			$("#datos").append("<p>"+element.first_name+" "+element.first_name+"</p>");
		});
	});
	//post
	$("#formulario").submit(function(e){
		//para que no redirija a otra pag e esta en la funcion
		e.preventDefault();

		//val añadir datos
		var usuario = {
		name: $('input[name="name"]').val(),
		web: $('input[name="web"]').val()
	};
	console.log(usuario);
	/*
	$.post($(this).attr("action"),usuario,function(response){
		console.log(response);
		//mostrar alerta
	}).done(function(){
		alert("Usuario añadido correctamente");
	});
	*/
	$.ajax({
		type:'POST',
		dataType:'json',
		contentType:'application/json',
		url: $(this).attr("action"),
		data: usuario,
		/*antes de que se envie haga alguna accion*/
		beforeSend: function(){
			console.log("Enviando usuario....");
		},
		/*cuando todo va bien*/
		success: function(){
			console.log(response);
		},
		error:function(){
			console.log("A ocurrido un error");
		},
		/*tiempo de revision*/
		timeout:2000
	});
	return false;
	});
});
