$(document).ready(function(){
	var caja = $("#caja");
	//ocultar caja de un principio
	//$("#caja").hide();
	//mostrar desde el principio
	$("#mostrar").hide();

	//mostrar 
	$("#mostrar").click(function(){
		$(this).hide();
		//show es mostrar
		$("#ocultar").show();
		//velosidad para motrar y ocultar 'fast' 'normal' 'slow' efecto de escalado
		//$("#caja").show('fast');

		//mostrar -- otro efecto de fundido  o desaparision  'fast' 'normal' 'slow'
		//$("#caja").fadeIn('slow');

		//otra opcion de opacidad .fadeTo max 1 min 2
		//$("#caja").fadeTo('slow', 0.8);
		//escalado asia abajo
		caja.slideDown('slow',);
	});

	$("#ocultar").click(function(){
		$(this).hide();
		//hide se oculta
		$("#mostrar").show();

		//rescalado
		//$("#caja").hide('fast');

		//ocultar -- fundido ocultar
		//$("#caja").fadeOut('slow');

		//otra opcion de opacidad .fadeTo 
		//$("#caja").fadeTo('slow', 0.2);

		//escalado asia ariba
		caja.slideUp('slow', 0.2,function(){
			//hacer el callback despues de que termine la animacion
			console.log('Cartel ocultado');
		});
		
	});

	$("#todoenuno").click(function(){
		//efecto escalado toggle
		//$("#caja").toggle('fast');

		//efecto fundicion fadeToggle
		//$("#caja").fadeToggle('fast');
		
		//efecto escalado slideToggle
		caja.slideToggle('fast');
	});
	//mejor animacion
	$("#animar").click(function(){
		caja.animate({marginLeft:'500px',
	                  fontSize:'40px',
	                  height:'110px'
	                   },'slow')
					.animate({
						borderRadius:'900px',
						marginTop: '80px'
					},'slow')
					.animate({
						borderRadius:'0px',
						marginLeft: '0px'
					},'slow')
					.animate({
						borderRadius:'100px',
						marginTop: '00px'
					},'slow')
					.animate({marginLeft:'500px',
	                  fontSize:'40px',
	                  height:'110px'
	                   },'slow')
		;
	});

});