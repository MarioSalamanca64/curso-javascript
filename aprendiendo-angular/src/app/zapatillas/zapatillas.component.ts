import { ProviderAst } from '@angular/compiler';
import{Component, OnInit} from '@angular/core';
import { provideRoutes } from '@angular/router';
import{Zapatilla} from '../models/zapatilla';
import { ZapatillaService } from '../service/zapatilla.service';
@Component({
    selector:'zapatillas',
    templateUrl: './zapatillas.component.html',
    //servicio
    providers:[ZapatillaService]
    
})

export class ZapatillasComponent implements OnInit{
    public titulo: string = "Componente de zapatillas";
    /*costructor de Zapatilla [es un array]*/ 
    public zapatillas: Array<Zapatilla> | undefined;
    public marcas: String[];
    /*metodo swich*/ 
    public color: string;
    /*metodo para añadir nuevas marcas*/
    public mi_marca: string; 
    zapatilla: any;
   

    constructor(
        private _ZapatillaService: ZapatillaService
    ){
        this.mi_marca = "Fila";
        this.color = 'red';
        this.marcas = new Array();
}
ngOnInit(){
    this.zapatillas = this._ZapatillaService.getZapatillas();
    alert(this._ZapatillaService.getTexto());
    this.getMarcas();
}

getMarcas(){
    this.zapatilla.forEach((value: { marca: String; },index: any)=>{
        /*para mostrar el array de marcas pero sin que se repitan*/ 
        if(this.marcas.indexOf(value.marca) < 0){
            this.marcas.push(value.marca);
        }
        
    });
    console.log(this.marcas);
}

getMarca(){
    alert(this.mi_marca);
}
/*añadir una marca al array*/ 
addMarca(){
    this.marcas.push(this.mi_marca);
}

borrarMarca(value: any){
    /*borra de una manera*/
    //delete this.marcas[index]
    /*Borrar de mejor manera*/
    this.marcas.splice(value,1);

}
onBlur(){
    console.log("Has salido del input");
}

mostrarPalabra(){
    alert(this.mi_marca);
}

}