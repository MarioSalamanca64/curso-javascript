import{Injectable} from '@angular/core';
import{Zapatilla} from '../models/zapatilla';
//import{ ZapatillaService } from '../service/ZapatillaService';

@Injectable()
export class ZapatillaService{
    public zapatillas: Array <Zapatilla>;


    constructor(){
        this.zapatillas = [
            new Zapatilla('Rebook Air Max','Rebook','Blanco',80,true),
            new Zapatilla('Rebook Classic','Rebook','Blanco',50,true),
            new Zapatilla('Nike Runner MD','Nike','Negras',60,true),
            new Zapatilla('Adidas Yezzy','Adidas','gris',180,false),
            new Zapatilla('spartan','rojas','gris',180,false)
        ];
    }
    getTexto(){
        return"hola Mundo desde un servicio";
    }
   getZapatillas(): Array<Zapatilla>{
    return this.zapatillas;
   } 
}