'use strict'
	//probar si esta bien jquery $ == jquery
		$(document).ready(function(){
			//prueba de si esta conectados console.log("jQuery y la web estan cargados...");
			//selectores ID
			var rojo = $("#rojo").css("background","gray")
								 .css("color","white");
			var amarillo = $("#amarillo").css("background","yellow")
										 .css("color","green"); 
			//o sin variable
			$("#verde").css("background","green")
			           .css("color","white");

			//Selectores de clases lo vuelve un array
			var mi_clase = $('.zebra').css("padding","5px");
			//busquedas en un array 
			//console.log(mi_clase[0]);	 o tanbien 
			//console.log(mi_clase.eq(1));
			//eventos .click
			$('.sin_borde').click(function(){
				console.log("Click dado!!");
				$(this).addClass('zebra');
			});
			//Selectores de etiqueta
			var parrafos = $('p').css("cursor","pointer");

			parrafos.click(function(){
				var that = $(this);
				//si no tiene la clase grande que se la ponga
				if (!that.hasClass('grande')){
				 that.addClass('grande');	
				}else{ //y sino que sela quite
					that.removeClass('grande');
				}
			});
			//Selectores de atributo
			$('[title="google"]').css('background','#ccc');
			$('[title="facebook"]').css('background','blue');

			//otros selecionar dos 
			//$('p, a').addClass('margen-superior');
			//buscar elementos
			//var busqueda = $("#caja").find('.resaltado');
			//ep es posisinamiento del array - parent salir de la carpeta div 
			var busqueda = $("#caja .resaltado").eq(0).parent().parent().parent().find('[title="google"]');
			console.log(busqueda);
		});
	