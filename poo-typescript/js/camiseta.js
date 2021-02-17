var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//decorador es  un patron de dise;o de metadatos 
//hacer una copia de una clase y modificarlo o que haga una cosa u otra por los
//parametros que se le pongan
function estampar(logo) {
    return function (target) {
        /*despues de prototype es el nombre del metodo*/
        target.prototype.estampado = function () {
            console.log("Camiseta estampada con el logo de: " + logo);
        };
    };
}
;
//usar decorador en Camiseta 
var Camiseta = /** @class */ (function () {
    //Metodos (funciones o acciones del objeto)
    //metodo costructor corre antes que las demas y no devuelve nada 
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    /*pide la clase color q es la variable this es cambiarColor*/
    Camiseta.prototype.cambiarColor = function (color) {
        this.color = color;
    };
    //recoje la var color
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta = __decorate([
        estampar('Gucci Gang')
        // clase (molde del objeto) siempre enpesar con mayuscula el nombre de la clase
        //la class export es para poderla usar en cualquier otro archivo 
        //aplicar el interface al objeto
    ], Camiseta);
    return Camiseta;
}());
//Clase hija Sudadera con la palabra extends con eso eredo una classe
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
//instacia de un objeto
var camiseta = new Camiseta("rojo", "manga larga", "nike", "1", 14);
console.log(camiseta);
//impreso de decorador
camiseta.estampado();
//clase hija conectado
var sudadera_nike = new Sudadera("Rojo", "Manga Larga", "nike", "1", 16);
//para meter clase a Sudadera y cambiar color que es el que ereda
sudadera_nike.setCapucha(true);
sudadera_nike.cambiarColor("gris");
console.log(sudadera_nike);
//var camiseta = new Camiseta("rojo","manga larga","nike","1",14);
/*creando objeto para poner color*/
//camiseta.cambiarColor("Rojo");
//camiseta.getColor();
/*var playera = new Camiseta();
playera.cambiarColor("azul");*/
/*//añadir valores
camiseta.color = "Rojo";
camiseta.modelo = "Manga Larga";
camiseta.marca = "Nike";
camiseta.talla = "L";
camiseta.precio = 10;

var playera = new Camiseta();
//añadir valores
playera.color = "Azul";
playera.modelo = "Manga Corta";
playera.marca = "Adidas";
playera.talla = "M";
playera.precio = 10;
*/
//console.log(camiseta);
