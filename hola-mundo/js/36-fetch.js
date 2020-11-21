'use strict'

//Fetch es como (ajax) y peticiones a servicios / apis rest
var div_usuarios = document.querySelector("#usuarios");
var div_profesor = document.querySelector("#profesor");
var div_janet = document.querySelector("#janet");




	getusuarios()
	//data.json es para resivir informacion en formato js --capturar el data
	.then(data => data.json())
	//gurdar datos 
	.then(users  => {
		//usuarios = users.data; mejorado abajo 
		listadousuarios(users.data)

		//encadenar otro .then
		return getInfo();
	})
	.then(data => {
		div_profesor.innerHTML = data;

		return getjanet();
	})
	.then(data => data.json())
	//user variable
	.then(user => {
		mostrarjanet(user.data);
	})
	//captura de errores
	.catch(error => {
		alert("error10");
	});
	

	//promesa
	function getusuarios(){
		return fetch('https://reqres.in/api/users');
	}

	function getjanet(){
		return fetch('https://reqres.in/api/users/2');	
	}
	//crear promesa desde 0
	function getInfo(){
		
		var profesor = {
			nombre: 'Mario',
			apellidos: 'Salamanca',
			url: 'https://github.com/MarioSalamanca64',
		};
		return new Promise((resolve,reject) => {
			var profesor_string = "";
			//poner tiempo de 3 segundos para mostrar 
			setTimeout(function(){
				var profesor_string = JSON.stringify(profesor);

			//reject denegacion a promesa
			if (typeof profesor_string != 'string' || profesor_string == "") return reject('error1');


			//retorna aseptacion de la promesa
			return resolve(profesor_string);
			},3000);
			
			
		});
		
	}

	//
	function listadousuarios(usuarios){

		usuarios.map((user,i) => {
			let nombre = document.createElement('h3');

			nombre.innerHTML = i+ '.' + user.first_name+" "+ user.last_name;

			div_usuarios.appendChild(nombre);

			document.querySelector(".loading").style.display = 'none';
		});
	}

	function mostrarjanet(user){

			let nombre = document.createElement('h4');
			//mostrar img
			let avatar = document.createElement('img');

			nombre.innerHTML = user.first_name+" "+ user.last_name;
			//mostrar img
			avatar.src = user.avatar;
			avatar.width = '100 ';


			div_janet.appendChild(nombre);
			//mostrar img
			div_janet.appendChild(avatar);

			document.querySelector("#janet .loading").style.display = 'none';
		
	}