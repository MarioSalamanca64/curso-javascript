import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*para usar tipo input*/ 
import{FormsModule} from '@angular/forms';
//importacion de router approuting es el servisio
import{routing,appRoutingProviders} from './app.routing';
//http peticiones 
import{HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {VideojuegoComponent} from './videojuego/videojuego.component';
import{ZapatillasComponent} from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';
import { ContactoComponent } from './contacto/contacto.component';
//pipe cal
//import{CalculadoraPipe} from './pipes/calculadora.pipe';


/*modulos internos que creamos nosotros*/ 
//configuracion de router routing en imports servidio approuring en providers
@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent,
    ExternoComponent,
    ContactoComponent,
  ],
  /*modulos externos*/ 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
