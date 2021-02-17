//componente especial onInit
import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
//tanbien implements para que funcione oninit
export class CursosComponent implements OnInit {
  public nombre:string | undefined;
  public followers: number | undefined;
  
  constructor(
    private _rute: ActivatedRoute,
    private _ruter: Router
  ) { }
//no se puede usar son el OnInit
  ngOnInit(): void {
    this._rute.params.subscribe((params: Params)=> {
      this.nombre = params.nombre;
      this.followers = +params.followers;
      //this.nombre = params['nombre'];
      //añadir follower
      console.log(this.followers);
    });
  }
  redirigir(){
    this._ruter.navigate(['/zapatillas']);
  }

}
