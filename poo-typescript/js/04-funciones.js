//alas funciones se le spone un tipado fuerte tanbien numero y string
function getNumero(numero) {
    if (numero === void 0) { numero = 12; }
    return "El nuermo es : " + numero;
}
console.log(getNumero(55));
