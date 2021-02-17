import { Component, OnInit } from '@angular/core';
//import { format } from 'path';
//import { from } from 'rxjs';
import { PeticionesService } from '../service/peticiones.service';
//import {PeticionesService} from '../service/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {
  //usuario
  public user: any;
  //input usuario
  public userId: any;
  //pipes fecha
  public fecha: any;
  //nuevo usuario 
  public new_user: any;
  public usuario_guardado:any;

  constructor(
    private _peticionesService: PeticionesService
  ) {
    //para cargan un solo usuario
    this.userId = 1;
    //nuevo usuario
    this.new_user = {
      "name": "",
      "job": ""
    };
  }
  ngOnInit(): void {
    this.fecha = new Date(2019, 5, 20),

      this.cargaUsuario();
  }
  //recoje un resultado y un error
  //hace las peticiones para que muestren los usurios
  //get para que lo carge igual q en peticiones
  cargaUsuario(): void {
    this.user = false;
    this._peticionesService.getUser(this.userId).subscribe(
      result => {
        this.usuario_guardado = Response;
        this.user = result.data;
        
        console.log(result);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  //subscribe recojer los datos
  onSubmit(form: { reset: () => any; }) {
    this._peticionesService.addUser(this.new_user).subscribe(
       (response) => {
        this.usuario_guardado = response;
        //console.log(response);
        const newLocal = form.reset();
      },
      function (error) {
        console.log(<any>error);
      }

    );
  }





}
