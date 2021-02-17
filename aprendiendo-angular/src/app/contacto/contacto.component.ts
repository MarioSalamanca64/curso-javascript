import { Component, OnInit } from '@angular/core';
import {ContactoUsuario} from '../models/usuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public usuario:ContactoUsuario;

  constructor() {
    this.usuario = new ContactoUsuario('','','','');
   }

  ngOnInit() {
  }
  //(form) vaciar formulario y form.reset
  onSubmit(form: { reset: () => void; }){
    form.reset();
    console.log("Evento submit lanzado");
    console.log(this.usuario);
  }

}
