// Importar modulos de router de angular
import {ModuleWithProviders} from '@angular/core';
import{Routes,RouterModule} from '@angular/router';

//Importar componentes
import { HomeComponent } from './home/home.component';
import{ZapatillasComponent}from './zapatillas/zapatillas.component';
import{VideojuegoComponent} from './videojuego/videojuego.component';
import{CursosComponent}from './cursos/cursos.component';
import {ExternoComponent} from './externo/externo.component';
//contacto
import{ContactoComponent} from './contacto/contacto.component';


//Array de rutas --constante es un elemento q jamas cambiara conts-- 
//routes los objetos tiene que cumplir el fromato de angular
//path es ruta 
//crear un componente home --ng generate component home
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path:'zapatillas', component: ZapatillasComponent},
    {path:'videojuego', component:VideojuegoComponent},
    //para poner parametrios sepeude crear otro paremetro /:apellidos pero ese es opcional al poner 
    {path:'cursos',component:CursosComponent},
    {path:'cursos/:nombre/:followers',component:CursosComponent},
    {path: 'externo',component: ExternoComponent},
    {path: 'contacto',component: ContactoComponent},
    {path:'**' ,component:HomeComponent}
];
//Exportar el modulo del router
export const appRoutingProviders: any[] = [];
export const routing : ModuleWithProviders <any> = RouterModule.forRoot(appRoutes);