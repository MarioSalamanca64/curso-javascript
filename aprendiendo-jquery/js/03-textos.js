$(document).ready(function(){
	reloadLinks();

	$('#add_button')
	//remueve objetos como por ejemplo el disable removeAttr
	.removeAttr('disabled')
	.click(function(){
		//recoje lo escrito con val
		//console.log($("#add_link").val());

		//intruducir un link
		/*html quitara las anteriores por eso es mejor poner un .append lo pone al final o
		prepend lo pondra al principio -- o .before lo pone fuera de la lista*/ 
		$("#menu").append('<li><a href="'+$("#add_link").val()+'"></a></li>');
		/*quitar las letras en input despues de dar añadir 
		poniendo el el valor en .val*/
		$("#add_link").val('');

		reloadLinks();
	});
	
//cantidad de elementos
	//console.log($('a').length);
	

});	



//recorrer todos los elmentos con .each -- capturar indice index
function reloadLinks(){
		$('a').each(function(index){
		//ver elementos en texto en consola
		//console.log($(this));
		var that = $(this);
		//ver el elememto en texto
		var enlace = that.attr("href");
		//te lo habre en otra pestaña
		that.attr('target','_blank');
		//meter el texto
		that.text(enlace);
	});

}