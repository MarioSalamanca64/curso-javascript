
var fecha = new Date();

var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();

var textohora = `
	El año es: ${year}
	El mes es : ${mes}
	El dia es : ${dia}
	La hora es : ${hora}
`;

console.log(textohora);
console.log(Math.ceil(Math.random()*1000));

//operaciones buscando en google javascript math
//obtener un numero aleatorio