//@angular/core es una libreria  OnInit se ejecuta depues de el costructor
//oninit usa implements onont y ngoninit
//DoCheck se ejecutara cada que se hace un cambio en el componente
//usa docheck ngdocheck
//OnDestroy para que se ejecute algo antes de eleminar la instaciad e un componente
import { Component,OnInit,DoCheck } from '@angular/core';

@Component({
    selector: 'videojuego',
    //archivo en linea
    /*template:`
    <h2>Componente de videojuego</h2>
    <ul>
        <li>GTA</li>
        <li>Prince of Persia</li>
        <li>Tekken</li>
        <li>Mario</li>
    </ul>
    `*/
    //templateUrl es para cargar un archivo pero debe estar en componente 
    templateUrl:'./videojuego.component.html'
})
/*exportar el componente*/
export class VideojuegoComponent implements OnInit, DoCheck{
    //tanbien se pueden poner valores como number o string
    public titulo: string;
    public listado: string;

    constructor(){
        this.titulo = "Componente de Videojuegos";
        this.listado = "Listado delos juegos mas populares.ts";

       // console.log("Se ha cargado el componente: videojuego.component.ts");
    }
    ngOnInit(){
        //console.log("OnInit ejecutado");
    }
    ngDoCheck(){
        //console.log("DoCheck ejecutado");
    }

    cambiarTitulo(){
        this.titulo = "Nuevo titulo del componente"
    }

}