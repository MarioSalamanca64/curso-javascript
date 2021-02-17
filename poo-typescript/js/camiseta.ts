//Interface son como restricciones que se tienen que cumplir
interface CamisetaBase {
    cambiarColor(color);
    getColor();
}

//decorador es  un patron de dise;o de metadatos 
//hacer una copia de una clase y modificarlo o que haga una cosa u otra por los
//parametros que se le pongan
function estampar(logo: string){
    return function(target: Function){
        /*despues de prototype es el nombre del metodo*/ 
        target.prototype.estampado =function():void{
            console.log("Camiseta estampada con el logo de: "+logo);
        }
    }
};
//usar decorador en Camiseta 
@estampar('Gucci Gang')
// clase (molde del objeto) siempre enpesar con mayuscula el nombre de la clase
//la class export es para poderla usar en cualquier otro archivo 
//aplicar el interface al objeto
class Camiseta implements CamisetaBase {

    //porpiedades (caracteristicas del objeto)
    /*con el public puedes cabiar los valores
    existen tres valores 
    private solo son accesibles desde dentro de la clase 
    public acceder desde cualquier parte 
    protecter acceder desde la clase que lo define*/
    public color: string;
    public modelo: string;
    public marca: string;
    public talla: string;
    public precio: number;
    //Metodos (funciones o acciones del objeto)
    //metodo costructor corre antes que las demas y no devuelve nada 
    constructor(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    /*pide la clase color q es la variable this es cambiarColor*/
    public cambiarColor(color) {
        this.color = color;
    }
    //recoje la var color
    public getColor() {
        return this.color
    }

}

//Clase hija Sudadera con la palabra extends con eso eredo una classe
class Sudadera extends Camiseta{
    public capucha: boolean;

    setCapucha(capucha:boolean){
        this.capucha = capucha;
    }
    getCapucha():boolean{
        return this.capucha
    }
}


//instacia de un objeto
var camiseta = new Camiseta("rojo", "manga larga", "nike", "1", 14);
console.log(camiseta);
//impreso de decorador
camiseta.estampado();

//clase hija conectado
var sudadera_nike = new Sudadera("Rojo","Manga Larga","nike","1",16);
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




