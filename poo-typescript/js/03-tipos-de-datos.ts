//tipado fuerte
//var = let
//global 
type alfanumerico = string | number;
//string
let cadena: alfanumerico = "Mario salamanca";
cadena = 12;

//number
let numero: number = 12;

//Boleano
let verdadero_falso: boolean = true;

//any cualquier valor
let cualquiera: any = "hola";
cualquiera = 77;

// arrays
var lenguajes: Array<any> = ["PHP","JS","CSS"];

let years: number [] = [12,13,14];

//juntar dos tipos de datos

let dostipos: string | number = "juan";
dostipos = 12;

//let vs var
var numero1 = 10;
var numero2 = 12;
/*si numero es igual a 10 entra al if*/ 
if(numero1 == 10){
    let numero1 = 44;
    var numero2 = 55;
    console.log(numero1,numero2);
}
console.log(numero1,numero2);


console.log(cadena,numero,verdadero_falso,cualquiera);