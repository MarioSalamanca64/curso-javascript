import{ModuleWithProviders} from '@angular/core';
import{Routes,RouterModule} from '@angular/router';
//importando componentes de app.modules.ts
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
//eliminar archivos
import {DetailComponent} from './components/detail/detail.component';


//conectando con los import
const appRoutes: Routes = [
    {path: '',component: AboutComponent},
    {path:'sobre-mi',component:AboutComponent},
    {path:'proyectos',component:ProjectsComponent},
    {path:'crear-proyecto',component:CreateComponent},
    {path:'contacto',component:ContactComponent},
    //elimniar archivos
    {path: 'proyecto/:id',component:DetailComponent},
    //cuando no carge ningun componente 
    {path:'**',component:ErrorComponent}
];

//exportar las configuracion de las rutas 
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);